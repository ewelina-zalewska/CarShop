/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{tsx, css, js, ts}"],
	theme: {
		fontFamily: {
			sans: ["'Roboto Flex'", ...defaultTheme.fontFamily.sans],
			// serif: ["'Roboto Flex'", ...defaultTheme.fontFamily.sans],
			colors: {},
		},
		extend: {},
	},
	plugins: [],
};
