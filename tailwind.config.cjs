/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 20s linear infinite',
				'spin-slow-reverse': 'spin 20s linear infinite reverse',
			},
			boxShadow: {
				"comic-light": "8px 8px 0 black",
				"comic-dark": "8px 8px 0 white"
			}
		},
	},
	plugins: [],
}
