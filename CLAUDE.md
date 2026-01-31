# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Production build with prerendering (runs Vite build, then Puppeteer-based prerender script, then copies index.html to 404.html)
- `npm run preview` - Preview production build locally

## Architecture

This is a React single-page application for Ziro's marketing website, built with Vite and deployed to GitHub Pages.

### Tech Stack
- React 18 with react-router-dom for client-side routing
- Tailwind CSS for styling (dark theme with silver/gray color palette)
- Framer Motion for animations
- Puppeteer for build-time prerendering (SEO optimization)

### Key Patterns

**Prerendering**: The build process uses `scripts/prerender.js` to generate static HTML for each route. This enables SEO and serves prerendered content to crawlers. The app hydrates on the client side (`src/main.jsx` detects prerendered content and uses `hydrateRoot`).

**Layout Structure**: All pages are wrapped in `Layout.jsx` which provides:
- `SpotlightCursor` - Mouse-following spotlight effect
- `Navbar` - Fixed navigation header
- `Footer` - Site footer

**Routes**: Defined in `App.jsx`:
- `/` - Home
- `/consulting` - Consulting services
- `/education` - Education services
- `/finance` - Finance services
- `/contact` - Contact page

**Animations**: Pages use Framer Motion's `AnimatePresence` for route transitions. Hydration errors from framer-motion are suppressed (expected due to animation state differences between server/client).

**Waitlist Form**: `WaitlistForm.jsx` submits to a Google Apps Script endpoint configured in `src/config/api.js`.

### Deployment
- **Host**: Hetzner server (`ziro-prod-01` at 188.245.105.165)
- **Reverse Proxy**: Traefik with Cloudflare Origin Certificate for SSL
- **Domain**: ziro.pub (via Cloudflare with Full Strict SSL)
- **CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys via rsync on push to `Launch-V2` branch
- **Server path**: `/home/ziro/ziro/website/dist/`
