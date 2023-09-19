import {
	DIRECTUS_FOOTER,
	DIRECTUS_FOOTER_ID,
	DIRECTUS_HEADER,
	DIRECTUS_HEADER_ID,
	DIRECTUS_HOST,
	DIRECTUS_TOKEN
} from '$env/static/private';
import { authentication, createDirectus, readItem, rest } from '@directus/sdk';

const client = createDirectus(DIRECTUS_HOST).with(authentication()).with(rest());

client.setToken(DIRECTUS_TOKEN);

const navigationFields = [
	{
		navigation_id: [
			{ icon: ['code'] },
			{ translations: ['title', 'languages_code'] },
			{
				links: [
					{
						links_id: [{ icon: ['code'] }, { translations: ['url', 'text', 'languages_code'] }]
					}
				]
			}
		]
	}
];

const logoFields = ['code'];

const headerField = [
	{ logo: logoFields },
	{
		navigation: navigationFields
	}
];

export const getHeader = async () => {
	const contentRequest = await client.request(
		readItem(DIRECTUS_HEADER, DIRECTUS_HEADER_ID, { fields: headerField })
	);

	return contentRequest;
};

const footerFields = [
	{
		storefront: [
			{
				content: [
					'section',
					'collection',
					{
						'item:navigation': [
							{ icon: ['code'] },
							{ translations: ['title', 'languages_code'] },
							{
								links: [
									{
										links_id: [
											{ icon: ['code'] },
											{ translations: ['url', 'text', 'languages_code'] }
										]
									}
								]
							}
						]
					},
					{ 'item:logos': logoFields },
					{ 'item:statement': [{ translations: ['statement', 'languages_code'] }] }
				]
			}
		]
	}
];

export const getFooter = async () => {
	const contentRequest = await client.request(
		readItem(DIRECTUS_FOOTER, DIRECTUS_FOOTER_ID, { fields: footerFields })
	);

	return contentRequest;
};
