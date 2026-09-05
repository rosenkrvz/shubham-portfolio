# Shubham Sharma — Machine Learning & Full-Stack Developer Portfolio

[![GitHub Repository](https://img.shields.io/badge/GitHub-rosenkrvz%2Fshubham--portfolio-blue?logo=github)](https://github.com/rosenkrvz/shubham-portfolio)
[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://portfolio-eight-delta-c5m41m049y.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A high-performance personal portfolio website engineered with **Vite**, modern **Vanilla CSS** (glassmorphism & curated dark palette), **Vanilla JavaScript**, and **Vercel Serverless Edge API functions**.

---

## 🏗️ Architecture & Continuous Delivery Pipeline

The portfolio is structured for seamless local development on your PC, integrated directly with GitHub for version control and Vercel for continuous deployment:

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
|               (https://shubham-portfolio.vercel.app         |
|                       or YOUR_DOMAIN)                       |
+-------------------------------------------------------------+
```

---

## 🚀 Quick Start & Local Development Commands

### 1. Prerequisites
- **Node.js** (v18.0 or higher recommended, current: `v24.18.0`)
- **npm** (current: `11.16.0`)
- **Git**

### 2. Installation
Open your terminal in the project directory:
```bash
cd "C:\Users\rosenkrvz\Downloads\portfolio"
npm install
```

### 3. Available Scripts
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with instant HMR at `http://localhost:5173`. |
| `npm run build` | Compiles and bundles production assets into the `dist/` directory. |
| `npm run preview` | Locally previews the production build before committing or deploying. |
| `npm run lint` | Runs syntax and code formatting checks. |

---

## 🔄 The Standard Developer Workflow

To update your website, always follow this standard flow:

1. **Open the local portfolio folder**:
   ```bash
   cd "C:\Users\rosenkrvz\Downloads\portfolio"
   ```
2. **Make your changes**:
   Edit `index.html`, `src/styles/main.css`, or `src/scripts/main.js`.
3. **Run the site locally**:
   ```bash
   npm run dev
   ```
4. **Test changes**:
   View `http://localhost:5173` in your browser to verify layouts, responsiveness, and interactions.
5. **Validate production build**:
   ```bash
   npm run build
   ```
6. **Commit changes**:
   ```bash
   git add .
   git commit -m "feat: enhance project showcase and update bio"
   ```
7. **Push to GitHub**:
   ```bash
   git push origin main
   ```
8. **Automated Vercel Deployment**:
   Vercel automatically detects the new commit on the `main` branch, triggers a fresh build, and deploys it live to production within seconds.

---

## 🌿 Branching Strategy

- **`main`**: The primary production branch. Any commit pushed to `main` triggers a production deployment on Vercel.
- **Feature Branches** (Optional for experiments):
  ```bash
  git checkout -b feature/new-ml-model
  # Make changes
  git commit -m "Add new ML model visualization"
  git push origin feature/new-ml-model
  ```
  Vercel will generate an isolated **Preview Deployment** URL for testing prior to merging into `main`.

---

## 🔐 Environment Variables

A template file `.env.example` is provided:

```env
# Example Environment Variables (Do NOT commit secrets to Git)
GITHUB_USERNAME=rosenkrvz
GITHUB_TOKEN=
GITHUB_WEBHOOK_SECRET=
YOUR_DOMAIN=
```

### Security Rules:
- **Never commit `.env` or `.env.local`** to source control.
- All secrets, API keys, or private tokens are ignored via `.gitignore`.
- In Vercel, configure environment variables via **Project Settings → Environment Variables** on the Vercel dashboard.

---

## 🌐 Custom Domain Setup

When you are ready to link a custom domain:

1. In the Vercel Dashboard, navigate to **Project Settings → Domains**.
2. Add your custom domain (represented as `YOUR_DOMAIN` in templates).
3. Configure your DNS provider with the records provided by Vercel:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`
4. Vercel automatically provisions an SSL/TLS certificate.

---

## 📂 Project Structure

```
portfolio/
├── .env.example             # Template for environment variables
├── .gitignore               # Ignored files, dependencies, build caches
├── api/                     # Vercel Serverless Edge API Routes
│   ├── contact.js           # Serverless contact form submission endpoint
│   └── status.js            # Serverless health check endpoint
├── index.html               # Main SEO-optimized markup & structure
├── package.json             # NPM package scripts and dependencies
├── README.md                # Project documentation & workflow guide
├── src/
│   ├── scripts/
│   │   └── main.js          # Dynamic UI interactions, filters, counters
│   └── styles/
│       └── main.css         # Design system, glassmorphism, responsive styles
├── vercel.json              # Vercel deployment and build configuration
└── vite.config.js           # Vite dev server and bundler configuration
```

---

## 👤 Author

**Shubham Sharma**
- GitHub: [@rosenkrvz](https://github.com/rosenkrvz)
- Email: [marksrv047@gmail.com](mailto:marksrv047@gmail.com)
