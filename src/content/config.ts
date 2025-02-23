import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      status: z.string(),
      url: z.string(),
      path: z.string(),
      description: z.string(),
      image: z.string(),
      date: z.string(),
      tech: z.array(z.string()),
    }),
  }),
};
