/** @type {import('tailwindcss').Config} */

const rem = (pixel) => {
	return (pixel / 16).toString() + 'rem'
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': rem(640),
			'md': rem(768),
			'lg': rem(1024),
			'xl': rem(1280),
			'2xl': rem(1440)
		},
		extend: {
			fontFamily: {
				base: ['Inter', 'Noto Sans TC', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif']
			},
			fontSize: {
				// h0
				'h0': [`clamp(${rem(40)}, 5vw, ${rem(64)})`, 1.1],
				// h1
				'h1': [rem(36), 1.2],
				'h1-md': [rem(48), 1.2],
				'h1-lg': [rem(56), 1.2],
				// h2
				'h2': [rem(28), 1.2],
				'h2-md': [rem(32), 1.2],
				'h2-lg': [rem(40), 1.2],
				// h3
				'h3': [rem(24), 1.3],
				'h3-md': [rem(28), 1.3],
				'h3-lg': [rem(32), 1.3],
				// h4
				'h4': [rem(20), 1.3],
				'h4-md': [rem(22), 1.4],
				'h4-lg': [rem(24), 1.4],
				// h5
				'h5': [rem(18), 1.4],
				'h5-md': [rem(18), 1.5],
				'h5-lg': [rem(20), 1.5],
				// h6
				'h6': [rem(16), 1.5],
				'h6-md': [rem(16), 1.6],
				'h6-lg': [rem(18), 1.6],
			},
			colors: {
				'primary-green': '#8fb721',
				'white': '#fcfcfc',
				'black': '#111111'
			},
			maxWidth: {
				'7xl': rem(1200),
				'8xl': rem(1440)
			},
			blur: {
				'4xl': rem(72),
				'5xl': rem(88)
			},
		},
	},
	plugins: [],
}
