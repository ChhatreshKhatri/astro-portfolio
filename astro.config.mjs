import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.chhatreshkhatri.com",
  output: "server",
  integrations: [mdx(), sitemap({ lastmod: new Date() })],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "cloudflare",
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: [
        "node:fs/promises",
        "node:path",
        "node:url",
        "node:crypto",
      ],
    },
  },
});
