import { createResultError, createResutlOk } from '$lib/utils';
import type { Connection } from '@planetscale/database';
import { andThen, assoc, has, ifElse, invoker, otherwise, path, pipe } from 'ramda';

const execute = invoker(2, 'execute');

const getMessageProp = path(['body', 'message']);

const getMessageAndReturnResultError = pipe(getMessageProp, createResultError);

const setResult = ifElse(has('error'), getMessageAndReturnResultError, createResutlOk);

const setResultfterPromise = andThen(setResult);

const addErrorIndicator = assoc('error', true);

const catchError = otherwise(addErrorIndicator);

export const executeQuery = async (
	query: string,
	params: DataBase.QueryParticipationParams,
	connection: Connection
) => {
	const executeQueryWithParams = execute(query, params);

	const makeQueryRequest = pipe(executeQueryWithParams, catchError, setResultfterPromise);

	return await makeQueryRequest(connection);
};
