import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://yumslog.com',
  integrations: [
    mdx(), 
    // TODO: @astrojs/sitemapでビルドエラーが発生するため一時的に無効化
    // sitemap(),
    tailwind()
  ],
});
