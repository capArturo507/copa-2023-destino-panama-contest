import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ setHeaders, locals }) => {
	setHeaders({
		'cache-control': 'max-age=600'
	});
	throw redirect(303, `/${locals.language}`);
};
