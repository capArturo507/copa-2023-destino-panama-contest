import { getFooter, getHeader } from '$lib/server/directus';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ setHeaders, cookies }) {
	const header = () => getHeader();
	const footer = () => getFooter();

	setHeaders({
		'Cache-Control': 'max-age=604800'
	});

	return {
		openLanguageNav: cookies.get('openLanguageNav'),
		language: 'es',
		header: header(),
		footer: footer()
	};
}
