import { PUBLIC_LANGUAGE_COOKIE, PUBLIC_LANGUAGE_COOKIE_MAX_AGE } from '$env/static/public';
import getContent from '$lib/server/directus-page-content.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const maxCookieAge = parseInt(PUBLIC_LANGUAGE_COOKIE_MAX_AGE);

	cookies.set(PUBLIC_LANGUAGE_COOKIE, 'es', {
		path: '/',
		httpOnly: true,
		sameSite: true,
		maxAge: maxCookieAge ? maxCookieAge : undefined
	});

	var content = getContent(['18', '9', '10', '11', '12'], 'es');

	return { content };
}
