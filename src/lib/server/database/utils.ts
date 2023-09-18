import Result from 'folktale/result';
import { bind, invoker } from 'ramda';

export const execute = invoker(2, 'execute');

export const createResultError: <T>(value: T) => typeof Result.Error = bind(Result.Error, Result);

export const createResutlOk: <T>(value: T) => typeof Result.Ok = bind(Result.Ok, Result);
