import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next();

  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://cdn.chhatreshkhatri.com https://visits.chhatreshkhatri.com data: blob:; font-src 'self' data:; connect-src 'self' https://cdn.chhatreshkhatri.com https://cloudflareinsights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
  );
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  response.headers.set("Cache-Control", "public, max-age=3600, must-revalidate");

  return response;
});
