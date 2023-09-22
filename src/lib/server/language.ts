import { COOKIE_LANGUAGE } from '$env/static/private';
import { isValidLanguage } from '$lib/utils';
import type { RequestEvent } from '@sveltejs/kit';
import { always, find, ifElse, isNil, map, of, pipe, replace, split } from 'ramda';

const getDefaultLanguage: (value?: any) => App.SupportedLanguage = always('en');

const cleanLanguageFromHeader = (value: string) => replace(/(-.*$)|(;.*$)/g, '', value);

const processLanguageFromHeader = (value: string) =>
	pipe(split(','), map(cleanLanguageFromHeader))(value);

const parseLanguageHeader = (value: string | null) =>
	ifElse(isNil, processLanguageFromHeader, pipe(getDefaultLanguage, of(Array)))(value as string);

export const getLanguage = (event: RequestEvent): App.SupportedLanguage => {
	const { cookies, request, params } = event;

	const languageFromParams = params.language;

	if (languageFromParams && isValidLanguage(languageFromParams)) return languageFromParams;

	const languageFromCookie = cookies.get(COOKIE_LANGUAGE);

	if (languageFromCookie && isValidLanguage(languageFromCookie)) return languageFromCookie;

	const headerLanguage = pipe(
		parseLanguageHeader,
		find(isValidLanguage)
	)(request.headers.get('Accept-Language'));

	if (headerLanguage) return headerLanguage;

	return getDefaultLanguage();
};
