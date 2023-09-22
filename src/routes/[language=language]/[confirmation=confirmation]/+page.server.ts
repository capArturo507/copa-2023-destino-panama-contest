import { COOKIE_TOST } from '$env/static/private';
import { requestStoredData } from '$lib/server/planetscale.js';
import { errorMap, getCookieSettings } from '$lib/server/utils.js';
import { configurarAlerta, pagesURLMap } from '$lib/utils.js';
import { redirect } from '@sveltejs/kit';
import { isEmpty, isNil } from 'ramda';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
	const { language } = locals;
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

	const { correct_answers, completed_time_ms } = primeraFila;

	if (
		isNil(correct_answers) ||
		isNil(completed_time_ms) ||
		isEmpty(correct_answers) ||
		isEmpty(completed_time_ms)
	) {
		console.error('La participacion en BD tiene un error', buscarParticipacion, resultado);
		const alert = configurarAlerta('error', errorMap[language][503], 4);
		locals.alerta = alert;
		cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
		throw redirect(303, pagesURLMap[language]['signup']);
	}

	return {
		participacion: primeraFila
	};
}
