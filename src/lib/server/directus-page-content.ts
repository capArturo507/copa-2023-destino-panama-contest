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

	const pageRequestResult = await client
		.request(
			readItems(PAGES_COLLECTION, {
				fields: [
					'name',
					'dataLayer_load_data',
					{ language_settings: ['title_tag', 'meta_description'] },
					'redirect_url',
					{
						storefronts: [
							{
								sections: [
									{
										sections_id: [
											'horizontal_behaviour',
											'content_spacing',
											{ section_content: ['display', 'collection', 'item'] }
										]
									}
								]
							}
						]
					}
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
					language_settings: {
						_and: [
							{
								url_slug: {
									_eq: path
								}
							},
							{
								lang_code: {
									_eq: language
								}
							}
						]
					},
					storefronts: {
						storefronts_code: {
							_eq: storefront
						}
					}
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
