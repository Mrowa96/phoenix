import dotenv from 'dotenv';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

dotenv.config({
  path: './.env.local',
});

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: process.env.SITE,
  integrations: [mdx(), sitemap()],
  scopedStyleStrategy: 'class',
  markdown: {
    gfm: true,
    smartypants: false,
    syntaxHighlight: 'prism',
  },
});
