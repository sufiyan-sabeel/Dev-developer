<div align="center">

# DEV DEVELOPER

### Interactive 3D developer portfolio — by Umaiz Sufiyan

**Student Developer · AI Builder · Open-Source Developer**

[![Live Site](https://img.shields.io/badge/Live_Site-sufiyan--sabeel.github.io%2FDev--developer-68A9FF
[![GitHub](https://img.shields.io/badge/GitHub-sufiyan--sabeel-181717
[![Instagram](https://img.shields.io/badge/Instagram-umaizsufiyan.78-E4405F

</div>

---

**DEV DEVELOPER** is my personal portfolio — a single-page, dark-themed site built around a compact real-time **3D developer workstation** (Three.js) and a **live project gallery** that pulls my public repositories straight from the GitHub API.

> **Live site:** https://sufiyan-sabeel.github.io/Dev-developer/

## Features

- **3D workstation hero** — a minimalist monitor, desk, keyboard, mouse, mug, and phone rendered with Three.js, with orbit / auto-follow / 360° controls and subtly floating accessories.
- **Live GitHub gallery** — fetches real repositories (name, description, language, stars) at runtime and falls back to a verified list when the API is rate-limited. No fabricated data.
- **Mobile-first & responsive** — framed to fit cleanly from 320px to 430px without clipping, overlap, or horizontal overflow.
- **Smooth scrolling** — a slim scroll-progress indicator, IntersectionObserver section reveals, staggered card entrances, and a back-to-top button.
- **Premium dark theme** — graphite and matte-black surfaces with restrained blue accents, clean typography (Inter + JetBrains Mono), and generous negative space.
- **Accessible** — keyboard-friendly controls, visible focus states, `prefers-reduced-motion` support, and graceful WebGL / CDN fallbacks.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D & motion | Three.js (CDN) + `motion` |
| Visual layer | A single self-contained `index.html` (HTML5 + CSS3 + vanilla JavaScript) |

The Next.js app in `app/` is a thin shell: `app/page.tsx` renders the standalone portfolio (`public/index.html`) full-screen inside an iframe, while `app/layout.tsx` supplies the page metadata. The actual portfolio UI lives entirely in `index.html`.

## Project structure

```
Dev-developer/
├── app/
│   ├── layout.tsx              # Root layout + SEO / Open Graph metadata
│   ├── page.tsx                # Renders index.html full-screen
│   └── globals.css             # Tailwind entry
├── hooks/
│   └── use-mobile.ts
├── lib/
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
├── public/
│   ├── index.html              # The portfolio (single-file HTML/CSS/JS)
│   └── IMG_20260504_142856.png
├── index.html                  # Root copy served by GitHub Pages
├── metadata.json               # App metadata
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

> **Note:** GitHub Pages serves this repository from the `main` branch root, so the root `index.html` is the file that goes live at the URL above. The Next.js app is provided for local development and alternative hosting.

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/sufiyan-sabeel/Dev-developer.git
cd Dev-developer

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → open http://localhost:3000
```

### Build for production

```bash
npm run build
npm start
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Optional — only required if you extend the project with Gemini-powered features. |
| `APP_URL` | The URL where the app is hosted, used for self-referential links. |

## Featured projects

- **[AIRIS-CLI](https://github.com/sufiyan-sabeel/AIRIS-CLI)** — AI-powered command-line development assistant for coding, automation, and intelligent workflows. *(TypeScript)*
- **[Cal-Expenses-Android](https://github.com/sufiyan-sabeel/Cal-Expenses-Android)** — Native Android expense tracker (Kotlin, Room, Material 3) with expenses, budgets, goals, voice notes, tasks, PDF reports and an optional OpenRouter assistant. Offline-first. *(Kotlin)*
- **[private-agent](https://github.com/sufiyan-sabeel/private-agent)** — Open-source Android automation agent built with Flutter, using the DeepSeek API and native Accessibility Services to execute multi-step tasks from natural-language commands. *(Dart)*
- **[Maths-war](https://github.com/sufiyan-sabeel/Maths-war)** — A fast-paced 2D stickman action game where mathematics becomes the battlefield, with 50+ levels and a global leaderboard. *(Kotlin)*
- **[Mindflow](https://github.com/sufiyan-sabeel/Mindflow)** — Offline-first Android brain-training game built with Kotlin + Jetpack Compose: math sprints, puzzles, memory, logic and reflex modes. *(Kotlin)*
- **[AI-Image-To-Text-Scanner-ORC](https://github.com/sufiyan-sabeel/AI-Image-To-Text-Scanner-ORC)** — AI-powered OCR scanner that extracts editable text from images, documents, notes, and screenshots. *(Kotlin)*
- **[Openable](https://github.com/sufiyan-sabeel/Openable)** — Openable AI Builder, a self-hosted AI app builder for teams. *(TypeScript)*

…and more in the [live gallery](https://sufiyan-sabeel.github.io/Dev-developer/).

## Connect

- **Website:** https://sufiyan-sabeel.github.io/Dev-developer/
- **GitHub:** https://github.com/sufiyan-sabeel
- **Instagram:** https://www.instagram.com/umaizsufiyan.78/

## License

No license is currently specified for this repository. © Umaiz Sufiyan. All rights reserved.

---

<div align="center"><sub>Designed &amp; built by <a href="https://github.com/sufiyan-sabeel">Umaiz Sufiyan</a>.</sub></div>
