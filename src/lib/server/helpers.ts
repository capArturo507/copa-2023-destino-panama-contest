import { PUBLIC_DEFAULT_LANGUAGUE } from '$env/static/public';
import { isCMSSupportedLangResponse } from './validations';

export const flatSupportedLanguages = (res: Record<string, any>) => {
	if (!isCMSSupportedLangResponse(res)) return [PUBLIC_DEFAULT_LANGUAGUE];

	return res.supported_languages.map((val) => val.lang_code);
};
