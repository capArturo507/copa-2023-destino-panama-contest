import { utcToZonedTime } from 'date-fns-tz';
import { __, always, bind, curry, invoker, pipe, tryCatch } from 'ramda';

const now = () => new Date();

const toISOString: (date: Date) => string = invoker(0, 'toISOString');

const nowToUTCString = pipe(now, toISOString);

export const fromUTCToZonedTime = curry(utcToZonedTime);

const fromUTCToPanamaTime = fromUTCToZonedTime(__, 'America/Panama', {});

const nowToToTimeZone = pipe(nowToUTCString, fromUTCToPanamaTime);

const nowToPanama = nowToToTimeZone();

export const log = bind(console.log, console);

export const logError = bind(console.error, console);

const bindStringify = bind(JSON.stringify, JSON);

export const returnNull = always(null);

const logErrorAndReturnEmptyString = pipe(logError, returnNull);

export const stringify = tryCatch(bindStringify, logErrorAndReturnEmptyString);
