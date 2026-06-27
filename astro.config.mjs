import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.chhatreshkhatri.com",
  integrations: [mdx(), sitemap({ lastmod: new Date() })],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
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
    format: ["webp"],
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['astro/app'],
    },
  },
});
