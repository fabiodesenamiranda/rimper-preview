import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rimpermeabilizacao.com.br',
  output: 'static',
  integrations: [
    sitemap({
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
      },
      serialize(item) {
        const path = new URL(item.url).pathname;

        if (path === '/') {
          item.changefreq = 'monthly';
          item.priority = 1;
        } else if (path === '/blog/' || path === '/blog') {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (path.startsWith('/blog/')) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }

        return item;
      },
    }),
  ],
});
