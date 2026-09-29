import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark'; // 👈 Importamos unified

export default defineConfig({
  markdown: {
    processor: unified(), // 👈 Obligamos a Astro a usar JavaScript puro
  },
});
