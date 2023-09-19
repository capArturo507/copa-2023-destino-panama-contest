import { REDIS_TOKEN, REDIS_URL } from '$env/static/private';
import { createResultError, createResutlOk, logMessage, orElse, parseJSON } from '$lib/utils';
import type { Cookies, RequestEvent } from '@sveltejs/kit';
import { Redis } from '@upstash/redis';
import {
	F,
	__,
	always,
	andThen,
	assoc,
	chain,
	curry,
	identity,
	ifElse,
	invoker,
	isNil,
	otherwise,
	pipe,
	tap,
	tryCatch
} from 'ramda';

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

const onlyCookieToPromise = (value: any) => new Promise((resolve) => resolve(value));

export const getFromCache = (redis: boolean) =>
	redis
		? pipe(getCookie, orElse(getRedisCache), andThen(tryToParseAndValidateNil))
		: pipe(getCookie, tryToParseAndValidateNil, onlyCookieToPromise);

/* SAVE TO CACHE */

const setRedis = invoker(3, 'set')(__, __, __, redis);

const setCacheInRedis = ({ key, value, seconds }: App.CacheValue) =>
	setRedis(key, value, { ex: seconds });

const basicCookieOptions = { sameSite: true, secure: true };

const setCacheInCookie = curry((cookies: Cookies, { key, value, seconds }: App.CacheValue) =>
	cookies.set(key, value, assoc('maxAge', seconds, basicCookieOptions))
);

export const saveToCache = curry(
	(cookies: Cookies | null, redis: boolean, cacheSetting: App.CacheValue) => {
		const cookieSetter = cookies ? setCacheInCookie(cookies) : F;

		const redisSetter = redis
			? pipe(setCacheInRedis, otherwise(createResultError), andThen(createResutlOk))
			: identity;

		const saveAllCaches = pipe(tap(cookieSetter), redisSetter);

		return saveAllCaches(cacheSetting);
	}
);
