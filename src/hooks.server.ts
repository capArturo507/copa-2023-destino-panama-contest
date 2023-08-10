import type { Handle } from '@sveltejs/kit';
import { PUBLIC_DEFAULT_LANGUAGUE, PUBLIC_LANGUAGE_HEADER } from '$env/static/public';

const extractPrimaryLang = (header: string) => header.split(';')[0].split(',')[0];

export const handle: Handle = async ({ event, resolve }) => {
	const acceptLanguageHeader = event.request.headers.get(PUBLIC_LANGUAGE_HEADER);

	event.locals.browserLanguage = acceptLanguageHeader
		? extractPrimaryLang(acceptLanguageHeader)
		: PUBLIC_DEFAULT_LANGUAGUE;

	const response = await resolve(event);

	return response;
};
