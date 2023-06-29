import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
