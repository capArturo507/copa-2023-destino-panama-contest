import { generateRandomIndices } from '$lib/random-items';
import {
	formatDate,
	fromUTCToZonedTime,
	log,
	logError,
	nowToUTCString,
	stringify
} from '$lib/utils';
import { __, curry, fromPairs, pipe } from 'ramda';
import { DATABASE_DATE_FORMAT, DB_TIMEZONE } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';
import { insertParticipation } from '../database/database';
import Result from 'folktale/result';

const toArray = (formData: FormData) => Array.from(formData);

export const formDataToObject = pipe(toArray, fromPairs);

const setTimeZone = fromUTCToZonedTime(__, DB_TIMEZONE, {});

const setDatabaseDateFormat = formatDate(__, DATABASE_DATE_FORMAT, {});

const getNowFormated = pipe(nowToUTCString, setTimeZone, setDatabaseDateFormat);

const append = curry((formData: FormData, key: DataBase.QueryParticipationKeys, value: string) => {
	formData.append(key, value);
	return formData;
});

/** @type {import('./$types').Actions} */
export const register = async ({
	cookies,
	getClientAddress,
	locals,
	request,
	setHeaders
}: RequestEvent) => {
	// validate server cache

	/* if no server cache for request then request actually */

	const formData = await request.formData();

	append(formData, 'questions', generateRandomIndices(60, 10));

	append(formData, 'started_datetime', getNowFormated());

	const params = formDataToObject(formData);

	const attemptToParticipate: typeof Result.Ok | typeof Result.Error = await insertParticipation(
		params
	);

	log(
		Result.Ok(1)
			.orElse((x: any) => 'yeyo')
			.map((x: any) => 'lucky')
	);

	/* set client and server cache */

	return {
		success: true
	};
};
