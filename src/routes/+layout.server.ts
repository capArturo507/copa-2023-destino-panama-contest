import { getFooter, getHeader, getSite } from '$lib/server/directus';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	const basePromisedData = Promise.all([getSite(), getHeader(), getFooter()]);

	const baseData = await basePromisedData;

	return {
		header: header(),
		footer: footer(),
		site: site()
	};
}
