import dotenv from 'dotenv';
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

dotenv.config({
  path: './.env.local',
});

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  site: process.env.SITE,
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    gfm: true,
    smartypants: false,
    syntaxHighlight: 'prism',
  },
});
