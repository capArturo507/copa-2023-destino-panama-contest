import { COOKIE_LANGUAGE, NODE_ENV } from '$env/static/private';
import { getHomeData } from '$lib/server/data/get-data-with-cache.js';
import { getPagesSetings, getTimeToEndInSeconds } from '$lib/server/utils.js';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, params, cookies, parent }) {
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

	const parentData = await parent();

	const pages = getPagesSetings(parentData);

	console.log(pages);

	return {
		content: content(),
		language: languageFromParam
	};
}
