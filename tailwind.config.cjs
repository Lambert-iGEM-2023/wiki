/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
			extend: {
			fontFamily: {
				'sans': ['barlow semi-condensed', 'sans-serif'],
      			'serif': ['playfair display', 'serif'],
			}

		},
	},
	
	plugins: [
		require('@tailwindcss/typography'),
		require("windy-radix-palette"),
		require("tailwindcss-radix")(),
	],
}
