# Portfolio Website — [Chhatresh Khatri](https://www.chhatreshkhatri.com/)

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE.svg?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-SSR-F38020.svg?logo=cloudflareworkers&logoColor=white)](https://workers.cloudflare.com/)

This portfolio website, meticulously crafted using Astro 7, Tailwind CSS v4, and TypeScript, embodies a fusion of modern design, edge performance, and robust architecture.

Consistency is ensured across the site with a well-structured navigation menu, subtle micro-animations capped strictly at 300ms, and dynamic dark/light mode with synchronized cross-fading. The website's SEO optimization, edge caching, and analytics integration make it a potent tool for showcasing full-stack skills, cloud platforms, and enterprise experience.

## 🛠️ Built With

- **[Astro](https://astro.build/)** — High-performance web framework with Content Collections and SSR capabilities
- **[Tailwind CSS](https://tailwindcss.com/)** — Modern utility-first CSS framework (v4) with OKLCH gradient palettes
- **[TypeScript](https://www.typescriptlang.org/)** — Strict, type-safe development across components and API data contracts
- **[Cloudflare Workers](https://workers.cloudflare.com/)** — Edge deployment & SSR adapter with global cache headers
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** — Cloudflare developer CLI for local emulation and deployment

## ✨ Features

- 📖 **Multi-Page Layout** — Fast, structured navigation across Home, About, Projects, and Privacy Policy.
- 🎨 **Modern Design & Styling** — Custom Tailwind CSS v4 theme with glassmorphism cards and fluid typography.
- 🌓 **Synchronized Theme Toggle** — Seamless Dark/Light mode cross-fade with persistent user preference in `localStorage`.
- ⚡ **Fluid Micro-Animations** — Immediate `@starting-style` entry transitions strictly capped at 300ms with event-delegated spotlight cursor tracking.
- 🚀 **High-Performance Core Web Vitals** — Instant above-the-fold paint, server-rendered typewriter with delayed backspacing, and prioritized early resource preloading.
- 📱 **Fully Responsive** — Mobile-first, adaptive layouts optimized for mobile, tablet, and desktop viewports.
- ⚡ **Edge SSR & Caching** — Server-side rendered on Cloudflare Workers edge runtime with smart `Cache-Control` headers.
- 🎯 **Single Source of Truth** — Clean dynamic rendering directly sourced from Cloudflare Worker JSON endpoints with zero hardcoded fallbacks.
- 🔍 **Interactive Search Palette** — Quick fuzzy search modal with keyboard navigation (`Cmd/Ctrl + K`).
- 🏷️ **SEO & Social Ready** — Dynamic Open Graph and Twitter Card tags, Schema.org JSON-LD structured data, RSS feed, and automated XML sitemap generation.
- ♿ **Accessible & Semantic** — Built using semantic HTML5, descriptive ARIA attributes, and reduced-motion accessibility support.

## 🔌 API

This portfolio consumes a dedicated serverless Cloudflare Workers API for dynamic data:

- **Repository**: [portfolio-api](https://github.com/ChhatreshKhatri/portfolio-api)
- Base URL is configured via `PUBLIC_API_URL` (see Environment Variables below).
- Endpoints consumed by this site:
  - `/home` — Hero intro, typewriter roles, statistics, featured projects, enterprise highlight, and core capabilities
  - `/about` — Biography, work experience, decoupled honors & recognition, education credentials, and tech stack
  - `/projects` — Comprehensive project catalog, problem/solution highlights, technologies, and live/repo links

If running the API locally, start the worker server before launching Astro.

## 🔐 Environment Variables

Create a `.env` file at the project root (you can copy `.env.example`):

```bash
cp .env.example .env
```

Configure the following variables:

```env
PUBLIC_API_URL="https://your-api-url.com" # Base URL of the portfolio API (or http://127.0.0.1:8787 locally)
PUBLIC_visitsCounter="unique-counter-id"  # ID used by the footer visits counter badge
```

## 🚀 Getting Started

Ensure you have **Node.js** (`>=22.22.0`) and **git** installed on your machine.

### 🛠️ Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ChhatreshKhatri/astro-portfolio.git
   cd astro-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. **Run type checks & diagnostics:**
   ```bash
   npx astro check
   ```

5. **Create a production build:**
   ```bash
   npm run build
   ```

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

7. **Deploy to Cloudflare Workers:**
   ```bash
   npm run deploy
   ```

8. **Regenerate Cloudflare Worker type definitions:**
   ```bash
   npm run generate-types
   ```

## 📚 Documentation & Resources

- [Astro Documentation](https://docs.astro.build/en/getting-started/) — Learn about Astro features and routing.
- [Astro Cloudflare Adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) — Learn about Cloudflare deployment and bindings.
- [Wrangler Configuration](https://developers.cloudflare.com/workers/wrangler/configuration/) — Official Wrangler configuration documentation.

## 🖼️ Screenshots

<div align="center"> 
  <img src="https://cdn.chhatreshkhatri.com/portfolio/home-dark.jpeg" width="49%" alt="Home Dark Mode">
  <img src="https://cdn.chhatreshkhatri.com/portfolio/home-light.jpeg" width="49%" alt="Home Light Mode">
  <img src="https://cdn.chhatreshkhatri.com/portfolio/about-dark.jpeg" width="49%" alt="About Dark Mode">
  <img src="https://cdn.chhatreshkhatri.com/portfolio/about-light.jpeg" width="49%" alt="About Light Mode">
  <img src="https://cdn.chhatreshkhatri.com/portfolio/projects-dark.jpeg" width="49%" alt="Projects Dark Mode">
  <img src="https://cdn.chhatreshkhatri.com/portfolio/projects-light.jpeg" width="49%" alt="Projects Light Mode">
</div>

## 🧷 Share My Portfolio

<div align="center">

Share my portfolio ([https://www.chhatreshkhatri.com/](https://www.chhatreshkhatri.com/)) with your friends in just a click:

<a title="Mail" href="mailto:?subject=Chhatresh%20Khatri%20%7C%20Portfolio&body=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/931465f32268d3f9f1c971ada3615fb8b91f6507/assets/gmail.svg" width="32px" alt="Email share"/></a>
<a title="Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/facebook.svg" width="32px" alt="Facebook share"/></a>
<a title="X (Twitter)" href="https://x.com/intent/tweet?url=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/x.svg" width="32px" alt="X share"/></a>
<a title="WhatsApp" href="https://api.whatsapp.com/send?text=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/whatsapp.svg" width="32px" alt="WhatsApp share"/></a>
<a title="LinkedIn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/linkedin.svg" width="32px" alt="LinkedIn share"/></a>
<a title="Pinterest" href="https://pinterest.com/pin/create/button/?url=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/pinterest.svg" width="32px" alt="Pinterest share"/></a>
<a title="Reddit" href="https://www.reddit.com/submit?url=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/reddit.svg" width="32px" alt="Reddit share"/></a>
<a title="Pocket" href="https://getpocket.com/save?url=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/getpocket.svg" width="32px" alt="Pocket share"/></a>
<a title="Tumblr" href="https://www.tumblr.com/share?v=3&u=https://www.chhatreshkhatri.com/" target="_blank"><img src="https://raw.githubusercontent.com/Chhatreshkhatri/social-links/8ffb973736e05a032047f2c5f6a0945f51c639d2/assets/tumblr.svg" width="32px" alt="Tumblr share"/></a>

</div>
