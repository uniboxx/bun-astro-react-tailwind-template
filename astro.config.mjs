// @ts-check
import { defineConfig } from 'astro/config';

import pkg from './package.json';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://uniboxx.github.io',
  base: `/${pkg.name}`,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
