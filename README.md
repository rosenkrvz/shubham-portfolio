# krvz.dev — Machine Learning & Full-Stack Systems Architecture

[![GitHub Repository](https://img.shields.io/badge/GitHub-rosenkrvz%2Fshubham--portfolio-red?logo=github)](https://github.com/rosenkrvz/shubham-portfolio)
[![Production Site](https://img.shields.io/badge/Live-krvz.dev-ff1a26?logo=vercel)](https://portfolio-eight-delta-c5m41m049y.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray.svg)](https://opensource.org/licenses/MIT)

Official systems portfolio of **Shubham Sharma** (`rosenkrvz`).
Built with **Vite**, **Vanilla CSS** (Sith Darth Vader Red & Black design system with precision hairline borders and ambient grid textures), **Satoshi & JetBrains Mono typography**, and **client-side URL tab routing** with **Vercel Serverless Edge API functions**.

---

## 🧭 Tab Architecture & URL Routing

The application implements dedicated tab routing that synchronizes directly with the browser URL window:

| Tab | URL Path | Description |
| :--- | :--- | :--- |
| **01 // HOME** | `/home` (or `/`) | Primary HUD, mission overview, tactical code snippet, and live telemetry. |
| **02 // ABOUT** | `/about` | Technical engineering dossier, Python ecosystem, ML systems, and doctrine. |
| **03 // PROJECTS** | `/projects` | Categorized project matrix (Machine Learning, Python Core, Web & DevOps). |
| **04 // CONTACT** | `/contact` | Direct communication dossier (`marksrv047@gmail.com`), GitHub, and message dispatch. |

All routes are rewritten to `/index.html` via `vercel.json` and resolved dynamically by the client router with native browser history support.

---

## 🏗️ Continuous Delivery Architecture

```
+-------------------------------------------------------------+
|                     LOCAL DEVELOPMENT                       |
|               (C:\Users\rosenkrvz\Downloads\portfolio)      |
+-------------------------------------------------------------+
                              |
                              | git commit & push
                              v
+-------------------------------------------------------------+
|                     GITHUB REPOSITORY                       |
|        (https://github.com/rosenkrvz/shubham-portfolio)     |
|                       Branch: main                          |
+-------------------------------------------------------------+
                              |
                              | Automated Webhook Trigger
                              v
+-------------------------------------------------------------+
|                      VERCEL EDGE CI/CD                      |
|                  Build: npm run build (Vite)                |
|                  Output: dist/ & api/                       |
+-------------------------------------------------------------+
                              |
                              | Global Edge CDN Distribution
                              v
+-------------------------------------------------------------+
|                     PRODUCTION WEBSITE                      |
|       (https://portfolio-eight-delta-c5m41m049y.vercel.app  |
|                       or krvz.dev)                          |
+-------------------------------------------------------------+
```

---

## 🚀 Local Development Commands

```bash
# Install dependencies
npm install

# Start Vite dev server with hot reload at http://localhost:5173
npm run dev

# Run linting check
npm run lint

# Build production bundle into dist/
npm run build

# Preview production build locally at http://localhost:4173
npm run preview
```

---

## 🔄 The Standard Developer Workflow

1. **Open local project**: `cd "C:\Users\rosenkrvz\Downloads\portfolio"`
2. **Make modifications** to `index.html`, `src/styles/main.css`, or `src/scripts/main.js`.
3. **Test locally**: `npm run dev` or `npm run build`.
4. **Commit changes**: `git commit -m "feat: enhance contact channels"`
5. **Push to GitHub**: `git push origin main`
6. **Automatic deployment**: Vercel automatically builds and deploys to production.

---

## 📬 Contact & Direct Channels

- **Primary Email**: [marksrv047@gmail.com](mailto:marksrv047@gmail.com)
- **GitHub**: [@rosenkrvz](https://github.com/rosenkrvz)
- **Domain**: `krvz.dev` / [https://portfolio-eight-delta-c5m41m049y.vercel.app](https://portfolio-eight-delta-c5m41m049y.vercel.app)