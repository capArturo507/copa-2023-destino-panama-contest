import { COOKIE_LANGUAGE } from '$env/static/private';
import { getLanguage } from '$lib/server/language.js';
import { getCookieSettings } from '$lib/server/utils.js';
import { daysInSeconds } from '$lib/utils.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	const { locals, cookies } = event;

	const language = getLanguage(event);

	locals.language = language;
	cookies.set(COOKIE_LANGUAGE, language, getCookieSettings(daysInSeconds(15)));

	return {
		alerta: locals.alerta,
		language
	};
}
