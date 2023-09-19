import { COOKIE_LANGUAGE, NODE_ENV } from '$env/static/private';
import type { Cookies, RequestEvent } from '@sveltejs/kit';
import { __, filter, head, includes, map, pipe, prop, replace, split, uniq } from 'ramda';
import { getTimeToEndInSeconds } from './utils';

const splitWiithComma = split(',');

const replaceNonLanguage = replace(/(-.*$)|(;.*$)/g, '');

const processHeaderLanguage = pipe(splitWiithComma, map(replaceNonLanguage), uniq);

const getSiteLanguages = pipe(prop('supported_languages'), map(prop('lang_code')));

const extractPrefferedSupporteLangs = pipe(filter, head);

const determineInitialLanguage = (headerLanguage: string | null, site: any) => {
	const siteLanguages = getSiteLanguages(site);

	if (!headerLanguage) return head(siteLanguages);

	const prefferedLanguage = processHeaderLanguage(headerLanguage);

	const isInSupportedLangs = includes(__, siteLanguages);

	return extractPrefferedSupporteLangs(isInSupportedLangs, prefferedLanguage);
};

const setLanguageCookie = (value: string, cookies: Cookies) =>
	cookies.set(COOKIE_LANGUAGE, value, {
		path: '/',
		sameSite: 'strict',
		secure: NODE_ENV === 'production',
		maxAge: getTimeToEndInSeconds()
	});

export const setLanguage = (event: RequestEvent, site: any) => {
	const { params, request, locals, cookies } = event;

	const paramLanguage = params?.lang;

	const browserLanguage = request.headers.get('Accept-Language');

	const localsLang = locals.language;

	if (paramLanguage === localsLang) return; //nada que cambiar

	if (!!paramLanguage) return setLanguageCookie(paramLanguage, cookies);

	setLanguage(determineInitialLanguage(browserLanguage, site), cookies);

	return 'done';
};
