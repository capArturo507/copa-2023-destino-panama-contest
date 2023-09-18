import type { Connection } from '@planetscale/database';
import { andThen, assoc, has, ifElse, otherwise, path, pipe } from 'ramda';
import { createResultError, createResutlOk, execute } from './utils';

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
