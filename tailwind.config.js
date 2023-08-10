const cmpreset = require('cmds-tailwind-styles');

/** @type {import('tailwindcss').Config} */
export default {
	presets: [cmpreset],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
