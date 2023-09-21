import { COOKIE_TOST } from '$env/static/private';
import { getQuestionsData } from '$lib/server/get-questions.js';
import { requestStoredData } from '$lib/server/planetscale.js';
import { getCookieSettings, validarEstadoDelApp } from '$lib/server/utils.js';
import { configurarAlerta } from '$lib/utils.js';
import { fail, redirect } from '@sveltejs/kit';
import { find, isEmpty, isNil, keys, map, path, propEq, split } from 'ramda';
import type { Actions } from './$types';
import { nowInPanamaFormatted } from '$lib/server/timezone';
import { z } from 'zod';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, setHeaders, cookies }) {
	const estado = validarEstadoDelApp(locals);

	if (estado === 'participó') {
		const alert = configurarAlerta('info', 'Ya estas participando.');
		locals.alerta = alert;
		cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
		throw redirect(303, '/es/participacion-completa');
	}

	if (estado === 'sin participar') {
		const alert = configurarAlerta(
			'advertencia',
			'Es necesario que introduzcas tu información nuevamente.'
		);
		locals.alerta = alert;
		cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
		throw redirect(303, '/es/registro');
	}

	let questions: string[] = [];

	if (estado === 'participando sin preguntas') {
		const buscarParticipacion = await requestStoredData(locals.participation).catch((error) => {
			console.error(
				'Occurrio un error al intentar buscar la participacion',
				error,
				locals.participation
			);
			const alert = configurarAlerta(
				'advertencia',
				'Ocurrió un erro al intentar buscar tu participación, intenta más tarde por favor.'
			);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, '/es/registro');
		});

		const resultado = buscarParticipacion.rows;

		if (isNil(resultado) || isEmpty(resultado)) {
			console.error('La participacion en BD tiene un error', buscarParticipacion, resultado);
			const alert = configurarAlerta(
				'error',
				'Ocurrió un error inesperado, regalanos un tiempo para validar e intenta mas tarde por favor.'
			);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, '/es/registro');
		}

		if (resultado.length > 1) {
			console.error('Resultados parciales', buscarParticipacion, resultado);
			const alert = configurarAlerta(
				'error',
				'Los datos que ingresaste coinciden parcialmente con los que guardamos, solo podrás continuar si introduces los datos iniciales.'
			);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, '/es/registro');
		}

		const primeraFila = resultado[0];

		if (isNil(primeraFila.questions) || isEmpty(primeraFila.questions)) {
			console.error('La participacion en BD tiene un error', buscarParticipacion, resultado);
			const alert = configurarAlerta(
				'error',
				'Ocurrió un error inesperado, regalanos un tiempo para validar e intenta mas tarde por favor.'
			);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, '/es/registro');
		}

		questions = split(',', primeraFila.questions);
	}

	questions = locals.questions;

	const allQuestions = await getQuestionsData().catch((e) => {
		console.error('Occurrio un error al intentar buscar la participacion', e, locals.participation);
		return null;
	});

	if (isNil(allQuestions)) {
		console.error('Por alguna razon no devolvio preguntas, revisa Directus');
		const alert = configurarAlerta(
			'error',
			'Ocurrió un error inesperado al intentar mostrar las preguntas, intenta introducir los mismos datos nuevamente por favor.'
		);
		locals.alerta = alert;
		cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
		throw redirect(303, '/es/registro');
	}

	setHeaders({
		'cache-control': `max-age=${allQuestions.ttl}`
	});

	return {
		language: locals.language,
		allQuestions: allQuestions.data,
		questions
	};
}

const triviaSchema = z.record(z.string().regex(/\d+/));

export const actions = {
	default: async ({ cookies, locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		const completedDateTime = nowInPanamaFormatted();

		try {
			triviaSchema.parse(data);
		} catch (error) {
			const alert = configurarAlerta(
				'error',
				'Ocurrió un error al intentar enviar tus preguntas, refresca el navegador en intenta nuevamente por favor.'
			);
			console.error('Formato invalid del reporte', error, data);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(400, data);
		}

		const getAllQuestionsRequest = await getQuestionsData().catch((error) => {
			console.error('Error al intentar buscar las preguntas', error, data);
			return null;
		});

		if (!getAllQuestionsRequest) {
			const alert = configurarAlerta(
				'error',
				'Ocurrió un error al intentar enviar tus preguntas, refresca el navegador en intenta nuevamente por favor.'
			);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(500, data);
		}

		const allQuestions = getAllQuestionsRequest.data as Directus.Question[];

		const answeredQuestionsId = keys(data);

		const findSelectedQuestion = (id: string) => find(propEq(parseInt(id), 'id'))(allQuestions);

		const selectedQuestions = map(findSelectedQuestion, answeredQuestionsId);

		const getAnswerID = path(['statement_id', 'id']);

		const mapToAnswers = (question: Directus.Question) => {
			const { id, Answers } = question;
			const answerId = data[id];
			const findAnswer = '';
			return {
				question: id,
				answer: answerId,
				status: ''
			};
		};
	}
} satisfies Actions;
