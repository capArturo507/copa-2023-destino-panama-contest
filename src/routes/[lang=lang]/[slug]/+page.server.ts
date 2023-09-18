import { register } from '$lib/server/actions/register';
import { send } from '$lib/server/actions/send.js';
import { generateUUID } from '$lib/utils.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies, locals }) {
	return { id: generateUUID() };
}

/** @type {import('./$types').Actions} */
export const actions = {
	register: register,
	registro: register,
	send: send,
	enviar: send
};
