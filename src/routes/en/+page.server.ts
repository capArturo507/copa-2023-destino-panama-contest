import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'max-age=600'
	});
	return {};
};
