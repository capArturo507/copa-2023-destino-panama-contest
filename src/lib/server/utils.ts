import { NODE_ENV } from '$env/static/private';
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
