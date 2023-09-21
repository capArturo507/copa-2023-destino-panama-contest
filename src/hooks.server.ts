import {
	COOKIE_LANGUAGE,
	COOKIE_PARTICIPATION,
	COOKIE_QUESTIONS,
	COOKIE_TOST
} from '$env/static/private';
import { redirect } from '@sveltejs/kit';

let a = 1;

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const { url, cookies, locals } = event;

	const languageFromCookie = cookies.get(COOKIE_LANGUAGE);

	const participationFromCookies = cookies.get(COOKIE_PARTICIPATION);

	const questionsFromCookies = cookies.get(COOKIE_QUESTIONS);

	const alertaDelCookie = cookies.get(COOKIE_TOST);

	locals.alerta = alertaDelCookie ? JSON.parse(alertaDelCookie) : undefined;

	if (languageFromCookie) locals.language = languageFromCookie;

	if (participationFromCookies) locals.participation = JSON.parse(participationFromCookies);

	if (questionsFromCookies) locals.questions = questionsFromCookies.split(',');

	if (url.pathname === '/change-language') {
		const openStatus = cookies.get('openLanguageNav');
		cookies.set('openLanguageNav', openStatus === 'open' ? 'close' : 'open');
		throw redirect(
			303,
			url.origin.replace(`${url.protocol}://${url.host}${url.port ? ':' + url.port : ''}`, '/')
		);
	}

	const response = await resolve(event);
	return response;
}
