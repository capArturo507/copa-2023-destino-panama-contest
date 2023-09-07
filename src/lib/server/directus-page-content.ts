import { CMS_HOST, CMS_TOKEN, PAGES_COLLECTION } from '$env/static/private';
import { createDirectus, rest, authentication, readItems } from '@directus/sdk';

const processPageResult = (pageRequestResult: Record<string, any> | null) => {
	return pageRequestResult;
};

export default async (
	site: string,
	path: string | 'home',
	storefront: string,
	language: string
) => {
	const client = createDirectus(CMS_HOST).with(authentication()).with(rest());

	client.setToken(CMS_TOKEN);

	console.log('language', language);

	const pageRequestResult = await client
		.request(
			readItems(PAGES_COLLECTION, {
				fields: [
					'name',
					'dataLayer_load_data',
					{ language_settings: ['title_tag', 'meta_description', 'lang_code'] },
					'redirect_url',
					'language_settings.meta_description',
					'storefronts.sections.horizontal_behaviour',
					'storefronts.sections.section_content.*'
				],
				filter: {
					status: {
						_eq: 'published'
					},
					sites: {
						sites_id: {
							_eq: site
						}
					},
					_or: [
						{
							language_settings: {
								lang_code: {
									_eq: language
								}
							}
						},
						{
							language_settings: {
								lang_code: {
									_eq: language
								}
							}
						}
					]
				}
			})
		)
		.catch((error) => {
			console.error(
				`Error while retrieving page content with parameters site:${site}, path:${path}, storefront:${storefront} and language:${language}`,
				error
			);
			return null;
		});

	return processPageResult(pageRequestResult);
};
