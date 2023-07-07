import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
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
      theme: 'light-plus',
    },
  },
});
