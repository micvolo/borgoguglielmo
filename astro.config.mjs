// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://borgoguglielmo.pages.dev',
	integrations: [sitemap()],
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
