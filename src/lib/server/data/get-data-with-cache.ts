import {
	DIRECTUS_CONTENT,
	DIRECTUS_FOOTER,
	DIRECTUS_FOOTER_ID,
	DIRECTUS_FORM,
	DIRECTUS_FROM_ID,
	DIRECTUS_HEADER,
	DIRECTUS_HEADER_ID,
	DIRECTUS_HOME_CONTENT_IDS,
	DIRECTUS_HOST,
	DIRECTUS_QUESTIONS,
	DIRECTUS_RULES,
	DIRECTUS_RULES_ID,
	DIRECTUS_SITE,
	DIRECTUS_SITE_ID,
	DIRECTUS_STEPS,
	DIRECTUS_STEPS_IDS,
	DIRECTUS_TOKEN,
	UPSTASH_TKN,
	UPSTASH_URL
} from '$env/static/private';
import { authentication, createDirectus, readItem, readItems, rest } from '@directus/sdk';
import { Redis } from '@upstash/redis';
import { getTimeToEndInSeconds } from '../utils';
import { split } from 'ramda';

const redis = new Redis({
	url: UPSTASH_URL,
	token: UPSTASH_TKN
});

const directus = createDirectus(DIRECTUS_HOST).with(authentication()).with(rest());

directus.setToken(DIRECTUS_TOKEN);

const logError =
	(...values: any) =>
	(error: any) => {
		console.error(...values, error);
		return null;
	};

const getDataFromCacheOr3Party = async (
	key: string,
	operationFN: () => Promise<any>,
	defaultCahe: number
) => {
	const cachedData = await redis.get(key).catch(logError(key, defaultCahe));

	if (cachedData) {
		const ttl = await redis.ttl(key).catch(logError(key, defaultCahe));
		try {
			return { data: cachedData, ttl };
		} catch (e) {
			console.error(e, cachedData);
		}
	}

	const thirdPartyData = await operationFN().catch(
		logError('Cache miss going to third party', key, defaultCahe)
	);

	if (!thirdPartyData) return null;

	try {
		const dataString = JSON.stringify(thirdPartyData);

		const set = await redis
			.set(key, dataString, { ex: defaultCahe })
			.catch(logError('Error while saving to Upstash', key, defaultCahe));

		return { data: thirdPartyData, ttl: defaultCahe };
	} catch (e) {
		console.error(e, cachedData);

		return null;
	}
};

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

const siteFields = [
	{ supported_languages: ['lang_code'] },
	{ pages: [{ pages_id: [{ language_settings: ['title_tag', 'url_slug', 'lang_code'] }] }] }
];

const setDirectusSiteQuery = () =>
	directus.request(readItem(DIRECTUS_SITE, DIRECTUS_SITE_ID, { fields: siteFields }));

export const getSiteData = () =>
	getDataFromCacheOr3Party(DIRECTUS_SITE, setDirectusSiteQuery, getTimeToEndInSeconds());

const headerField = [
	{ logo: logoFields },
	{
		navigation: navigationFields
	}
];

const setDirectusHeaderQuery = () =>
	directus.request(readItem(DIRECTUS_HEADER, DIRECTUS_HEADER_ID, { fields: headerField }));

export const getHeaderData = () =>
	getDataFromCacheOr3Party(DIRECTUS_HEADER, setDirectusHeaderQuery, getTimeToEndInSeconds());

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

const setDirectusFooterQuery = () =>
	directus.request(readItem(DIRECTUS_FOOTER, DIRECTUS_FOOTER_ID, { fields: footerFields }));

export const getFooterData = () =>
	getDataFromCacheOr3Party(DIRECTUS_FOOTER, setDirectusFooterQuery, 600);

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
const setDirectusHomeQuery = () =>
	directus.request(
		readItems(DIRECTUS_CONTENT, { fields: homeContentFields, filter: homeContentFilter })
	);

export const getHomeData = () =>
	getDataFromCacheOr3Party(DIRECTUS_CONTENT, setDirectusHomeQuery, 600);

const questionsFields = [
	'id',
	'category',
	{ translations: ['prompt', 'languages_code'] },
	{
		answers: [
			'correct_answer',
			{ statement_id: ['id', { translations: ['statement', 'languages_code'] }] }
		]
	}
];

const setDirectusQuestionsQuery = () =>
	directus.request(readItems(DIRECTUS_QUESTIONS, { fields: questionsFields }));

export const getQuestionsData = () =>
	getDataFromCacheOr3Party(DIRECTUS_QUESTIONS, setDirectusQuestionsQuery, getTimeToEndInSeconds());

const rules = ['id', { translations: ['languages_code', 'title', 'description'] }];

const setDirectusRulesQuery = () =>
	directus.request(readItem(DIRECTUS_CONTENT, DIRECTUS_RULES_ID, { fields: rules }));

export const getRulesData = () =>
	getDataFromCacheOr3Party(DIRECTUS_RULES, setDirectusRulesQuery, 600);

const stepsHeadersFilter = {
	id: {
		_in: split(',', DIRECTUS_STEPS_IDS)
	}
};
const setDirectusstepsHeadersQuery = () =>
	directus.request(readItems(DIRECTUS_CONTENT, { fields: rules, filter: stepsHeadersFilter }));

export const getstepsHeadersData = () =>
	getDataFromCacheOr3Party(DIRECTUS_STEPS, setDirectusstepsHeadersQuery, 600);

const formFields = [
	'action',
	'method',
	{
		items: [
			'required',
			{
				'item:input': [
					'type',
					{ contries: ['phone_code', { flag: ['code'] }] },
					{ icon: ['code'] },
					{ translations: ['languages_code', 'label', 'text'] }
				]
			}
		]
	}
];

const setDirectusFormQuery = () =>
	directus.request(readItem(DIRECTUS_FORM, DIRECTUS_FROM_ID, { fields: formFields }));

export const getDirectusFormData = () =>
	getDataFromCacheOr3Party(DIRECTUS_FORM, setDirectusFormQuery, 600);
