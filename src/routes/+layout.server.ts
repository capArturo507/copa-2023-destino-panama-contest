import { getFooterData, getHeaderData, getSiteData } from '$lib/server/data/get-data-with-cache.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	const siteData = () => getSiteData();
	const header = () => getHeaderData();
	const footer = () => getFooterData();

	return {
		siteData: siteData(),
		header: header(),
		footer: footer(),
		language: locals.language
	};
}
