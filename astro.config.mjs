import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// DOMÍNIO DO SITE: troque só aqui. Canonical, sitemap, robots.txt e dados
// estruturados usam este endereço automaticamente.
const DOMINIO = 'https://desentupidoradutrasp.com.br';

export default defineConfig({
  site: DOMINIO,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
