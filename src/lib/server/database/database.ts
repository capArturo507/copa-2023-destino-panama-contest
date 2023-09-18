import {
	DATABASE_HOST,
	DATABASE_INSERT,
	DATABASE_PASSWORD,
	DATABASE_SELECT,
	DATABASE_UPDATE,
	DATABASE_USERNAME
} from '$env/static/private';
import { connect } from '@planetscale/database';
import { executeQuery } from './execute-query';
import { __, curry } from 'ramda';

const config = {
	host: DATABASE_HOST,
	username: DATABASE_USERNAME,
	password: DATABASE_PASSWORD
};

const connection = connect(config);

const curriedGetParticipation = curry(executeQuery);

export const getParticipationDetails = curriedGetParticipation(DATABASE_SELECT, __, connection);

export const insertParticipation = curriedGetParticipation(DATABASE_INSERT, __, connection);

export const endParticipation = curriedGetParticipation(DATABASE_UPDATE, __, connection);
