# Anant Hon — AI/ML Engineer Portfolio

A cinematic, glassmorphic portfolio built with React, Vite, and Tailwind CSS.
The background video stays fixed for the entire site while all content scrolls above it.

## Stack

- React 18 (JSX, no TypeScript)
- Vite
- Tailwind CSS
- lucide-react

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`, which can be deployed to any static host
(Vercel, Netlify, GitHub Pages, S3, etc.) with no backend required.

## Project structure

```text
src/
├── main.jsx                 # React entry point
├── App.jsx                  # Root component: fixed video + scrollable sections
├── index.css                # Tailwind directives + global styles
├── components/
│   ├── Navbar.jsx
│   ├── MobileMenu.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Certifications.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Section.jsx           # Shared section wrapper
│   ├── Reveal.jsx            # Scroll-in-view fade/slide animation
│   └── LogoMark.jsx
└── data/
    └── portfolioData.js      # Single source of truth for all resume content
```

All resume content (personal info, education, skills, projects, experience,
certifications, achievements) lives in `src/data/portfolioData.js` and is
rendered by the components — nothing is duplicated across files.

## Notes

- The background video URL points to a CloudFront asset from the original design reference.
  Swap `VIDEO_SRC` in `src/App.jsx` for your own hosted video if it becomes unavailable.
- No backend, routing library, or additional dependencies are required.
