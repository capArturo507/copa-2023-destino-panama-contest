/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	return {
		alerta: locals.alerta
	};
}
