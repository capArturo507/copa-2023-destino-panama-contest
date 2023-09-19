import { getHomeContent } from '$lib/server/directus.js';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, params }) {
	const content = () => getHomeContent();

	return {
		language: locals.language,
		content: content()
	};
}
