import {
	DATABASE_HOST,
	DATABASE_INSERT,
	DATABASE_PASSWORD,
	DATABASE_UPDATE,
	DATABASE_USERNAME
} from '$env/static/private';
import { stringify } from '$lib/utils';
import { connect } from '@planetscale/database';

const config = {
	host: DATABASE_HOST,
	username: DATABASE_USERNAME,
	password: DATABASE_PASSWORD
};

export const askForParticipation = async ({ id, instagram, phone, email }: App.Participation) => {
	const connection = connect(config);
	const request = await connection.execute(DATABASE_INSERT, { id, instagram, phone, email });
	return request;
};

export const initParticipation = async (participation: App.Participation) => {
	const connection = connect(config);
	const request = await connection.execute(DATABASE_INSERT, participation);
	return request;
};

export const endParticipation = async ({
	answers,
	completedDateTime,
	correctAnswers,
	completedTimeMS
}: App.Participation) => {
	const stringifiedAnswers = stringify(answers);

	const stringifiedCompletedDate = '';

	if (!stringifiedAnswers || !stringifiedCompletedDate) return null;

	const connection = connect(config);

	const request = await connection.execute(DATABASE_UPDATE, {
		answers: stringifiedAnswers,
		completedDateTime: stringifiedCompletedDate,
		correctAnswers,
		completedTimeMS
	});
	return request;
};
