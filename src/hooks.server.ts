import {
	COOKIE_LANGUAGE,
	COOKIE_PARTICIPATION,
	COOKIE_QUESTIONS,
	COOKIE_TOST
} from '$env/static/private';
import { isValidLanguage } from '$lib/utils';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {  

	const { cookies, locals } = event;

	const languageFromCookie = cookies.get(COOKIE_LANGUAGE);

	const participationFromCookies = cookies.get(COOKIE_PARTICIPATION);

	const questionsFromCookies = cookies.get(COOKIE_QUESTIONS);

	const alertaDelCookie = cookies.get(COOKIE_TOST);

	locals.alerta = alertaDelCookie ? JSON.parse(alertaDelCookie) : undefined;

	if (languageFromCookie && isValidLanguage(languageFromCookie))
		locals.language = languageFromCookie;

	if (participationFromCookies) locals.participation = JSON.parse(participationFromCookies);

	if (questionsFromCookies) locals.questions = questionsFromCookies.split(',');

	const response = await resolve(event);
	return response;
}
