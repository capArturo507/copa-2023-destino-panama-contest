import { NODE_ENV } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const { cookies } = event;

		console.log('are you triggering?');

		cookies.set('openLanguageNav', 'open');

		return {
			success: true
		};
	}
};
