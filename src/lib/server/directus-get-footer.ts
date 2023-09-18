import { CMS_HOST, CMS_TOKEN, FOOTER_COLLECTION } from '$env/static/private';
import { createDirectus, rest, authentication, readItem } from '@directus/sdk';

const isDirectusFooter = (object: any): object is Directus.Footer =>
	!!object?.storefront[0]?.content;

const createObjectFromSections = (
	result: Directus.Footer,
	currentContent: Directus.FooterStorefrontContent
) => {
	const objectCanva: Record<string, Directus.FooterStorefrontContentItem | string> = {};

	objectCanva[currentContent.section] = currentContent.item;
	objectCanva.collection = currentContent.collection;

	return { ...result, ...objectCanva };
};

const processFooter = (rawFooter: Directus.Footer) => {
	const content = rawFooter.storefront[0].content;
	const transformedContent = content.reduce(createObjectFromSections, {});
	return transformedContent;
};

export const getFooterContent = async (language: string) => {
	const client = createDirectus(CMS_HOST).with(authentication()).with(rest());

	client.setToken(CMS_TOKEN);

	const contentRequestResult = await client
		.request(
			readItem(FOOTER_COLLECTION, 1, {
				fields: [
					{
						storefront: [
							{
								content: [
									'section',
									'collection',
									{ 'item:navigation': [{ translations: ['title'] }, { links: ['*'] }] },
									{ 'item:logos': ['code'] },
									{ 'item:statement': [{ translations: ['statement'] }] }
								]
							}
						]
					}
				],
				filter: {
					storefront: {
						storefronts_code: {
							_eq: 'gs'
						},
						content: {
							'item:statement': {
								translations: {
									languages_code: {
										_eq: language
									}
								}
							}
						}
					}
				}
			})
		)
		.catch((error) => {
			console.error(
				`Error while retrieving footer with parameters id:${JSON.stringify(
					2
				)}, and language:${language}`,
				error
			);
			return null;
		});

	if (!isDirectusFooter(contentRequestResult)) return null;

	return processFooter(contentRequestResult);
};
