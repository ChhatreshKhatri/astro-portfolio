import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.chhatreshkhatri.com",
  integrations: [tailwind(), sitemap({ lastmod: new Date() })],
  output: "server",
  adapter: cloudflare()
});