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
	}),
});

const immobili = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		status: z.enum(['empty', 'in_construction', 'built']).default('empty'),
		hotspot: z.string().optional(),
	}),
});

export const collections = { settings, immobili };
