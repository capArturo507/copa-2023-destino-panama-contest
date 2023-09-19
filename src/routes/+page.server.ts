import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ locals }) {
	if (locals.language) throw redirect(303, '/' + locals.language);
}
