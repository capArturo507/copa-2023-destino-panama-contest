import { generateRandomIndices } from '$lib/random-items';
import {
	formatDate,
	fromUTCToZonedTime,
	logMessage,
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
	isNotNil,
	map,
	objOf,
	pipe,
	prop,
	tap
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
import {
	paramsToParticipation,
	processParticipationInsert,
	processParticipationQuery
} from '../transformations';

import { getFromCache, saveToCache } from '../cache';
import { getTimeToEndInSeconds } from '../utils';

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

const getCompletedTime = prop('completed_time_ms');

/** @type {import('./$types').Actions} */
export const register = async ({ cookies, request, locals }: RequestEvent) => {
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

	const ifNoCacheRegister = orElse(participateOrReturnQuestions);

	const saveToCaches = saveToCache(cookies, false);

	const ifResultSaveCache = chain(saveToCaches);

	const setCacheObject = curry(
		(
			key: string,
			minimumTime: number,
			maximumTime: number,
			participation: DataBase.ParticipationQueryRow
		): App.CacheValue => {
			const hasCompletedParticipation = pipe(getCompletedTime, isNotNil);
			const getSeconds = ifElse(
				hasCompletedParticipation,
				always(maximumTime),
				always(minimumTime)
			);
			const seconds = getSeconds(participation);
			const setCacheObject = pipe(
				stringify,
				objOf('value'),
				assoc('key', key),
				assoc('seconds', seconds)
			);
			return setCacheObject(participation);
		}
	);

	const initCacheObject = setCacheObject(
		COOKIE_PARTICIPATION,
		parseInt(REGISTER_CACHE_IN_SECONDS),
		getTimeToEndInSeconds()
	);

	const mapToCacheObject = map(initCacheObject);

	const setCacheToLocals = (value: App.CacheValue) => (locals.cache = value);

	const saveCache = pipe(mapToCacheObject, tap(map(setCacheToLocals)), ifResultSaveCache);

	const initRegistration = pipe(
		getFromCache(false),
		andThen(ifNoCacheRegister),
		andThen(tap(saveCache))
	);

	const participation = await initRegistration(COOKIE_PARTICIPATION, cookies);

	logMessage('showing final object')(participation);

	return {
		success: true
	};
};
