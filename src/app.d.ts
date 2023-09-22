// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			language: SupportedLanguage;
			page: SupportedPages;
			questions: string[];
			participation: any;
			alerta: Alerta | undefined;
		}

		// interface PageData {}
		// interface Platform {}

		type SupportedLanguage = 'en' | 'es' | 'pt';

		type SupportedPages = 'home' | 'signup' | 'trivia' | 'confirmation' | 'rules';

		type SupportedSignUpPageURL = 'sign-up' | 'registro' | 'inscrever-se';

		type SupportedTriviaPageURL = 'trivia' | 'curiosidades';

		type SupportedRulesPageURL = 'rules' | 'reglas' | 'regras';

		type SupportedErrorCodes = 400 | 403 | 409 | 418 | 500 | 503 | 504;

		type SupportedConfirmationPageURL =
			| 'participation-complete'
			| 'participacion-completa'
			| 'participacao-completa';

		type FooterData = {
			copyright: string;
			privacyUrl: string;
			privacy: string;
			rules: string;
			rulesUrl: string;
		};

		type HowToParticipateData = {
			title: string;
			step1: string;
			step2: string;
			step3: string;
		};

		type PrizesData = {
			title: string;
			prize1: string;
			prize2: string;
			cta1Title: string;
			cta1URL: string;
			cta2Title: string;
			cta2URL: string;
		};

		type WhatToDoInPanama = {
			title: string;
			description: string;
		};

		type StepData = {
			step: string;
			title: string;
			description: string;
		};

		type ConfirmationData = {
			step: string;
			opening: string;
			middle: string;
			closing: string;
			shareCTA: string;
			shareTitle: string;
			shareText: string;
		};

		type DateLocaleData = {
			days: string;
			hour: string;
			minutes: string;
			seconds: string;
			milliseconds: string;
		};

		type FooterDataByLanguage = Record<SupportedLanguage, FooterData>;

		type HowToParticipateDataByLanguage = Record<SupportedLanguage, HowToParticipateData>;

		type PrizesDataByLanguage = Record<SupportedLanguage, PrizesData>;

		type WhatToDoInPanamaDataByLanguage = Record<SupportedLanguage, WhatToDoInPanama>;

		type StepDataByLanguage = Record<SupportedLanguage, StepData>;

		type ConfirmationDataByLanguage = Record<SupportedLanguage, ConfirmationData>;

		type DateLocaleDataByLanguage = Record<SupportedLanguage, DateLocaleData>;

		type TipoAlerta = 'info' | 'error' | 'advertencia' | 'exito';

		type Alerta = {
			tipo: TipoAlerta;
			mensaje: string;
			seconds: number;
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
			completed_datetime: string;
			answers: string;
			correct_answers: string;
			completed_time_ms: string;
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
