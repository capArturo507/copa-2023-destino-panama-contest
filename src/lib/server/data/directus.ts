import { DIRECTUS_HOST, DIRECTUS_TOKEN } from '$env/static/private';
import { authentication, createDirectus, readItem, readItems, rest } from '@directus/sdk';
import { __, invoker } from 'ramda';

const client = createDirectus(DIRECTUS_HOST).with(authentication()).with(rest());

client.setToken(DIRECTUS_TOKEN);

export const readMultipleDirectusItems = invoker(2, 'readItems')(__, __, client);

export const readSingleDirectusItem = invoker(3, 'readItem')(__, __, __, client);
