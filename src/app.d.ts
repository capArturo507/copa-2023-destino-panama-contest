// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			language: string;
			contestEndDate: Date;
			cache: CacheValue;
			questions: string[];
			participation: any;
			alerta: Alerta | undefined;
		}
		// interface PageData {}
		// interface Platform {}
		type TipoAlerta = 'info' | 'error' | 'advertencia' | 'exito';

		type Alerta = {
			tipo: TipoAlerta;
			mensaje: string;
		};

		type AppStatus = 'sin participar' | 'participó' | 'participando' | 'participando sin preguntas';

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
			key: string;
			value: string;
			seconds: number;
		};
	}

	namespace DataBase {
		type Participacion = {
			id: string;
			full_name: string;
			instagram: string;
			email: string;
			phone: string;
			questions: string;
			started_datetime: string;
		};

		type Participante = {
			id: string;
			instagram: string;
			email: string;
			phone: string;
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

		type QuestionTranslations = {
			prompt: string;
			languages_code: string;
		};

		type StatementTranslation = {
			statement: string;
			languages_code: string;
		};

		type Statement = {
			id: number;
			translations: StatementTranslation[];
		};

		type QuestionAnswer = {
			correct_answer: boolean;
			statement_id: Statement;
		};

		type Question = {
			id: number;
			category: number;
			translations: QuestionTranslations[];
			Answers: QuestionAnswer[];
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
