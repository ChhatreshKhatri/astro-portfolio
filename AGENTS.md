# Agent Guidelines — Astro Portfolio

## Architecture & Single Source of Truth

- **Frontend**: `astro-portfolio` (Astro 5, TypeScript, Tailwind CSS v4).
- **Backend**: `portfolio-api` (Cloudflare Worker runtime serving JSON endpoints).
- **Single Source of Truth**: All dynamic content (Hero, Stats, Selected Work, Enterprise Highlights, Capabilities, Experience, Projects) must originate from `portfolio-api/src/*.json` (`home.json`, `about.json`, `projects.json`).
- **No Hardcoded Fallbacks**: Never inject static fallback constants or text strings in frontend components. If API data is unavailable, maintain the loading state or omit optional blocks gracefully.
- **Homepage Efficiency**: The homepage (`/`) must only execute a single API request to `/home` (`getHomeData()`). All homepage sections must map cleanly to fields inside `home.json`.

## Development Workflows

- **Frontend Dev Server**:
  - Start in background: `astro dev --background`
  - Manage: `astro dev status`, `astro dev logs`, `astro dev stop`
- **Backend Dev Server**:
  - Run within `portfolio-api`: `npx wrangler dev --port 8788 --ip 127.0.0.1`
- **Testing & Verification**:
  - Backend tests: `npm test` (`vitest run` inside `portfolio-api`)
  - Type checks: `npx astro check` (maintain zero errors, warnings, and hints)
  - Production build: `npm run build` in `astro-portfolio`

## Component & Design Conventions

- **Card Layout Hierarchy**:
  - Context & Header: Title, Subtitle.
  - Highlights Box: Narrative overview and Problem / Solution / Outcome bullets wrapped in a subtle card container (`bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-xs rounded-xl`).
  - Action CTAs: `Live Link` and `GitHub Repo` buttons immediately follow the highlights box.
  - Technologies & Tools: Categorized badges placed directly below the action buttons.
- **Navigation & Anchors**: Use clean, human-readable semantic slugs for project anchors (`#farmconnect`, `#dlouck`, `#visits-counter`, `#ramaa-creations`).
- **Accessibility & Motion**: Respect `prefers-reduced-motion` for animated typography, spotlight cards, and transitions.
