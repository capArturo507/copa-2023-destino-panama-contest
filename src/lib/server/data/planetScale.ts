import { PLANETSCALE_HOST, PLANETSCALE_PASS, PLANETSCALE_USER } from '$env/static/private';
import { connect } from '@planetscale/database';
import { __, invoker } from 'ramda';

const config = {
	host: PLANETSCALE_HOST,
	username: PLANETSCALE_USER,
	password: PLANETSCALE_PASS
};

const platneScaleConnection = connect(config);

export const excecutePlanetScaleQuery = invoker(2, 'execute')(__, __, platneScaleConnection);
