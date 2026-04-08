import tailwind from '@astrojs/tailwind';
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sectionize from '@hbsnow/rehype-sectionize';

// https://astro.build/config
export default defineConfig({
  site: 'https://teatov.xyz',
  trailingSlash: 'never',
  build: {
    assets: '_assets',
  },
  image: {
    service: passthroughImageService(),
    
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: 'prism',
    smartypants: false,
    rehypePlugins: [
      //@ts-ignore
      sectionize,
    ],
  },
});
