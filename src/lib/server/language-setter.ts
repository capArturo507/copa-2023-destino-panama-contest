import { __, filter, head, includes, map, pipe, prop, replace, split, uniq } from 'ramda';

const splitWiithComma = split(',');

const replaceNonLanguage = replace(/(-.*$)|(;.*$)/g, '');

const processHeaderLanguage = pipe(splitWiithComma, map(replaceNonLanguage), uniq);

const getSiteLanguages = pipe(prop('supported_languages'), map(prop('lang_code')));

const extractPrefferedSupporteLangs = pipe(filter, head);

export const determineInitialLanguage = (headerLanguage: string | null, site: any) => {
	const siteLanguages = getSiteLanguages(site);

	if (!headerLanguage) return head(siteLanguages);

	const prefferedLanguage = processHeaderLanguage(headerLanguage);

	const isInSupportedLangs = includes(__, siteLanguages);

	return extractPrefferedSupporteLangs(isInSupportedLangs, prefferedLanguage);
};
