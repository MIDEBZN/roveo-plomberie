import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://roveo-plomberie.vercel.app',
  output: 'static',
  build: {
    format: 'directory'
  }
});
