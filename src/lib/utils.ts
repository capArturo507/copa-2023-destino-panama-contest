import { includes } from 'ramda';

export const isValidLanguage = (
	suposedLanguage: string
): suposedLanguage is App.SupportedLanguage => includes(suposedLanguage, ['en', 'es', 'pt']);

export const isValidSignUpPage = (
	suposedSignUp: string
): suposedSignUp is App.SupportedSignUpPageURL =>
	includes(suposedSignUp, ['sign-up', 'registro', 'inscrever-se']);

export const isValidTriviaPage = (
	suposedSignUp: string
): suposedSignUp is App.SupportedTriviaPageURL =>
	includes(suposedSignUp, ['trivia', 'curiosidades']);

export const isValidRulesPage = (
	suposedSignUp: string
): suposedSignUp is App.SupportedRulesPageURL =>
	includes(suposedSignUp, ['rules', 'reglas', 'regras']);

export const isValidConfirmationPage = (
	suposedSignUp: string
): suposedSignUp is App.SupportedConfirmationPageURL =>
	includes(suposedSignUp, [
		'participation-complete',
		'participacion-completa',
		'participacao-completa'
	]);

export const parseJSON = (value: string) => JSON.parse(value);

export const configurarAlerta = (
	tipo: App.TipoAlerta,
	mensaje: string,
	seconds: number
): App.Alerta => {
	return {
		tipo,
		mensaje,
		seconds
	};
};

export const daysInSeconds = (value: number) => value * 24 * 60 * 60;

export const getPageFromParams = ({
	language,
	confirmation,
	signup,
	trivia
}: NonNullable<any>): App.SupportedPages => {
	if (language) return 'home';
	if (signup) return 'signup';
	if (trivia) return 'trivia';
	if (confirmation) return 'confirmation';
	return 'rules';
};

export const pagesURLMap: Record<App.SupportedLanguage, Record<App.SupportedPages, string>> = {
	es: {
		home: '/es',
		signup: '/es/registro',
		trivia: '/es/trivia',
		confirmation: '/es/participacion-completa',
		rules: '/es/reglas'
	},
	en: {
		home: '/en',
		signup: '/en/sign-up',
		trivia: '/en/trivia',
		confirmation: '/en/participation-complete',
		rules: '/en/rules'
	},
	pt: {
		home: '/pt',
		signup: '/pt/inscrever-se',
		trivia: '/pt/curiosidades',
		confirmation: '/pt/participacao-completa',
		rules: '/pt/regras'
	}
};

export const formatMilliseconds = (milliseconds: number, dateLocale: App.DateLocaleData) => {
	if (milliseconds < 0) {
		return 'Invalid input: milliseconds should be a non-negative number.';
	}

	const seconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	const remainingHours = hours % 24;
	const remainingMinutes = minutes % 60;
	const remainingSeconds = seconds % 60;
	const remainingMilliseconds = milliseconds % 1000;

	const result = [];
	if (days > 0) result.push(`${days} ${dateLocale.days}${days > 1 ? 's' : ''}`);
	if (remainingHours > 0)
		result.push(`${remainingHours} ${dateLocale.hour}${remainingHours > 1 ? 's' : ''}`);
	if (remainingMinutes > 0)
		result.push(`${remainingMinutes} ${dateLocale.minutes}${remainingMinutes > 1 ? 's' : ''}`);
	if (remainingSeconds > 0)
		result.push(`${remainingSeconds} ${dateLocale.seconds}${remainingSeconds > 1 ? 's' : ''}`);
	if (remainingMilliseconds > 0)
		result.push(
			`${remainingMilliseconds} ${dateLocale.milliseconds}${remainingMilliseconds > 1 ? 's' : ''}`
		);

	return result.join(', ');
};
