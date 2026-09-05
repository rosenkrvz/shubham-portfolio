# krvz.dev - Shubham Sharma

[![Production](https://img.shields.io/badge/Live-krvz.dev-d0202b?logo=vercel)](https://portfolio-eight-delta-c5m41m049y.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-rosenkrvz%2Fshubham--portfolio-black?logo=github)](https://github.com/rosenkrvz/shubham-portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray.svg)](https://opensource.org/licenses/MIT)

The official engineering archive and personal publication of **Shubham Sharma** (osenkrvz).
Pursuing a B.S. in Applied AI & Data Science at the **Indian Institute of Technology Jodhpur (IIT Jodhpur)**.

Designed as an **Editorial Publication + Engineering Case Study Archive + Interactive Digital Notebook**, completely free of generic AI tropes, terminal gimmicks, or fake military language.

---

## Project Overview

- **Canonical Development Workspace**: Local project repository on PC (C:\Users\rosenkrvz\Downloads\portfolio).
- **Production Architecture**: Local-first development -> Git commit & push -> GitHub repository (osenkrvz/shubham-portfolio) -> Vercel Edge build & deployment -> Live portfolio.
- **Visual Design**: Editorial dark aesthetic with warm ivory typography, deep obsidian surfaces, and restrained crimson red accents.
- **Case Study Drawer**: Spatial slide-in case study reader providing structured analyses of problem definitions, architectures, and technical tradeoffs.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Animations & Micro-interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Syne & Instrument Serif (Display), Plus Jakarta Sans (Body), JetBrains Mono (Technical)
- **Deployment & Serverless API**: [Vercel](https://vercel.com/) (Edge Serverless Functions /api/status, /api/contact)

---

## Local Development & Commands

The user's local project folder is the canonical source of truth. All changes are developed and tested locally first before committing.

`ash
# 1. Install dependencies
npm install

# 2. Start Vite dev server with instant HMR (http://localhost:5173)
npm run dev

# 3. Verify code formatting & syntax
npm run lint

# 4. Build production bundle (into dist/)
npm run build

# 5. Preview production build locally (http://localhost:4173)
npm run preview
`

---

## Environment Variables

Environment configuration is managed via .env.example.
Never commit real secrets, API keys, or private tokens to Git.

| Variable | Description | Safe Example |
| :--- | :--- | :--- |
| GITHUB_USERNAME | GitHub handle for public profile links | osenkrvz |
| GITHUB_TOKEN | Optional GitHub personal access token (server-side only) | *(leave blank locally)* |
| GITHUB_WEBHOOK_SECRET| Optional secret for incoming webhook validation | *(leave blank locally)* |
| YOUR_DOMAIN | Custom domain placeholder (e.g. krvz.dev) | krvz.dev |

---

## Project Structure

`	ext
portfolio/
├── api/                   # Vercel Serverless Functions
│   ├── contact.js         # Edge contact POST endpoint
│   └── status.js          # Health check GET endpoint
├── public/                # Static assets & favicon
├── src/
│   ├── components/        # Modular React components
│   │   ├── CaseStudyDrawer.jsx  # Slide-in editorial reader
│   │   ├── Contact.jsx          # Interactive contact section
│   │   ├── CustomCursor.jsx     # Smooth lerp contextual cursor
│   │   ├── Footer.jsx           # Editorial colophon & footer
│   │   ├── Hero.jsx             # Masthead headline & bio
│   │   ├── Navigation.jsx       # Fixed header navigation & status
│   │   ├── Perspective.jsx      # Design philosophy & engineering principles
│   │   ├── SelectedWork.jsx     # Featured case studies
│   │   └── WorkIndex.jsx        # Complete searchable project archive
│   ├── data/
│   │   └── caseStudies.js # Structured case studies & project records
│   ├── styles/
│   │   └── main.css       # Tailwind CSS v4 setup & typography
│   ├── App.jsx            # Master page layout & state coordinator
│   └── main.jsx           # React 19 entry point
├── .env.example           # Safe environment variables template
├── .gitignore             # Comprehensive secret & build ignore rules
├── index.html             # HTML5 semantic entry point with SEO meta tags
├── package.json           # Scripts and dependency declarations
├── vercel.json            # Vercel deployment & SPA routing rewrites
└── vite.config.js         # Vite configuration with React & Tailwind plugins
`

---

## Git & Deployment Workflow

The local machine is the single source of truth for development.

`
EDIT LOCALLY (C:\Users\rosenkrvz\Downloads\portfolio)
      ↓
RUN + TEST LOCALLY (npm run dev / npm run build)
      ↓
COMMIT (git commit -m "...")
      ↓
PUSH TO GITHUB (git push origin main)
      ↓
VERCEL BUILDS (Automated CI/CD pipeline)
      ↓
VERCEL DEPLOYS
      ↓
LIVE WEBSITE (https://portfolio-eight-delta-c5m41m049y.vercel.app)
`

- **Production Branch**: main
- **GitHub Repository**: [https://github.com/rosenkrvz/shubham-portfolio](https://github.com/rosenkrvz/shubham-portfolio)
- **Production URL**: [https://portfolio-eight-delta-c5m41m049y.vercel.app](https://portfolio-eight-delta-c5m41m049y.vercel.app)

---

## Contact & Inquiries

- **Email**: [marksrv047@gmail.com](mailto:marksrv047@gmail.com)
- **GitHub**: [@rosenkrvz](https://github.com/rosenkrvz)
- **Live Deployment**: [https://portfolio-eight-delta-c5m41m049y.vercel.app](https://portfolio-eight-delta-c5m41m049y.vercel.app)