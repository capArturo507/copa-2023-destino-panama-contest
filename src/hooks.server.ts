import { COOKIE_LANGUAGE } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

let a = 1;

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const { url, cookies, locals } = event;

	const languageFromCookie = cookies.get(COOKIE_LANGUAGE);

	console.log('en hook');

	if (languageFromCookie) locals.language = languageFromCookie;

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
