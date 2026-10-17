# Portfolio Website — [Chhatresh Khatri](https://www.chhatreshkhatri.com/)

This portfolio website, meticulously crafted using Astro, Tailwind CSS, and TypeScript, embodies a fusion of modern design and robust functionality.

Consistency is ensured across the site with a well-structured navigation menu, subtle micro-animations, and dynamic dark/light mode. The website's SEO optimization, performance enhancements, and analytics integration make it a potent tool for showcasing skills, projects, and achievements.

## 🛠️ Built With

- **[Astro](https://astro.build/)** — High-performance web framework for content-driven websites
- **[Tailwind CSS](https://tailwindcss.com/)** — Modern utility-first CSS framework (v4)
- **[TypeScript](https://www.typescriptlang.org/)** — Strict, type-safe development
- **[Cloudflare Workers](https://workers.cloudflare.com/)** — Edge deployment & SSR adapter
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** — Cloudflare developer CLI

## ✨ Features

- 📖 **Multi-Page Layout** — Fast, structured navigation across Home, About, Projects, and Privacy Policy.
- 🎨 **Modern Design & Styling** — Custom Tailwind CSS theme with rich gradient tokens and fluid typography.
- 🌓 **Dark & Light Mode** — Seamless theme toggle with persistent user preference and smooth transitions.
- 📱 **Fully Responsive** — Mobile-first, adaptive layouts optimized for mobile, tablet, and desktop screens.
- ⚡ **Edge SSR & Caching** — Server-side rendered on Cloudflare Workers edge runtime with smart `cf` caching.
- 🎯 **SEO & Social Ready** — Dynamic Open Graph and Twitter Card tags, Schema.org JSON-LD structured data, RSS feed, and automated XML sitemap generation.
- ♿ **Accessible & Semantic** — Built using semantic HTML5, descriptive ARIA attributes, and accessible keyboard navigation.

## 🔌 API

This portfolio uses a dedicated API for content and data:

- **Repository**: [portfolio-api](https://github.com/ChhatreshKhatri/portfolio-api)
- Base URL is configured via `PUBLIC_API_URL` (see Environment Variables below).
- Endpoints used by this site:
  - `/home` — Intro, roles, statistics, highlights, and social links
  - `/about` — Biography, work experience, achievements, education, and tech stack
  - `/projects` — Featured projects, descriptions, tags, and demo/repo links

If running the API locally, make sure it is active before starting the Astro development server.

## 🔐 Environment Variables

Create a `.env` file at the project root (you can copy `.env.example`):

```bash
cp .env.example .env
```

Configure the following variables:

```env
PUBLIC_API_URL="https://your-api-url.com" # Base URL of the portfolio API (or http://localhost:3000 locally)
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

4. **Create a production build:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

6. **Deploy to Cloudflare Workers:**
   ```bash
   npm run deploy
   ```

7. **Regenerate Cloudflare Worker type definitions:**
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
