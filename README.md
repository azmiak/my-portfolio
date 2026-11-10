<div align="center">

# Developer Web Portfolio

A high-performance, minimal developer portfolio engineered with **Next.js**, **TypeScript**, and **Tailwind CSS**. Built with clean technical typography, content-driven architecture, and zero runtime overhead.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-46E08C?style=for-the-badge&labelColor=121714&color=46E08C)](LICENSE)

[Live Demo](https://your-portfolio-domain.vercel.app) &bull; [Report Bug](https://github.com/azmiak/tes-portfolio/issues) &bull; [Request Feature](https://github.com/azmiak/tes-portfolio/issues)

</div>

---

## Preview

![Portfolio Preview](./public/preview.png)

> **Note:** A live demonstration preview showcasing the dark-first technical aesthetic, dynamic vector topography, and typography hierarchy.

---

## Tech Stack

| Category | Technology | Description |
|---|---|---|
| **Core Framework** | [Next.js](https://nextjs.org/) (v16, App Router) | Static site generation, route optimization, and asset handling |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety and structured data modeling |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (v4) | Modern utility styling with inline theme tokens |
| **Typography** | [IBM Plex Sans & Mono](https://fonts.google.com/) | Technical documentation typography served self-hosted via `next/font` |
| **Deployment** | [Vercel](https://vercel.com/) | Edge network global distribution and continuous delivery |

---

## Core Features

- **Dynamic Vector Background**: Fixed mathematical SVG contour (`hero.svg`) that smoothly transitions from prominent visibility in the hero section down to an ambient watermark upon scrolling.
- **Scroll Spy Navigation**: Sticky header automatically highlights the active section in real time, with full keyboard navigation and accessible `aria-current="location"` attributes.
- **Dual Theme Support**: Dark canvas by default (`#0B0E0C`) paired with a sharp green accent (`#46E08C`), plus an accessible light theme toggle (`#F5F7F5`) with zero flash of unstyled content.
- **Single-File Content Management**: All profile details, projects, education history, and social links are driven by a single file: `content/portfolio.ts`.
- **Accessible & Responsive**: Meets WCAG AA contrast standards across all themes, supports `prefers-reduced-motion`, and scales fluidly down to mobile viewports.
- **Zero Runtime Dependencies**: No database, analytics scripts, or heavy UI component libraries required. 100% static output.

---

## Project Structure

<details>
<summary>Click to view project directory layout</summary>

```text
├── app/
│   ├── globals.css          # Theme tokens, font definitions, and base styles
│   ├── icon.svg             # Application favicon vector
│   ├── layout.tsx           # Root document layout and flash-free theme script
│   └── page.tsx             # Main portfolio page entrypoint
├── components/
│   ├── About.tsx            # Biography and facts breakdown
│   ├── Contact.tsx          # Direct communication block and social links
│   ├── Education.tsx        # Academic history and honors
│   ├── Experience.tsx       # Professional roles, clubs, and certifications
│   ├── Header.tsx           # Sticky navigation with active scroll tracking
│   ├── Hero.tsx             # Intro section with CTA and profile image
│   ├── PageBackground.tsx   # Fixed scroll-driven vector background
│   ├── Projects.tsx         # Featured lead project and secondary grid
│   ├── Skills.tsx           # Stack classifications and proficiencies
│   └── ThemeToggle.tsx      # Persistent light/dark mode switch
├── content/
│   ├── portfolio.ts         # User content configuration file
│   └── types.ts             # TypeScript definitions for portfolio data
├── lib/
│   └── ui.ts                # Shared atomic button and anchor style tokens
└── public/
    └── images/              # Profile placeholder and hero background assets
```

</details>

---

## Getting Started

### Prerequisites

Ensure you have the following installed locally:

- **Node.js**: version `20.9.0` or higher
- **npm**: version `10.0.0` or higher (or `pnpm` / `yarn`)

### Quick-Start Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/azmiak/tes-portfolio.git
   cd tes-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Verify TypeScript compilation:**
   ```bash
   npm run typecheck
   ```

### Environment Variables

This portfolio is statically pre-rendered and requires **no external API keys or secret environment variables** to run.

---

## Customization Guide

<details>
<summary>How to customize content and personal information</summary>

### 1. Update Personal Data
Open `content/portfolio.ts` and fill out your information:

```typescript
export const portfolio: Portfolio = {
  site: {
    title: "Your Name | Software Engineer",
    description: "Brief professional summary for search engines.",
    url: "https://your-domain.com",
  },
  person: {
    name: "Your Name",
    role: "Full Stack Engineer",
    headline: "Building resilient web applications and developer tools.",
    photo: {
      src: "/images/your-photo.jpg",
      alt: "Portrait of Your Name",
      width: 480,
      height: 600,
    },
  },
  // ... projects, education, skills, and contact links
};
```

### 2. Add or Remove Sections
- Setting any section array (e.g. `education: []`) to an empty array will automatically hide the section on the page and remove its entry from header navigation.
- Replace `/public/images/profile-placeholder.svg` with your personal portrait inside `public/images/`.

</details>

---

## Deployment

### Deploying to Vercel (Recommended)

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/):

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Select your repository and click **Import**.
4. Leave all default build settings as detected:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click **Deploy**.

Once deployed, copy your production domain, update the `site.url` field in `content/portfolio.ts`, and commit the change to ensure Open Graph meta tags resolve correctly.

---

## License & Contact

Distributed under the **MIT License**. See `LICENSE` for more information.

Created and maintained by **[@azmiak](https://github.com/azmiak)**:

- GitHub: [@azmiak](https://github.com/azmiak)
- LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/azmiak)
- Email: [your-email@example.com](mailto:your-email@example.com)
