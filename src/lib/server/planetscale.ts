import {
	PLATNETSCALE_HOST,
	PLATNETSCALE_PASSWORD,
	PLATNETSCALE_USERNAME
} from '$env/static/private';
import { connect } from '@planetscale/database';

const config = {
	host: PLATNETSCALE_HOST,
	username: PLATNETSCALE_USERNAME,
	password: PLATNETSCALE_PASSWORD
};

const planetscale = connect(config);

export const registerUser = (queryParams: DataBase.Participacion) =>
	planetscale.execute(
		'INSERT INTO participants (`id`, `full_name`, `instagram`, `email`, `phone`, `questions`, `started_datetime`) VALUES (:id, :full_name, :instagram, :email, :phone, :questions, :started_datetime);',
		queryParams
	);

export const requestStoredData = (queryParams: DataBase.Participante) =>
	planetscale.execute(
		'SELECT id, instagram, email, phone, questions, started_datetime, correct_answers, completed_time_ms FROM participants WHERE id=:id OR instagram=:instagram OR email=:email OR phone=:phone;',
		queryParams
	);

export const participate = (queryParams: any) =>
	planetscale.execute(
		'UPDATE participants SET answers=:answers, completed_datetime=:completed_datetime, correct_answers=:correct_answers, completed_time_ms=:completed_time_ms WHERE instagram=:instagram AND email=:email AND phone=:phone',
		queryParams
	);
