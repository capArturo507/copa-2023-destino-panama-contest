import { COOKIE_LANGUAGE, NODE_ENV } from '$env/static/private';
import { getHomeData } from '$lib/server/data/get-data-with-cache.js';
import { getTimeToEndInSeconds } from '$lib/server/utils.js';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, params, cookies }) {
	const content = () => getHomeData();

	const languageFromParam = params.lang;

	const languageFromLocals = locals.language;

	if (!languageFromLocals || languageFromParam !== languageFromLocals)
		cookies.set(COOKIE_LANGUAGE, languageFromParam, {
			path: '/',
			maxAge: getTimeToEndInSeconds(),
			sameSite: 'strict',
			secure: NODE_ENV === 'production'
		});

	return {
		content: content(),
		language: languageFromParam
	};
}
