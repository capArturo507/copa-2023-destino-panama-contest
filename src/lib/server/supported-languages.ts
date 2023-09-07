import {
	CMS_HOST,
	CMS_SUPPORTED_LANGS_FILTER,
	CMS_TOKEN,
	SITES_COLLECTION,
	SITE_ID
} from '$env/static/private';
import { createDirectus, rest, readItem, authentication } from '@directus/sdk';
import { flatSupportedLanguages } from './helpers';

export default async (defaultLanguage: string) => {
	const client = createDirectus(CMS_HOST).with(authentication()).with(rest());

	client.setToken(CMS_TOKEN);

	const supportedLangResponse = await client
		.request(
			readItem(SITES_COLLECTION, SITE_ID, {
				fields: [CMS_SUPPORTED_LANGS_FILTER]
			})
		)
		.catch((err) => {
			console.error('Error while retrieving languages', err);
			return [defaultLanguage];
		});

	return flatSupportedLanguages(supportedLangResponse);
};
