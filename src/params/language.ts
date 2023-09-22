import { isValidLanguage } from '$lib/utils';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param: string) {
	return isValidLanguage(param);
}
