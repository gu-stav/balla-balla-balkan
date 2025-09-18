// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import redirects from './redirects.json'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()],

  redirects: redirects.reduce((acc, redirect) => {
    acc[redirect[0]] = redirect[1];
    return acc;
  }, {})
});
