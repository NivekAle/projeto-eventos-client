/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme');
module.exports = {
	content: ["./src/**/*.{html,tsx,ts}"],
	theme: {
		extend: {
			colors: {
				'primary': {
					'50': '#fff9f6',
					'100': '#fff3ec',
					'200': '#ffe0d0',
					'300': '#ffcdb3',
					'400': '#ffa87b',
					'500': '#ff8242',
					'600': '#e6753b',
					'700': '#bf6232',
					'800': '#994e28',
					'900': '#7d4020'
				},
			},
			backgroundImage: {
				"bg-opacity": "linear-gradient(90deg, rgba(198,194,194,0.45) 0%, rgba(198,194,194,0.4542191876750701) 100%);"
			}
		},

	},
	plugins: [],
}