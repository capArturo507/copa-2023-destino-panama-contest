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

		type AnswerStatus = 'correct' | 'incorrect';

		type Answer = {
			questionId: number;
			answerId: number;
			status: AnswerStatus;
		};

		type Participation = {
			id: string;
			fullName: string;
			instagram: string;
			email: string;
			phone: string;
			questions: number[];
			answers: null | Answer[];
			startedDateTime: Date;
			completedDateTime: null | Date;
			correctAnswers: null | number;
			completedTimeMS: null | number;
		};
	}

	namespace Directus {
		type Logo = {
			code: string;
		};

		type Icon = {
			code: string;
		};

		type LinkTranslations = {
			url: string;
			text: string;
		};

		type Link = {
			translations: Array<LinkTranslations>;
			icon: Icon;
		};

		type StatementTranslations = {
			statement: string;
		};

		type Statement = {
			translations: Array<StatementTranslations>;
		};

		type NavigationTranslations = {
			title: string;
		};

		type NavigationLinks = {
			links_id: Link;
			opens_in: string;
			relationship: string;
		};

		type Navigation = {
			translations: Array<NavigationTranslations>;
			links: Array<NavigationLinks>;
		};

		type FooterStorefrontContentItem = Logo | Statement | Navigation;

		type FooterStorefrontContent = {
			section: string;
			collection: string;
			item: FooterStorefrontContentItem;
		};

		type FooterStorefront = {
			content: any[];
		};

		type Footer = {
			storefront: Array<FooterStorefront>;
		};
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
