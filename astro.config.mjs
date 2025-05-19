import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.chhatreshkhatri.com",
  integrations: [sitemap({ lastmod: new Date() })],
  output: "server",
  adapter: cloudflare(),
});