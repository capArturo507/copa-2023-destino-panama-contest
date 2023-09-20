import { findInArray, getSupportedlanguages, processHeaderLanguage } from '$lib/server/utils.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, parent, request }) {
	const parentData = await parent();

	if (locals.language) throw redirect(303, `/${locals.language}`);

	const supportedLanguages = getSupportedlanguages(parentData.siteData);

	const browserLanguages = request.headers.get('Accept-Language');

	if (!browserLanguages) throw redirect(303, `/${supportedLanguages[0]}`);

	const processedBrowserLanguage = processHeaderLanguage(browserLanguages);

	const matchFirstPreference = findInArray(supportedLanguages)(processedBrowserLanguage);

	if (matchFirstPreference) throw redirect(303, `/${matchFirstPreference}`);

	throw redirect(303, `/${supportedLanguages[0]}`);
}
