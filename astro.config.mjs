import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standaone',
  }),
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
