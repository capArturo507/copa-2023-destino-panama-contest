import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { isContestOver } from '$lib/server/utils';

export const load: PageServerLoad = ({ setHeaders, locals }) => {
	setHeaders({
		'cache-control': 'max-age=600'
	});

  if (isContestOver()) throw redirect(303, '/contest-over')

	throw redirect(303, `/${locals.language}`);
};
