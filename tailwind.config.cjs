/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 20s linear infinite',
				'spin-slow-reverse': 'spin 20s linear infinite reverse',
			}
		},
	},
	plugins: [],
}
