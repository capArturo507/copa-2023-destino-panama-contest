/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const data = {
			full_name: formData.get('full_name'),
			instagram: formData.get('instagram'),
			email: formData.get('email'),
			phone: formData.get('phone')
		};

		return {
			success: true
		};
	}
};
