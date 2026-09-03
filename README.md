# Bhushan Sovereign — Personal Digital Headquarters (v1.0)

> **"Building myself, one skill at a time."**  
> *Communication, psychology, discipline, fitness and the digital world — learning, testing and documenting the process.*

---

## 1. Brand Philosophy

**Build yourself before you try to build your world.**  
Bhushan is documenting the process of becoming more capable rather than pretending to already have everything figured out.

The website embodies the six-stage developmental progression:
```
Learning → Testing → Experiencing → Understanding → Documenting → Teaching
```

---

## 2. Visual & Editorial System

- **Primary Background**: `#F4F2EE`
- **Primary Text**: `#111111`
- **Muted Text**: `#6F6B64`
- **Borders**: `#D8D4CD`
- **Surface**: `#FFFFFF`
- **Typography**: **Inter** (Display 72–96px clamp, Body 16–18px, UI 13–14px)
- **Aesthetic**: Restrained editorial layout, generous whitespace, archival documentary photography, subtle motion, responsive grid. Zero SaaS tropes, zero gym-bro neon, zero black-and-gold luxury styling.

---

## 3. Project Architecture

```
bhushan-sovereign/
├── index.html            # Complete editorial homepage (Hero, Currently, Areas, Recent Work, Current Experiment, Journal, About, Follow, Footer)
├── journal.html          # Filterable essays & field notes with interactive reader modal
├── experiments.html      # Dedicated 21-Day experiment log, metrics, and inquiry pipeline
├── protocols.html        # Field-tested operating blueprints (Communication, Discipline, Training, Digital)
├── about.html            # Deep biography, manifesto, and core principles
├── package.json          # Vite scripts & tooling
├── vite.config.js        # Multi-page build configuration
├── dist/                 # Production-ready static build
└── src/
    ├── assets/
    │   └── documentary-hero.svg # Archival documentary framing artwork
    ├── data/
    │   └── siteData.js          # Single source of truth for site content & metadata
    ├── scripts/
    │   └── main.js              # Drawer navigation, scroll header, observer reveals, reader modal
    └── styles/
        ├── variables.css        # Color tokens, fluid typography clamps, spacing scale
        ├── global.css           # Modern reset, typography defaults, accessibility
        ├── components.css       # Editorial cards, nav, hero, drawers, footers
        └── animations.css       # Restrained scroll reveals, hover states, reduced-motion support
```

---

## 4. Development & Build

### Run locally (Development Server)
```bash
npm run dev
```
Starts the local Vite development server on `http://localhost:3000`.

### Build for Production
```bash
npm run build
```
Generates an optimized, static distribution in `/dist` ready for instant deployment to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static hosting service.

### Preview Production Build
```bash
npm run preview
```

---

## 5. Deploying to Vercel via GitHub

This project is pre-configured with `vercel.json`, `.gitignore`, and Vite production bundling.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "feat: complete Bhushan Sovereign personal website v1.0"
git branch -M main
git remote add origin https://github.com/Bhushankumar060/Bhushan-sovereign.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Log in to [vercel.com](https://vercel.com) and click **"Add New..."** → **"Project"**.
2. Select your GitHub repository.
3. Vercel will automatically detect the settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. (Optional) Set environment variables if you use a custom domain:
   - `VITE_SITE_URL` = `https://bhushansovereign.com`
5. Click **Deploy**. Your site will be live on a `*.vercel.app` domain within 30 seconds.

