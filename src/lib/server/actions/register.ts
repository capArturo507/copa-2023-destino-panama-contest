import { generateRandomIndices } from '$lib/random-items';
import {
	formatDate,
	fromUTCToZonedTime,
	log,
	logError,
	nowToUTCString,
	orElse,
	stringify
} from '$lib/utils';
import {
	__,
	always,
	andThen,
	assoc,
	chain,
	curry,
	defaultTo,
	fromPairs,
	ifElse,
	invoker,
	isNil,
	isNotNil,
	map,
	modify,
	objOf,
	pipe,
	prop,
	tap,
	tryCatch
} from 'ramda';
import {
	APP_MAX_QUESTIONS,
	APP_TOTAL_QUESTIONS,
	COOKIE_PARTICIPATION,
	DATABASE_DATE_FORMAT,
	DB_TIMEZONE,
	REGISTER_CACHE_IN_SECONDS
} from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';
import { getParticipationDetails, insertParticipation } from '../database/database';
import Result from 'folktale/result';
import {
	paramsToParticipation,
	processParticipationInsert,
	processParticipationQuery
} from '../transformations';

import { getFromCache, setRedis } from '../cache';

const toArray = (formData: FormData) => Array.from(formData);

export const formDataToObject = pipe(toArray, fromPairs);

const setTimeZone = fromUTCToZonedTime(__, DB_TIMEZONE, {});

const setDatabaseDateFormat = formatDate(__, DATABASE_DATE_FORMAT, {});

const getNowFormated = pipe(nowToUTCString, setTimeZone, setDatabaseDateFormat);

const append = curry((formData: FormData, key: DataBase.QueryParticipationKeys, value: string) => {
	formData.append(key, value);
	return formData;
});

const defaultTo0 = defaultTo(0);

const parseIntOrDefault = defaultTo0(parseInt);

/** @type {import('./$types').Actions} */
export const register = async ({ cookies, request, setHeaders }: RequestEvent) => {
	const formData = await request.formData();

	append(
		formData,
		'questions',
		generateRandomIndices(
			parseIntOrDefault(APP_TOTAL_QUESTIONS),
			parseIntOrDefault(APP_MAX_QUESTIONS)
		)
	);

	append(formData, 'started_datetime', getNowFormated());

	const params = formDataToObject(formData);

	const initialParticipation = paramsToParticipation(params);

	const participate = () => insertParticipation(params);

	const getParticipation = () => getParticipationDetails(params);

	const initParticipationInsertProcess = processParticipationInsert(initialParticipation);

	const orElseGetParticipation = orElse(getParticipation);

	const participateOrReturnQuestions = pipe(
		participate,
		andThen(initParticipationInsertProcess),
		andThen(orElseGetParticipation),
		andThen(processParticipationQuery)
	);

	/* set client, server cache, and cookies */

	const ifNoCacheRegister = orElse(participateOrReturnQuestions);

	const ifResultSaveCache = chain();

	const initRegistration = pipe(
		getFromCache,
		andThen(tap(log)),
		andThen(ifNoCacheRegister),
		andThen(tap(log))
	);

	const participation = initRegistration(COOKIE_PARTICIPATION, cookies);

	return {
		success: true
	};
};
