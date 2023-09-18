import {
	COOKIE_PARTICIPATION,
	REDIS_TOKEN,
	REDIS_URL,
	REGISTER_CACHE_IN_SECONDS
} from '$env/static/private';
import { createResultError, createResutlOk, log, orElse, parseJSON, stringify } from '$lib/utils';
import type { Cookies } from '@sveltejs/kit';
import { Redis } from '@upstash/redis';
import {
	__,
	always,
	andThen,
	chain,
	ifElse,
	isNil,
	isNotNil,
	modify,
	otherwise,
	pipe,
	prop,
	tap,
	tryCatch
} from 'ramda';
import { invoker } from 'ramda';
import { getTimeToEndInSeconds } from './utils';

const redis = new Redis({
	url: REDIS_URL,
	token: REDIS_TOKEN
});

/* READ FROM CACHE */

const getRedis = invoker(1, 'get')(__, redis);

const parseAndResult = pipe(parseJSON, createResutlOk);

const tryToParse = tryCatch(parseAndResult, createResultError);

const getCookie = (key: string, cookie: Cookies) => {
	const cookieValue = cookie.get(key);

	const errorWithKey = createResultError(key);

	if (!cookieValue) return errorWithKey;

	const tryToParseCookie = tryCatch(parseAndResult, always(errorWithKey));

	return tryToParseCookie(cookieValue);
};

const ifNilReturnError = ifElse(isNil, createResultError, createResutlOk);

const tryToParseAndValidateNil = pipe(chain(tryToParse), chain(ifNilReturnError));

const getRedisCache = pipe(getRedis, otherwise(createResultError), andThen(createResutlOk));

export const getFromCache = pipe(
	getCookie,
	orElse(getRedisCache),
	andThen(tryToParseAndValidateNil)
);

/* SAVE TO CACHE */

const setRedis = invoker(3, 'set')(__, __, __, redis);

const timeToEndInSeconds = getTimeToEndInSeconds();

const minCacheAge = parseInt(REGISTER_CACHE_IN_SECONDS);

const getCompletedTimeInMS = prop('completed_time_ms');

const isCompleted = pipe(getCompletedTimeInMS, isNotNil);

const defineCacheTime = ifElse(isCompleted, getTimeToEndInSeconds, always(minCacheAge));

const setParticationCookie = ({ value, seconds }: App.CacheValue) =>
	cookies.set(COOKIE_PARTICIPATION, value, {
		maxAge: seconds,
		sameSite: true,
		secure: true
	});

const setCache = ({ seconds }: App.CacheValue) =>
	setHeaders({ 'cache-control': `max-age=${seconds}` });

const setRedisCache = ({ value, seconds }: App.CacheValue) =>
	setRedis(COOKIE_PARTICIPATION, value, { ex: seconds });

const stringifyValue = modify('value', stringify);

const calculateCacheTime = modify('seconds', defineCacheTime);

const saveCaches = pipe(
	objOf('value'),
	assoc('seconds', 0),
	stringifyValue,
	calculateCacheTime,
	tap(log) /* , tap(setParticationCookie), tap(setCache), tap(setRedisCache) */
);

export const saveToCache = pipe();
