import { isValidTriviaPage } from '$lib/utils';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param: string) {
	return isValidTriviaPage(param);
}
