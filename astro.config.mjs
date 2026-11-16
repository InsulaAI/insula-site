// @ts-check
import { defineConfig } from 'astro/config';

// URLs com barra no fim, iguais às do WordPress (/portfolio/clear-men/),
// para a troca de DNS não quebrar link nenhum.
export default defineConfig({
  site: 'https://insula-ai.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
