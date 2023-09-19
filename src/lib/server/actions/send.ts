import { DB_TIMEZONE } from '$env/static/private';
import { fromUTCToZonedTime, logMessage, nowToUTCString } from '$lib/utils';
import type { RequestEvent } from '@sveltejs/kit';
import { differenceInSeconds } from 'date-fns';
import { __, curry, pipe } from 'ramda';

const calculatMaxAgeInSeconds = (contestEndDatePanama: Date) => {
	const fromUTCToPanama = fromUTCToZonedTime(__, DB_TIMEZONE, {});
	const getnowToPanama = pipe(nowToUTCString, fromUTCToPanama);
	const curriedDifferenceInSeconds = curry(differenceInSeconds);
	const differenceInSecondsFromEndDate = curriedDifferenceInSeconds(contestEndDatePanama, __, {
		roundingMethod: 'floor'
	});
	const getMaxAgeInSeconds = pipe(getnowToPanama, differenceInSecondsFromEndDate);
	return getMaxAgeInSeconds();
};

/** @type {import('./$types').Actions} */
export const send = async (event: RequestEvent) => {
	logMessage(event);

	return {
		success: true
	};
};
