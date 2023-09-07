// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			browserLanguage: string[];
			supportedLanguages: string[];
		}
		// interface PageData {}
		// interface Platform {}
	}

	type ObjectWithMessage = {
		message: string;
	};

	type BasicTypes = string | number | symbol | boolean | bigint;

	type CMSError = {
		message: string;
		extensions: { code: string };
	};

	type CMSErrorResponse = {
		errors: CMSError[];
	};

	type CMSLang = {
		lang_code: string;
	};

	type CMSSupportedLangResponse = {
		supported_languages: CMSLang[];
	};
}

export {};
