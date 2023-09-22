import { isValidSignUpPage } from '$lib/utils';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param: string) {
	return isValidSignUpPage(param);
}
