import { getFooter, getHeader, getSite } from '$lib/server/directus';
import { setLanguage } from '$lib/server/language-setter.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	const { cookies, locals } = event;

	const site = await getSite();

	setLanguage(event, site);

	const header = () => getHeader();
	const footer = () => getFooter();

	return {
		openLanguageNav: cookies.get('openLanguageNav'),
		header: header(),
		footer: footer(),
		language: locals.language
	};
}
