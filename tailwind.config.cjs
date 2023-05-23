/** @type {import('tailwindcss').Config} */
module.exports = {
	// darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				slideIn: {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
			},
			animation: {
				'slideIn': "slideIn 3s ease-in-out",
				'spin-slow': 'spin 20s linear infinite',
				'spin-slow-reverse': 'spin 20s linear infinite reverse',
			},
			boxShadow: {
				"comic-light": "6px 6px 0 black",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
