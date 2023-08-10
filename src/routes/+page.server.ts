import { redirect } from '@sveltejs/kit';
import { PUBLIC_LANGUAGE_COOKIE } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
	// determine if the user has cookies or else use their preferred browser settings
	const cookieLang = cookies.get(PUBLIC_LANGUAGE_COOKIE);

	const browserLang = locals.browserLanguage;

	const lang = cookieLang || browserLang;

	throw redirect(302, '/' + lang);
}
