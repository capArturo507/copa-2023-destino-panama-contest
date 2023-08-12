export const isCMSErrorResponse = (obj: unknown): obj is CMSErrorResponse => {
	if (!obj || typeof obj !== 'object') return false;
	return Object.keys(obj).includes('errors');
};

export const unknownIsBasicType = (obj: unknown): obj is BasicTypes => {
	if (!obj || ['function', 'object'].includes(typeof obj)) return false;
	return true;
};

export const unknownIsObject = (obj: unknown): obj is object => typeof obj === 'object';

export const unknownIsFunction = (obj: unknown): obj is Function => typeof obj === 'function';

export const objectContainsMessageProperty = (obj: any): obj is ObjectWithMessage =>
	!obj.message && typeof obj.message === 'string';

export const isCMSSupportedLangResponse = (
	res: Record<string, any>
): res is CMSSupportedLangResponse =>
	Object.keys(res).includes('supported_languages') &&
	Array.isArray(res.supported_languages) &&
	res.supported_languages.length > 0 &&
	typeof res.supported_languages[0] === 'object' &&
	Object.keys(res.supported_languages[0]).includes('lang_code') &&
	typeof res.supported_languages[0].lang_code === 'string';
