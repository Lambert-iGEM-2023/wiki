import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  sitemap: true,
  site: 'https://2023.igem.wiki/lambert-ga',
  outDir: './public',
  publicDir: './static',
  server: {
    tailwindConfig: './tailwind.config.js'
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});