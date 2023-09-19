import { CONTEST_END_DATE, TIMEZONE } from '$env/static/private';
import { now } from '$lib/utils';
import { differenceInSeconds } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { __, pipe } from 'ramda';
import { curry, invoker } from 'ramda';

export const setCookie = invoker(3, 'set');

const toDateZoned = curry(toDate);

const toPTYTimeZone = toDateZoned(__, { timeZone: TIMEZONE });

const contestEndDateInPTY = toPTYTimeZone(CONTEST_END_DATE);

const nowInPTY = pipe(now, toPTYTimeZone);

const difInSeconds = curry(differenceInSeconds);

const differenceInSecondsToEnd = difInSeconds(contestEndDateInPTY, __, {});

export const getTimeToEndInSeconds = pipe(nowInPTY, differenceInSecondsToEnd);
