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

## Git & Version Control Protocol

- **Strict Permission Required**: **NEVER** run `git commit` or `git push` without explicit user permission or instruction. Only test, build, or verify files unless the user specifically directs you to commit or push.

## Component & Design Conventions

- **Card Layout Hierarchy**:
  - Context & Header: Title, Subtitle.
  - Highlights Box: Narrative overview and Problem / Solution / Outcome bullets wrapped in a subtle card container (`bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-xs rounded-xl`).
  - Action CTAs: `Live Link` and `GitHub Repo` buttons immediately follow the highlights box.
  - Technologies & Tools: Categorized badges placed directly below the action buttons.
- **Navigation & Anchors**: Use clean, human-readable semantic slugs for project anchors (`#farmconnect`, `#dlouck`, `#visits-counter`, `#ramaa-creations`).
- **Accessibility & Motion**: Respect `prefers-reduced-motion` for animated typography, spotlight cards, and transitions.

## Transition & Motion Standards

- **Entrance Animations (`@starting-style`)**:
  - Maximum duration strictly capped at 300ms across all pages and components.
  - Sections: `transition duration-300 ease-out starting:opacity-0 starting:translate-y-2.5` (no artificial delays).
  - Section Headings: `SectionHeading class="starting:scale-[0.98]"`.
  - Cards: `transition-all duration-300 ease-out starting:opacity-0 starting:translate-y-2.5` (immediate fluid transition).
- **Spotlight Cards & Hover Elevations**:
  - All interactive spotlight cards across Home, About, Projects, and Privacy Policy must share: `spotlight-card relative group rounded-2xl bg-white/40 dark:bg-surface-card/60 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-brand-primary/40 transition-all duration-300 ease-out`.
  - Glow overlays: `absolute inset-0 rounded-2xl bg-linear-to-r from-brand-primary/10 via-purple-500/5 to-brand-secondary/10 opacity-60 transition-opacity duration-300 group-hover:opacity-100 -z-10`.
- **Theme Color Interpolation (Smooth Cross-Fading)**:
  - Global page canvas (`body`) smoothly cross-fades via `transition-colors duration-300 ease-out`.
  - When switching themes (`.dark` toggle), all outer card containers cross-fade via `transition-all duration-300 ease-out`.
  - Nested sub-containers, mockup frames, chrome bars, borders, and text elements must include `transition-colors duration-300 ease-out` to prevent abrupt color snapping or mismatched speeds.
  - No element may have an un-scoped delay (`delay-*`) on general transitions; all theme color switches must trigger synchronously across the entire screen.
- **Grid Layout Balance & Awards Separation**:
  - `projects` is strictly a standalone 2-column grid. When project count is odd (e.g., 3 projects), the last project naturally expands to `lg:col-span-2` (`isLastOdd`) to eliminate dead space.
  - `awards` (`Honors & Recognition`) is NEVER mixed inside the projects grid. It is rendered separately directly beneath the projects grid as a full-width container (`mt-4 rounded-2xl ...`) with its own balanced `grid-cols-2 sm:grid-cols-4` badge layout.
