// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://borgoguglielmo.pages.dev',
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
	vite: {
		css: {
			transformer: 'lightningcss',
		},
		build: {
			cssMinify: 'lightningcss',
		},
	},
});
