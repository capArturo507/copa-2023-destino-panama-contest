import {
	COOKIE_PARTICIPATION,
	COOKIE_QUESTIONS,
	NODE_ENV,
	TOTAL_QUESTIONS
} from '$env/static/private';
import { getQuestionsData } from '$lib/server/get-questions';
import { registerUser, requestStoredData } from '$lib/server/planetscale.js';
import { generateRandomIndices } from '$lib/server/random-items.js';
import { nowInPanamaFormatted } from '$lib/server/timezone.js';
import { getCookieSettings } from '$lib/server/utils.js';
import { parseJSON } from '$lib/utils';
import { fail, redirect } from '@sveltejs/kit';
import { __, join, map, nth, pipe, prop, tryCatch } from 'ramda';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, locals }) => {
		const formData = await request.formData();

		//TODO Primero se valida que no tenga cookies y que la data esta bien

		let data = {
			full_name: formData.get('full_name'),
			instagram: formData.get('instagram'),
			email: formData.get('email'),
			phone: formData.get('phone')
		};

		// Si todo esta bien buscamos las preguntas

		const questionsRequestResponse = await getQuestionsData().catch((e) => {
			console.error(e);
			return null;
		});

		const allQuestions = questionsRequestResponse?.data;

		if (!allQuestions) return fail(500, { questions: 'error' });

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
		if (!getDBDAta) return fail(500, { unknown: true });

		console.log('dbDAta', getDBDAta.rows[0]);

		const resultAfterLookUp = getDBDAta.rows[0];

		if (!resultAfterLookUp) return fail(500, { tryAgain: true });

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
};
