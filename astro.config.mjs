// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://jovanlopez32.github.io',
  base: '/ds-web-components-v6v7',

  vite: {
    plugins: [tailwindcss()]
  }
});