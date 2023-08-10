import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	jsxFramework: 'react',
	// Where to look for your css declarations
	include: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,jsx,ts,tsx}',
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			breakpoints: {
				// Mui default breakpoints
				// https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
				sm: '0',
				md: '600px',
				lg: '900px',
				xl: '1200px',
				'2xl': '1536px',
			},
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',
});
