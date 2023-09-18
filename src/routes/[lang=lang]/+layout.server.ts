import { getFooterContent } from '$lib/server/directus-get-footer';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const language = params.lang;
	const content = await getFooterContent(language);

	if (!content || Array.isArray(content) || typeof content !== 'object')
		throw error(404, 'Content not found');

	return content;
};
