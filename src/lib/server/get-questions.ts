import {
	DIRECTUS_HOST,
	DIRECTUS_QUESTIONS,
	DIRECTUS_TOKEN,
	UPSTASH_TKN,
	UPSTASH_URL
} from '$env/static/private';
import { authentication, createDirectus, readItems, rest } from '@directus/sdk';
import { Redis } from '@upstash/redis';

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
	const cachedData = await redis.get(key).catch(logError(key));

	if (cachedData) {
		const ttl = await redis.ttl(key).catch(logError(key));
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
	getDataFromCacheOr3Party(DIRECTUS_QUESTIONS, setDirectusQuestionsQuery, 600);
