import {
	DIRECTUS_CONTENT,
	DIRECTUS_FOOTER,
	DIRECTUS_FOOTER_ID,
	DIRECTUS_HEADER,
	DIRECTUS_HEADER_ID,
	DIRECTUS_HOME_CONTENT_IDS,
	DIRECTUS_HOST,
	DIRECTUS_SITE,
	DIRECTUS_SITE_ID,
	DIRECTUS_TOKEN
} from '$env/static/private';
import { authentication, createDirectus, readItem, readItems, rest } from '@directus/sdk';
import { map, split } from 'ramda';

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

const siteFields = [
	{ supported_languages: ['lang_code'] },
	{ pages: [{ pages_id: [{ language_settings: ['title_tag', 'url_slug'] }] }] }
];

export const getSite = async () => {
	const contentRequest = await client.request(
		readItem(DIRECTUS_SITE, DIRECTUS_SITE_ID, { fields: siteFields })
	);

	return contentRequest;
};

const homeContentFields = [
	'id',
	{ translations: ['languages_code', 'title', 'description'] },
	{ primary_cta: [{ translations: ['languages_code', 'default', 'text', 'url'] }] },
	{ secondary_cta: [{ translations: ['languages_code', 'default', 'text', 'url'] }] }
];

const homeContentFilter = {
	id: {
		_in: split(',', DIRECTUS_HOME_CONTENT_IDS)
	}
};

export const getHomeContent = async () => {
	const contentRequest = await client.request(
		readItems(DIRECTUS_CONTENT, { fields: homeContentFields, filter: homeContentFilter })
	);

	return contentRequest;
};
