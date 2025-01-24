/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{tsx, css, js, ts}"],
	theme: {
		screens: {
			xs: "475px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			...defaultTheme.screens,
		},
		fontFamily: {
			sans: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
			// serif: ["'Roboto Flex'", ...defaultTheme.fontFamily.sans],
		},
		colors: {
			"theme-light-color": "var(--light-color)",
			"theme-lightblue-color": "var(--lightblue-color)",
			"theme-body-color": "var(--body-color)",
			"theme-dark-color": "var(--dark-color)",
			"theme-error-color": "var(--error-color)",
			"theme-additional-color": "var(--additional-color)",
			"theme-light-gray-color": "var(--light-gray-color)",
			"theme-dark-gray-color": "var(--dark-gray-color)",
			"theme-pink-color": "var(--pink-color)",
			"theme-transparent-color": "var(--transparent-color)",
			"theme-translucent-color": "var(--translucent-color)",
		},
		extend: {
			backgroundImage: () => ({
				background: "var(--background)",
				leftArrowBg: "var(--left-arrow-bg)",
				rightArrowBg: "var(--right-arrow-bg)",
			}),

			boxShadow: {
				blurredBorder: "0 0 1.5px 1.5px var(--body-color)",
				darkBorder: "0 0 1.5px 1.5px var(--dark-color)",
				additionalColorkBorder: "0 0 1.5px 1.5px var(--additional-color)",
				disabledElement: "0 0 1.5px 1.5px var(--dark-gray-color)",
			},
		},
	},
	plugins: [],
};
