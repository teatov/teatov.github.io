import { colors } from '@/utils/colors';
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      color: z.enum(['red', 'yellow', 'green', 'blue']),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
