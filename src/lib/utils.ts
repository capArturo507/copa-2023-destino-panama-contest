import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { __, always, bind, curry, filter, invoker, pipe, tryCatch } from 'ramda';
import Result from 'folktale/result';

export const now = () => new Date();

const toISOString: (date: Date) => string = invoker(0, 'toISOString');

export const nowToUTCString = pipe(now, toISOString);

export const fromUTCToZonedTime = curry(utcToZonedTime);

export const formatDate = curry(format);

export const logMessage = (message: string) => (value: any) => console.log(message, value);

export const logError = bind(console.error, console);

const bindStringify = bind(JSON.stringify, JSON);

export const returnNull = always(null);

const logErrorAndReturnEmptyString = pipe(logError, returnNull);

export const parseJSON = bind(JSON.parse, JSON);

export const stringify = tryCatch(bindStringify, logErrorAndReturnEmptyString);

export const generateUUID = bind(crypto.randomUUID, crypto);

/* Result utils */

export const createResultError: <T>(value: T) => typeof Result.Error = bind(Result.Error, Result);

export const createResutlOk: <T>(value: T) => typeof Result.Ok = bind(Result.Ok, Result);

export const orElse = invoker(1, 'orElse');

///
