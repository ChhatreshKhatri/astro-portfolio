import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.chhatreshkhatri.com/</loc>
    <image:image>
      <image:loc>https://cdn.chhatreshkhatri.com/images/ChhatreshKhatri.webp</image:loc>
    </image:image>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
