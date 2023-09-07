import type { Handle } from '@sveltejs/kit';
import { PUBLIC_DEFAULT_LANGUAGUE, PUBLIC_LANGUAGE_HEADER } from '$env/static/public';
import getSupportedLanguages from '$lib/server/supported-languages';

let supportedLanguages: string[];

const extractPrimaryLang = (header: string) =>
	header.split(',').map((val) => val.replace(/;.*$/, ''));

export const handle: Handle = async ({ event, resolve }) => {
	const acceptLanguageHeader = event.request.headers.get(PUBLIC_LANGUAGE_HEADER);

	event.locals.browserLanguage = acceptLanguageHeader
		? extractPrimaryLang(acceptLanguageHeader)
		: [PUBLIC_DEFAULT_LANGUAGUE];

	if (!supportedLanguages) {
		supportedLanguages = await getSupportedLanguages(PUBLIC_DEFAULT_LANGUAGUE);
	}

	event.locals.supportedLanguages = supportedLanguages;

	const response = await resolve(event);

	return response;
};
