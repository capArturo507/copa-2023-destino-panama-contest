import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const { url, cookies } = event;

	if (url.pathname === '/change-language') {
		const openStatus = cookies.get('openLanguageNav');
		cookies.set('openLanguageNav', openStatus === 'open' ? 'close' : 'open');
		throw redirect(
			303,
			url.origin.replace(`${url.protocol}://${url.host}${url.port ? ':' + url.port : ''}`, '/')
		);
	}

	const response = await resolve(event);
	return response;
}
