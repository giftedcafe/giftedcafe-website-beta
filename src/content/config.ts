import { defineCollection, z } from 'astro:content';

const profileCollection = defineCollection({
  type: 'content',
  schema: z.object({
    langName: z.string(), // フッターに表示する言語名（例: "English", "日本語"）
    title: z.string(),
    name: z.string(),
    surname: z.string(),
    handle: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'profile': profileCollection,
};

