import { ERROR_INVALID_REGISTER_CODE, INTERNAL_ERROR } from '$env/static/private';
import { createResultError, createResutlOk, log, orElse } from '$lib/utils';
import {
	__,
	always,
	assoc,
	equals,
	head,
	ifElse,
	invoker,
	length,
	objOf,
	pick,
	pipe,
	prop,
	tap
} from 'ramda';

type ParticaptionQueryResult = DataBase.Result<DataBase.ParticipationQueryRow>;

const getRowsProp: (obj: ParticaptionQueryResult) => DataBase.ParticipationQueryRow[] =
	prop('rows');

const getStatementProp: (obj: ParticaptionQueryResult) => string = prop('statement');

const equals1 = equals(1);

const isValidLenght = pipe(getRowsProp, length, equals1);

const init400Error = objOf('code', 400);

const chain = invoker(1, 'chain');

const setInvalidRequestError = pipe(
	getStatementProp,
	assoc('message', __, init400Error),
	assoc(INTERNAL_ERROR, ERROR_INVALID_REGISTER_CODE),
	createResultError
);

const extractFirstRow = pipe(getRowsProp, head, createResutlOk);

const ifMoreThanOneResultThenError = ifElse(isValidLenght, extractFirstRow, setInvalidRequestError);

export const processParticipationQuery = chain(ifMoreThanOneResultThenError);

const pickIdAndQuestions = pick(['id', 'questions']);

const addCorrectAnswers = assoc('correct_answers', null);

const addCompletedTime = assoc('completed_time_ms', null);

export const paramsToParticipation = pipe(pickIdAndQuestions, addCorrectAnswers, addCompletedTime);

const orElseKeepError = orElse(createResultError);

const processCorrectResult = (participation: DataBase.ParticipationQueryRow) =>
	pipe(always(participation), createResutlOk);

export const processParticipationInsert = (participation: DataBase.ParticipationQueryRow) => {
	const initProccessCorrect = processCorrectResult(participation);
	return pipe(orElseKeepError, chain(initProccessCorrect));
};
