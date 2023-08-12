import { redirect } from '@sveltejs/kit';
import { PUBLIC_DEFAULT_LANGUAGUE, PUBLIC_LANGUAGE_COOKIE } from '$env/static/public';
import {
	CMS_HOST,
	CMS_TOKEN,
	SITES_COLLECTION,
	SITE_ID,
	CMS_SUPPORTED_LANGS_FILTER
} from '$env/static/private';
import { createDirectus, rest, readItem, authentication } from '@directus/sdk';
import { flatSupportedLanguages } from '$lib/server/helpers.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, fetch, locals }) {
	// determine if the user has cookies or else use their preferred browser settings
	const cookieLang = cookies.get(PUBLIC_LANGUAGE_COOKIE);

	if (cookieLang) throw redirect(302, '/' + cookieLang.toLowerCase());

	const browserLang = locals.browserLanguage;

	const client = createDirectus(CMS_HOST).with(authentication()).with(rest());

	client.setToken(CMS_TOKEN);

	const supportedLangResponse = await client
		.request(
			readItem(SITES_COLLECTION, SITE_ID, {
				fields: [CMS_SUPPORTED_LANGS_FILTER]
			})
		)
		.catch((err) => {
			console.error(err);
			return [PUBLIC_DEFAULT_LANGUAGUE];
		});

	const supportedLangs = flatSupportedLanguages(supportedLangResponse);

	browserLang.forEach((lang) => {
		if (supportedLangs.includes(lang)) throw redirect(302, '/' + lang.toLowerCase());
	});

	throw redirect(302, '/' + PUBLIC_DEFAULT_LANGUAGUE.toLowerCase());
}
