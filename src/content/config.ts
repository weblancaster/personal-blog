import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    readTime: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { blog };
