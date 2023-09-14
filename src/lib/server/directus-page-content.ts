import { CMS_HOST, CMS_TOKEN, CONTENT_COLLECTION, CONTENT_STATUS } from '$env/static/private';
import { createDirectus, rest, authentication, readItems } from '@directus/sdk';

const isSameLanguageTranslation = (currentLanguage: string) => (translation: any) =>
	translation.languages_code === currentLanguage;

const flatTranslations = (obj: any, currentLanguage: string) => {
	const newObj = obj;

	const translations = newObj.translations;

	if (!translations || !Array.isArray(translations) || translations.length === 0) return newObj;

	if (translations.length > 1) translations.filter(isSameLanguageTranslation(currentLanguage));

	delete newObj.translations;

	return { ...newObj, ...translations[0] };
};

const flatMainAndCTATranslations = (content: any, currentLanguage: string) => {
	const newObj = content;

	if (newObj.primary_cta) {
		newObj.primary_cta = flatTranslations(newObj.primary_cta, currentLanguage);
	}

	if (newObj.secondary_cta) {
		newObj.secondary_cta = flatTranslations(newObj.secondary_cta, currentLanguage);
	}

	return flatTranslations(newObj, currentLanguage);
};

const doesContentIncludesCTA = (content: any) =>
	!(content.primary_cta == null) || !(content.secondary_cta == null);

const transFormToUsableContent =
	(currentLanguage: string) => (final: Record<string, any>, current: any) => {
		let newObj;

		if (doesContentIncludesCTA(current))
			newObj = flatMainAndCTATranslations(current, currentLanguage);
		else newObj = flatTranslations(current, currentLanguage);

		if (!newObj) return final;

		if (current.id === 18) final.hero = newObj;
		else final.text.push(newObj);

		return final;
	};

const sortTextContents = (contentA: any, contentB: any) => {
	const aIncludes = [12, 9].includes(contentA.id);
	const bIncludes = [12, 9].includes(contentB.id);

	if ((aIncludes && bIncludes) || (!aIncludes && !bIncludes)) {
		if (contentA.id < contentB.id) return -1;
		if (contentA.id > contentB.id) return 1;
	}

	if ([12, 9].includes(contentA.id)) return 1;
	if ([12, 9].includes(contentB.id)) return -1;

	return 0;
};

const processPageResult = (
	pageRequestResult: Record<string, any> | null,
	currentLanguage: string
) => {
	if (!pageRequestResult) return null;
	const result = pageRequestResult.reduce(transFormToUsableContent(currentLanguage), { text: [] });
	result.text = result.text.sort(sortTextContents);
	return result;
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
		{ translations: ['languages_code', 'text', 'url', 'default'] }
	];

	const contentRequestResult = await client
		.request(
			readItems(CONTENT_COLLECTION, {
				fields: [
					'id',
					'name',
					{ translations: ['languages_code', 'title', 'description', 'media', 'embed_media'] },
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

	if (
		!contentRequestResult ||
		!Array.isArray(contentRequestResult) ||
		contentRequestResult.length < 1
	)
		return null;

	return processPageResult(contentRequestResult, language);
};
