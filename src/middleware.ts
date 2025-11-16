import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // Get response first
  const response = await next();

  // Set Content Security Policy
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' https://cdn.chhatreshkhatri.com https://visits.chhatreshkhatri.com data: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://cdn.chhatreshkhatri.com https://cloudflareinsights.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ];

  // Set security headers
  response.headers.set("Content-Security-Policy", cspDirectives.join("; "));
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");

  // Set cache headers based on content type
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  if (pathname.match(/\.(woff2?|ttf|eot|otf)$/)) {
    // Fonts - cache for 1 year
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname.match(/\.(js|css)$/)) {
    // JS/CSS - cache for 1 year (versioned by Astro)
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/)) {
    // Images - cache for 1 year
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname === "/" || pathname.endsWith(".html")) {
    // HTML - cache for 1 hour with revalidation
    response.headers.set("Cache-Control", "public, max-age=3600, must-revalidate");
  }

  return response;
});
