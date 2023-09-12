import { CMS_HOST, CMS_TOKEN, CONTENT_COLLECTION, CONTENT_STATUS } from '$env/static/private';
import { createDirectus, rest, authentication, readItems } from '@directus/sdk';

const processPageResult = (pageRequestResult: Record<string, any> | null) => {
	return pageRequestResult;
};

export default async (ids: string[], language: string) => {
	const client = createDirectus(CMS_HOST).with(authentication()).with(rest());

	client.setToken(CMS_TOKEN);

	const ctaObject = [
		'left_icon',
		'right_icon',
		'event_action',
		'dataLayer_push',
		'general_attributes',
		'accesibility_localized_attributes',
		{ translations: ['text', 'url', 'default'] }
	];

	const contentRequestResult = await client
		.request(
			readItems(CONTENT_COLLECTION, {
				fields: [
					'name',
					{ translations: ['title', 'description', 'media', 'embed_media'] },
					{ primary_cta: ctaObject },
					{ secondary_cta: ctaObject }
				],
				filter: {
					id: {
						_in: ids
					},
					status: {
						_eq: CONTENT_STATUS
					},
					translations: {
						languages_code: {
							_eq: language
						}
					}
				}
			})
		)
		.catch((error) => {
			console.error(
				`Error while retrieving content with parameters id:${JSON.stringify(
					ids
				)}, and language:${language}`,
				error
			);
			return null;
		});

	return processPageResult(contentRequestResult);
};
