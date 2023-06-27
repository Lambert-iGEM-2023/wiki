import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  sitemap: true,
  site: 'https://2023.igem.wiki/',
  outDir: './public',
  publicDir: './static',
  
  server: {
    tailwindConfig: './tailwind.config.js',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'lambert-ga/_astro/[name].[hash][extname]',
        },
      },
    },
  },
});