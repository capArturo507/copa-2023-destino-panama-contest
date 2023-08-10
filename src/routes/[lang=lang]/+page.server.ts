import { PUBLIC_LANGUAGE_COOKIE, PUBLIC_LANGUAGE_COOKIE_MAX_AGE } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
	// Set the language cookie
	const maxCookieAge = parseInt(PUBLIC_LANGUAGE_COOKIE_MAX_AGE);

	cookies.set(PUBLIC_LANGUAGE_COOKIE, params.lang, {
		path: '/',
		httpOnly: true,
		sameSite: true,
		maxAge: maxCookieAge ? maxCookieAge : undefined
	});

	// Get the homepage content and render

	return {};
}
