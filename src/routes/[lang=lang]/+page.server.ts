import { PUBLIC_LANGUAGE_COOKIE, PUBLIC_LANGUAGE_COOKIE_MAX_AGE } from '$env/static/public';
import getContent from '$lib/server/directus-page-content.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
	const maxCookieAge = parseInt(PUBLIC_LANGUAGE_COOKIE_MAX_AGE);

	const paramLanguage = params.lang;

	cookies.set(PUBLIC_LANGUAGE_COOKIE, paramLanguage, {
		path: '/',
		httpOnly: true,
		sameSite: true,
		maxAge: maxCookieAge ? maxCookieAge : undefined
	});

	var content = await getContent(['18', '10', '11', '9', '12'], paramLanguage);

	if (!content) throw error(404, 'No content');

	return { content };
}
