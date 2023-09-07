import { redirect } from '@sveltejs/kit';
import { PUBLIC_DEFAULT_LANGUAGUE, PUBLIC_LANGUAGE_COOKIE } from '$env/static/public';

const buildHomeURL = (lang: string) => `/${lang.toLowerCase()}/`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, locals }) {
	// determine if the user has cookies or else use their preferred browser settings
	const supportedLanguages = locals.supportedLanguages;

	const cookieLang = cookies.get(PUBLIC_LANGUAGE_COOKIE);

	if (cookieLang && supportedLanguages.includes(cookieLang))
		throw redirect(302, buildHomeURL(cookieLang));

	const browserLang = locals.browserLanguage;

	browserLang.forEach((lang) => {
		if (supportedLanguages.includes(lang)) throw redirect(302, buildHomeURL(lang));
	});

	throw redirect(302, buildHomeURL(PUBLIC_DEFAULT_LANGUAGUE));
}
