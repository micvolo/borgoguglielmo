import { defineCollection, z } from 'astro:content';

const settings = defineCollection({
	type: 'data',
	schema: z.object({
		siteName: z.string(),
		siteDescription: z.string().optional(),
		logo: z.object({
			show: z.boolean().default(true),
			image: z.string().optional(),
			alt: z.string().optional(),
		}).optional(),
		header: z.object({
			background: z.string().default('#ffffff'),
			textColor: z.string().default('#1a1a1a'),
			borderColor: z.string().default('#e5e5e5'),
		}).optional(),
	}),
});

const immobili = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		hotspot: z.string().optional(),
	}),
});

export const collections = { settings, immobili };
