/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(196,59,151)",
				whiteF: "rgba(255,255,255,0.8)",
			},
			screens: {
				"3xl": "1200px",
				"4xl": "1000px",
				base: "400px",
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				"gradient-cc":
					"radial-gradient(rgba(196,59,151,.4),rgba(255,255,255,0.8))",
			},
		},
	},
	plugins: [],
};
