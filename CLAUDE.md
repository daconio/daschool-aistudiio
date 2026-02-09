# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DAKER Platform — a hackathon and developer community web app built with React 18, TypeScript, and Tailwind CSS. Currently a frontend-only prototype with all data hardcoded (no backend/API integration).

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # TypeScript check + Vite production build (tsc && vite build)
npm run preview    # Preview production build locally
```

No test runner or linter is configured.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + React Router v6 (HashRouter)

**Entry flow:** `index.html` → `index.tsx` → `App.tsx` (router) → `Layout` wrapper → page components

**Key directories:**
- `components/` — Shared UI: `Layout.tsx` (header, nav, theme toggle, floating chat button) and `Shared.tsx` (PageBanner, SidebarContainer, MiniProfile, SearchFilterToolbar)
- `pages/` — Route-specific page components, each self-contained with their own mock data and local card sub-components
- `types.ts` — All TypeScript interfaces (Hackathon, Team, Post, RankUser, Course variants, etc.)

**Routes (HashRouter):**
- `/` → HackathonPage
- `/basecamp` → Team management
- `/community` → Forum/discussions
- `/profile` → User profiles
- `/ranking` → Leaderboards
- `/education` → Education hub (most complex page, ~658 lines, 12+ category views)
- `/my-learning` → Learning dashboard (Recharts radar chart, quest system)
- `/course/antigravity` → Step-by-step course viewer
- `/project/first-step` → Project details
- `/project/first-step/stage/1` → Project stage viewer

## Key Patterns

- **Dark mode:** Layout toggles `dark` class on `document.documentElement`, persisted in localStorage, system preference as fallback. All components use Tailwind `dark:` variants.
- **State management:** Local `useState` only — no Redux/Zustand. Navigation via `useNavigate`/`useLocation`.
- **Mock data:** Hardcoded in each page component. No centralized data layer or API calls.
- **Icons:** Exclusively `lucide-react`.
- **Styling:** Tailwind utility classes with gradient backgrounds, responsive breakpoints (`sm:`, `md:`, `lg:`), and `clsx`/`tailwind-merge` for className composition.
- **Component pattern:** Pages define local card components (HackathonCard, TeamCard, etc.) with consistent gradient/shadow/badge styling.

## Dependencies of Note

- `recharts` — Used in MyLearningPage for skill radar charts
- `lucide-react` — All icons
- `clsx` + `tailwind-merge` — Class name utilities

## Deployment

Configured for Vercel (`vercel.json` with SPA rewrite). Uses HashRouter so routing works without server-side configuration.
