// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			browserLanguage: string[];
			supportedLanguages: string[];
			contestEndDate: Date;
		}
		// interface PageData {}
		// interface Platform {}

		type InputErrors = 'FORMAT' | 'LENGHT' | 'INVALID';

		type InputNames = 'NAME' | 'INSTAGRAM' | 'PHONE' | 'EMAIL' | 'TERMS';

		type InsertError =
			| `${InputErrors}_${InputNames}`
			| 'INVALID_INSERT'
			| 'INVALID_SELECT'
			| 'UNKNOWN';

		type AnswerStatus = 'correct' | 'incorrect';

		type ParticipationResult = {
			id: string;
			questions: string;
			correct_answer: number | null;
			completed_time_ms: number | null;
		};

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

		type CacheValue = {
			value: string;
			seconds: number;
		};
	}

	namespace DataBase {
		type Participation = {
			id: string;
			full_name: string;
			instagram: string;
			email: string;
			phone: string;
			questions: string;
			answers: string | null;
			started_datetime: string;
			completed_datetime: string | null;
			correct_answers: number | null;
			completed_time_ms: number | null;
		};

		type QueryParticipationKeys = keyof Participation | 'accepted_terms';

		type QueryParticipationParams = Record<QueryParticipationKeys, string>;

		type FieldKeys =
			| 'name'
			| 'type'
			| 'table'
			| 'orgTable'
			| 'database'
			| 'orgName'
			| 'columnLength'
			| 'charset'
			| 'flags';

		type Field = Record<FieldKeys, string>;

		type Result<T> = {
			headers: string[];
			fields: Field[];
			rows: T[];
			rowsAffected: number;
			insertId: string;
			size: number;
			statement: string;
			time: number;
		};

		type ParticipationQueryRow = Pick<
			Participation,
			'id' | 'questions' | 'correct_answers' | 'completed_time_ms'
		>;
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
