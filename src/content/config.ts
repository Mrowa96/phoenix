import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    company: z.string(),
    lead: z.string(),
    tags: z.array(z.string()),
    url: z.string().url().optional(),
    mainPhotoName: z.string(),
    mainPhotoAlt: z.string(),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    lead: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
  articles: articlesCollection,
};
