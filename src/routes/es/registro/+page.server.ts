import {
	COOKIE_PARTICIPATION,
	COOKIE_QUESTIONS,
	COOKIE_TOST,
	TOTAL_QUESTIONS
} from '$env/static/private';
import { getQuestionsData } from '$lib/server/get-questions';
import { registerUser, requestStoredData } from '$lib/server/planetscale.js';
import { generateRandomIndices } from '$lib/server/random-items.js';
import { nowInPanamaFormatted } from '$lib/server/timezone.js';
import { getCookieSettings } from '$lib/server/utils.js';
import { configurarAlerta } from '$lib/utils';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { __, join, map, nth, pipe, prop } from 'ramda';
import { z } from 'zod';

const registrationSchema = z.object({
	full_name: z.string().min(3).max(255).trim(),
	instagram: z.string().min(3).max(30).trim(),
	email: z.string().min(3).max(320).email(),
	phone: z
		.string()
		.regex(/\+[1-9][0-9]+$/)
		.min(4)
		.max(15)
		.trim(),
	accept_terms: z.enum(['on'])
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, locals }) => {
		let data = Object.fromEntries(await request.formData());

		//TODO Primero se valida que no tenga cookies y que la data esta bien

		try {
			registrationSchema.parse(data);
		} catch (error) {
			const alert = configurarAlerta(
				'error',
				'Los datos que ingresaste no son válidos. por favor intenta nuevamente'
			);
			console.warn('Formato invalid del reporte', error, data);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(400, data);
		}

		// Si todo esta bien buscamos las preguntas

		const questionsRequestResponse = await getQuestionsData().catch((e) => {
			console.error(e);
			return null;
		});

		const allQuestions = questionsRequestResponse?.data;

		if (!allQuestions) {
			const alert = configurarAlerta(
				'error',
				'Ocurrio un error inesperado, intenta nuevamente más tarde.'
			);
			console.error('Error al buscar las preguntas, validar Directus', data);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(500, data);
		}

		const randomIndices = generateRandomIndices(allQuestions.length, parseInt(TOTAL_QUESTIONS));

		const nthOfQuestions = (index: number) => nth(index, allQuestions);

		const getSelectedQuestionsIDs = pipe(nthOfQuestions, prop('id'));

		const questions = map(getSelectedQuestionsIDs, randomIndices);

		const started_datetime = nowInPanamaFormatted();

		const id = crypto.randomUUID();

		data = { id, ...data, questions: questions.join(','), started_datetime };

		const registerAttempt = await registerUser(data).catch((e) => {
			console.error(e);
			return null;
		});

		let result = {
			allQuestions,
			questions
		};

		if (registerAttempt) {
			locals.participation = {};
			locals.questions = [];
			cookies.set(COOKIE_PARTICIPATION, JSON.stringify(data), getCookieSettings(604800));
			cookies.set(COOKIE_QUESTIONS, join(',', questions), getCookieSettings(604800));
			throw redirect(303, '/es/trivia');
		}

		const getDBDAta = await requestStoredData(data).catch((e) => {
			console.error(e);
			return null;
		});

		// TODO regresar toda la data para que no tenga que llenar el formulario 2 veces
		if (!getDBDAta) {
			const alert = configurarAlerta(
				'error',
				'Ocurrio un error inesperado, intenta nuevamente más tarde.'
			);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(500, data);
		}

		const dbDataRows = getDBDAta.rows;

		if (dbDataRows.length > 1) {
			const alert = configurarAlerta(
				'error',
				'Los datos que ingresaste coinciden parcialmente con los que guardamos, solo podrás continuar si introduces los datos iniciales.'
			);
			console.warn('Resultados parciales', data, dbDataRows);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(400, {});
		}

		const resultAfterLookUp = getDBDAta.rows[0];

		if (!resultAfterLookUp) {
			const alert = configurarAlerta(
				'error',
				'Ocurrio un error inesperado, intenta nuevamente más tarde.'
			);
			console.warn('No data in rowr', getDBDAta, data);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(500, data);
		}

		if (resultAfterLookUp) {
			locals.participation = resultAfterLookUp;
			cookies.set(
				COOKIE_PARTICIPATION,
				JSON.stringify(resultAfterLookUp),
				getCookieSettings(604800)
			);
		}

		if (resultAfterLookUp.correct_answers) throw redirect(303, '/es/participacion-completa');

		locals.questions = resultAfterLookUp.questions.split(',');
		cookies.set(
			COOKIE_QUESTIONS,
			resultAfterLookUp.questions.split(','),
			getCookieSettings(604800)
		);
		throw redirect(303, '/es/trivia');
	}
} satisfies Actions;
