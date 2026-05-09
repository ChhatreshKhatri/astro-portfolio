// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.chhatreshkhatri.com",
  adapter: cloudflare({ imageService: "cloudflare" }),

  image: {
    domains: ["cdn.chhatreshkhatri.com", "visits.chhatreshkhatri.com"],
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

  integrations: [sitemap({ lastmod: new Date() }), mdx()],
});
