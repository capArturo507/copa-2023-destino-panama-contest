import { DIRECTUS_SITE, REDIS_TOKEN, REDIS_URL } from '$env/static/private';
import { Redis } from '@upstash/redis';
import { invoker } from 'ramda';

const redis = new Redis({
	url: REDIS_URL,
	token: REDIS_TOKEN
});

const setCache = invoker(2, 'set');

const setSiteCache = async (value: string) => await redis.set(DIRECTUS_SITE, 'bar');

const setSiteCache = async (value: string) => await redis.set(DIRECTUS_SITE, 'bar');
