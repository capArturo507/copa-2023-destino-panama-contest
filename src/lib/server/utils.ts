import { CONTEST_END_DATE, TIMEZONE } from '$env/static/private';
import { now } from '$lib/utils';
import { differenceInSeconds } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { __, find, includes, map, pipe, prop, replace, split, uniq } from 'ramda';
import { curry, invoker } from 'ramda';

export const setCookie = invoker(3, 'set');

const toDateZoned = curry(toDate);

const toPTYTimeZone = toDateZoned(__, { timeZone: TIMEZONE });

const contestEndDateInPTY = toPTYTimeZone(CONTEST_END_DATE);

const nowInPTY = pipe(now, toPTYTimeZone);

const difInSeconds = curry(differenceInSeconds);

const differenceInSecondsToEnd = difInSeconds(contestEndDateInPTY, __, {});

export const getTimeToEndInSeconds = pipe(nowInPTY, differenceInSecondsToEnd);

export const getSupportedlanguages = pipe(
	prop('data'),
	prop('supported_languages'),
	map(prop('lang_code'))
);

const splitWiithComma = split(',');

const replaceNonLanguage = replace(/(-.*$)|(;.*$)/g, '');

export const processHeaderLanguage = pipe(splitWiithComma, map(replaceNonLanguage), uniq);

export const findInArray = (firstArray: any[]) => find(includes(__, firstArray));
