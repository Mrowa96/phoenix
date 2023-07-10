import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
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
