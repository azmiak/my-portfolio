# Portfolio

A single-page personal portfolio for a student or fresh graduate. Next.js (App Router), TypeScript, Tailwind CSS.
Dark theme by default, light theme on a toggle. No backend, no database, no analytics.

Design direction, dials and the reason for each decision are in `DESIGN.md`.

## Install

Requires Node.js 20.9 or newer.

```bash
npm install
```

## Run

```bash
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

`npm run typecheck` runs the TypeScript check on its own.

## Edit your content

Everything the site says lives in one file: `content/portfolio.ts`.

- Replace every value in `[SQUARE BRACKETS]` with your own text.
- Set a list to `[]` to hide a section. Its navigation entry disappears with it.
- Optional fields (`demoUrl`, `repoUrl`, `url`, `year`, `location`, `image`, `availability`) render only when filled in. A commented example of `demoUrl` and `repoUrl` sits in the first project.
- Replace `your-email@example.com`, and the GitHub and LinkedIn URLs, with your real ones.
- Your photo: put a file in `public/images/`, then change `person.photo` (`src`, `alt`, `width`, `height`). The current image is a labeled placeholder.
- Project screenshots are optional: add `image` to a project with a real screenshot. Without one, the project shows text only.
- Set `site.url` once you know your domain, so Open Graph links resolve.

Types for every field are in `content/types.ts`. Colors are CSS variables at the top of `app/globals.css`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose Add New, then Project, and import the repository.
3. Keep the detected Next.js settings and select Deploy.
4. After the first deploy, put the live address in `site.url` in `content/portfolio.ts` and push again.

## Dependencies

| Package | Why |
|---|---|
| `next` | The framework: routing, `next/image`, `next/font`, build. |
| `react`, `react-dom` | Required by Next.js. |
| `tailwindcss` | Utility CSS for layout and theme tokens. |
| `@tailwindcss/postcss` | Connects Tailwind v4 to the Next.js build. |
| `typescript` | Type checking. |
| `@types/node`, `@types/react`, `@types/react-dom` | Type definitions for the above. |

Fonts (IBM Plex Sans and IBM Plex Mono) load through `next/font/google`, which downloads them at build time and serves them from your own domain.

## Structure

```
app/            layout, page, global styles and theme variables
components/     one component per section, plus Header, Footer and small helpers
content/        portfolio.ts (your content) and types.ts
lib/ui.ts       shared button and link classes
public/images/  placeholder portrait
```
