import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://teatov.xyz',
  trailingSlash: 'never',
  build: {
    assets: '_assets',
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
  },
});
