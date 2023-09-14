import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from "@astrojs/partytown";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// import mdx from '@astrojs/mdx';
// import tailwind from '@astrojs/tailwind';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://ienokoto.jp',
  integrations: [sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  server:{
    host:true,
  },
  vite: {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "~/styles/variables.scss";`
        }
      }
    }
  },
  scopedStyleStrategy: "where",
  outDir: 'static',
});