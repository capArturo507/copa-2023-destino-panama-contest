import { COOKIE_PARTICIPATION, COOKIE_QUESTIONS, COOKIE_TOST } from '$env/static/private';
import { getQuestionsData } from '$lib/server/get-questions.js';
import { participate, requestStoredData } from '$lib/server/planetscale.js';
import { errorMap, getCookieSettings, validarEstadoDelApp } from '$lib/server/utils.js';
import { configurarAlerta, pagesURLMap } from '$lib/utils.js';
import { fail, redirect } from '@sveltejs/kit';
import { count, find, isEmpty, isNil, join, keys, map, pathEq, propEq, split, values } from 'ramda';
import { nowInPanamaFormatted } from '$lib/server/timezone';
import { z } from 'zod';
import { differenceInMilliseconds, parseISO } from 'date-fns';
import type { RequestEvent } from './$types.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, setHeaders, cookies }) {
	const estado = validarEstadoDelApp(locals);

	const { language } = locals;

	if (estado === 'participó') {
		const alert = configurarAlerta('info', errorMap[language][418], 4);
		locals.alerta = alert;
		cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
		throw redirect(303, pagesURLMap[language]['confirmation']);
	}

	if (estado === 'sin participar') {
		const alert = configurarAlerta('advertencia', errorMap[language][409], 4);
		locals.alerta = alert;
		cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
		throw redirect(303, pagesURLMap[language]['signup']);
	}

	let questions: string[] = [];

	if (estado === 'participando sin preguntas') {
		const buscarParticipacion = await requestStoredData(locals.participation).catch((error) => {
			console.error(
				'Occurrio un error al intentar buscar la participacion',
				error,
				locals.participation
			);
			const alert = configurarAlerta('advertencia', errorMap[language][503], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		});

		const resultado = buscarParticipacion.rows;

		if (isNil(resultado) || isEmpty(resultado)) {
			console.error('La participacion en BD tiene un error', buscarParticipacion, resultado);
			const alert = configurarAlerta('error', errorMap[language][503], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		}

		if (resultado.length > 1) {
			console.error('Resultados parciales', buscarParticipacion, resultado);
			const alert = configurarAlerta('error', errorMap[language][403], 6);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		}

		const primeraFila = resultado[0];

		if (isNil(primeraFila.questions) || isEmpty(primeraFila.questions)) {
			console.error('La participacion en BD tiene un error', buscarParticipacion, resultado);
			const alert = configurarAlerta('error', errorMap[language][503], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		}

		questions = split(',', primeraFila.questions);

		locals.participation = primeraFila;
		locals.questions = primeraFila.questions;
		cookies.set(COOKIE_PARTICIPATION, JSON.stringify(primeraFila), getCookieSettings(604800));
		cookies.set(COOKIE_QUESTIONS, join(',', questions), getCookieSettings(604800));

		questions = split(',', primeraFila.questions);
	}

	questions = locals.questions;

	const allQuestions = await getQuestionsData().catch((e) => {
		console.error('Occurrio un error al intentar buscar la participacion', e, locals.participation);
		return null;
	});

	if (isNil(allQuestions)) {
		console.error('Por alguna razon no devolvio preguntas, revisa Directus');
		const alert = configurarAlerta('error', errorMap[language][503], 4);
		locals.alerta = alert;
		cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
		throw redirect(303, pagesURLMap[language]['signup']);
	}

	setHeaders({
		'cache-control': `max-age=${allQuestions.ttl}`
	});

	return {
		language: locals.language,
		allQuestions: allQuestions.data,
		started_datetime: locals.participation.started_datetime,
		questions
	};
}

const triviaSchema = z.record(z.string().regex(/\d+/));

export const actions = {
	default: async ({ cookies, locals, request }: RequestEvent) => {
		const { language } = locals;
		const data = Object.fromEntries(await request.formData());
		const completed_datetime = nowInPanamaFormatted();

		try {
			triviaSchema.parse(data);
		} catch (error) {
			const alert = configurarAlerta('error', errorMap[language][504], 4);
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
			const alert = configurarAlerta('error', errorMap[language][504], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(500, data);
		}

		const allQuestions = getAllQuestionsRequest.data as Directus.Question[];

		const answeredQuestionsId = keys(data);

		const findSelectedQuestion = (id: string) => find(propEq(parseInt(id), 'id'))(allQuestions);

		const selectedQuestions = map(findSelectedQuestion, answeredQuestionsId);

		const mapToAnswers = (question: Directus.Question) => {
			const { id, Answers } = question;
			const answerId = data[id];
			const findAnswer = find(pathEq(parseInt(answerId), ['statement_id', 'id']), Answers);
			return {
				question: id,
				answer: answerId,
				status: findAnswer?.correct_answer ? 'correct' : 'incorrect'
			};
		};

		const answers = map(mapToAnswers, selectedQuestions);

		const correct_answers = count(propEq('correct', 'status'), answers);

		// get participation data from server
		const buscarParticipacion = await requestStoredData(locals.participation).catch((error) => {
			console.error(
				'Occurrio un error al intentar buscar la participacion',
				error,
				locals.participation
			);
			const alert = configurarAlerta('advertencia', errorMap[language][503], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		});

		const resultado = buscarParticipacion.rows;

		if (isNil(resultado) || isEmpty(resultado)) {
			console.error('La participacion en BD tiene un error', buscarParticipacion, resultado);
			const alert = configurarAlerta('error', errorMap[language][503], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		}

		if (resultado.length > 1) {
			console.error('Resultados parciales', buscarParticipacion, resultado);
			const alert = configurarAlerta('error', errorMap[language][403], 6);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		}

		const primeraFila = resultado[0];

		const started_datetime = primeraFila.started_datetime;

		if (isNil(started_datetime) || isEmpty(started_datetime)) {
			console.error('La participacion en BD tiene un error', buscarParticipacion, resultado);
			const alert = configurarAlerta('error', errorMap[language][503], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			throw redirect(303, pagesURLMap[language]['signup']);
		}

		const completed_time_ms = differenceInMilliseconds(
			parseISO(completed_datetime),
			parseISO(started_datetime)
		);

		const params = {
			...primeraFila,
			completed_datetime,
			answers: join(',', map(values, answers)),
			correct_answers,
			completed_time_ms
		};

		const completeParticipation = await participate(params).catch((error) => {
			console.error('An error ocurred while attempting to save participation', error, params);
			return null;
		});

		if (!completeParticipation) {
			const alert = configurarAlerta('error', errorMap[language][504], 4);
			locals.alerta = alert;
			cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
			return fail(500, data);
		}

		locals.participation = params;
		cookies.set(COOKIE_PARTICIPATION, JSON.stringify(params), getCookieSettings(604800));

		throw redirect(303, pagesURLMap[language]['confirmation']);
	}
} satisfies Actions;
