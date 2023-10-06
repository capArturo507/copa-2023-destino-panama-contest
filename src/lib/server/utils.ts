import { CONTEST_END_DATE, NODE_ENV } from '$env/static/private';
import { isAfter } from 'date-fns';
import { isEmpty, isNil, isNotNil } from 'ramda';

export const getCookieSettings = (seconds?: number): import('cookie').CookieSerializeOptions => {
	return {
		sameSite: 'strict',
		path: '/',
		secure: NODE_ENV === 'production',
		maxAge: seconds
	};
};

export const validarEstadoDelApp = (locals: App.Locals): App.AppStatus => {
	if (!locals.participation) return 'sin participar';
	if (isNotNil(locals.participation.correct_answers)) return 'participó';
	if (isNil(locals.questions)) return 'participando sin preguntas';
	if (isEmpty(locals.questions)) return 'participando sin preguntas';
	return 'participando';
};

export const errorMap: Record<App.SupportedLanguage, Record<App.SupportedErrorCodes, string>> = {
	es: {
		400: 'Los datos que ingresaste no son válidos. por favor intenta nuevamente.',
		403: 'Los datos que ingresaste coinciden parcialmente con los que guardamos, solo podrás continuar si introduces los datos iniciales.',
		409: 'Es necesario que introduzcas tu información nuevamente.',
		418: 'Ya estas participando.',
		500: 'Ocurrio un error inesperado, intenta nuevamente más tarde.',
		503: 'Ocurrió un error al intentar buscar tu participación, intenta más tarde por favor.',
		504: 'Ocurrió un error al intentar enviar tus respuestas, refresca el navegador en intenta nuevamente por favor.'
	},
	en: {
		400: 'The data you entered is not valid. please try again.',
		403: 'The data you entered partially matches what we save, you will only be able to continue if you enter the initial data.',
		409: 'You need to enter your information again.',
		418: 'You are already participating.',
		500: 'An unexpected error occurred, please try again later.',
		503: 'An error occurred while trying to search for your entry, please try again later.',
		504: 'An error occurred while trying to submit your answers, please refresh your browser and try again.'
	},
	pt: {
		400: 'Os dados inseridos não são válidos. Por favor, tente novamente.',
		403: 'Os dados que você inseriu correspondem parcialmente ao que salvamos, você só poderá continuar se inserir os dados iniciais.',
		409: 'Você precisa inserir suas informações novamente.',
		418: 'Você já está participando.',
		500: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
		503: 'Ocorreu um erro ao tentar pesquisar sua entrada. Tente novamente mais tarde.',
		504: 'Ocorreu um erro ao tentar enviar suas respostas. Atualize seu navegador e tente novamente.'
	}
}

export const isContestOver = () => isAfter(new Date(), new Date(CONTEST_END_DATE))