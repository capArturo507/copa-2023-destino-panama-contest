import { COOKIE_LANGUAGE, NODE_ENV } from '$env/static/private';
import { getFooter, getHeader, getSite } from '$lib/server/directus';
import { determineInitialLanguage } from '$lib/server/language-setter.js';
import { getTimeToEndInSeconds } from '$lib/server/utils.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ setHeaders, cookies, request, locals, params }) {
	const browserLanguage = request.headers.get('Accept-Language');
	const site = await getSite();

	cookies.set(COOKIE_LANGUAGE, determineInitialLanguage(browserLanguage, site), {
		path: '/',
		sameSite: 'strict',
		secure: NODE_ENV === 'production',
		maxAge: getTimeToEndInSeconds()
	});

	const header = () => getHeader();
	const footer = () => getFooter();

	setHeaders({
		'Cache-Control': 'max-age=604800'
	});

	return {
		openLanguageNav: cookies.get('openLanguageNav'),
		header: header(),
		footer: footer(),
		language: locals.language
	};
}
