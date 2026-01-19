// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://borgoguglielmo.pages.dev',
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
			config: {
				limitInputPixels: false,
			},
		},
		domains: [],
		remotePatterns: [],
		responsiveStyles: true,
		layout: 'full-width',
		objectFit: 'cover',
		objectPosition: 'center',
		breakpoints: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
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
