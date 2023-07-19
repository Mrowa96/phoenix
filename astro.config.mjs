import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import dotenv from 'dotenv';

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
  ],
  markdown: {
    gfm: true,
    smartypants: false,
    shikiConfig: {
      theme: 'vitesse-light',
    },
  },
});
