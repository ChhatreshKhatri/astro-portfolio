// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.chhatreshkhatri.com",
  trailingSlash: "never",
  integrations: [sitemap({ lastmod: new Date() })],
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  security: {
    checkOrigin: true,
  },
  image: {
    domains: ["cdn.chhatreshkhatri.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.chhatreshkhatri.com",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
