import { REDIS_TOKEN, REDIS_URL } from '$env/static/private';
import { Redis } from '@upstash/redis';
import { __, invoker } from 'ramda';

const redis = new Redis({
	url: REDIS_URL,
	token: REDIS_TOKEN
});

export const setRedisData = invoker(2, 'set')(__, redis);

export const getRedisData = invoker(1, 'get')(__, redis);

export const getRedisTTL = invoker(1, 'ttl')(__, redis);
