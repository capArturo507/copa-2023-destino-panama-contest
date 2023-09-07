import { PUBLIC_LANGUAGE_COOKIE, PUBLIC_LANGUAGE_COOKIE_MAX_AGE } from '$env/static/public';
import { error } from '@sveltejs/kit';
import getPageContent from '$lib/server/directus-page-content.js';
import { SITE_ID } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies, locals, request }) {
	const supportedLanguages = locals.supportedLanguages;

	const paramsLanguage = params.lang;

	if (!supportedLanguages.includes(paramsLanguage)) throw error(404, request.url);

	const cookieStoredLanguage = cookies.get(PUBLIC_LANGUAGE_COOKIE);

	if (
		!cookieStoredLanguage ||
		(cookieStoredLanguage !== paramsLanguage && supportedLanguages.includes(paramsLanguage))
	) {
		const maxCookieAge = parseInt(PUBLIC_LANGUAGE_COOKIE_MAX_AGE);

		cookies.set(PUBLIC_LANGUAGE_COOKIE, paramsLanguage, {
			path: '/',
			httpOnly: true,
			sameSite: true,
			maxAge: maxCookieAge ? maxCookieAge : undefined
		});
	}

	const pageContent = await getPageContent(SITE_ID, 'home', 'gs', paramsLanguage);

	// Get the homepage content and render
	return { pageContent };
}
