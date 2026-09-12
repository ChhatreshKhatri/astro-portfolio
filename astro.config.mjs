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
    platformProxy: {
      enabled: true,
    },
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
    format: ["webp"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
