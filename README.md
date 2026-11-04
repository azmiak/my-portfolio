# Portfolio

A single-page developer portfolio built with Next.js (App Router) and TypeScript. It has a hero, selected work, about, tools and contact section, follows the visitor's light or dark setting, and works down to phone width.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

Requires Node.js 20.9 or newer.

## Make it yours

Everything you see on the page comes from `data/portfolio.ts`: your name, role, email, projects, about text, tools and social links. Replace the placeholders there first.

| To change | Edit |
| --- | --- |
| Colours, spacing, type sizes | the variables at the top of `app/globals.css` |
| Fonts | `app/layout.tsx` (uses `next/font/google`) |
| Page order or sections | `app/page.tsx` and `components/` |
| Browser tab icon | `app/icon.svg` |

The large name in the hero gets heavier as the pointer moves near each letter. It switches off for visitors who have reduced motion turned on, and it is cosmetic on touch screens.

## Deploy

Push the folder to GitHub and import it in [Vercel](https://vercel.com/new). No configuration is needed.

## Structure

```
app/            layout, page, global styles, icon
components/     Header, Hero, Work, About, Tools, Contact, Footer
data/           portfolio.ts (all site content)
```
