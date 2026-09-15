# Ishimwe Elie — Developer Portfolio

A personal portfolio website showcasing my projects, skills, and experience as a Full-Stack Developer. Built to be fast, accessible, and easy to keep up to date.

**Live site:** [add your deployed URL here once live]

---

## Features

- Responsive design — works on mobile, tablet, laptop, and desktop
- Dark/light theme with system-preference detection and manual toggle
- Sections: Hero, About, Skills, Projects (with detail modal), Experience, Education, Services, Contact
- Real, working contact form (via Formspree) with client-side validation and loading/success/error states
- Project cards open a detailed case-study modal (problem, solution, architecture, challenges, lessons learned)
- CV download button
- SEO metadata (title, description, Open Graph, Twitter card) and custom favicon
- Content-driven architecture — projects, skills, experience, and education are all stored in plain data files, so updating the site never requires touching component code

---

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router (for future multi-page routes)
- Lucide React (icons)
- Framer Motion (available for future animation work)

**Form handling**
- Formspree (contact form submissions)

**Tooling**
- ESLint
- Git / GitHub

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/Elie483/developer-portfolio.git
cd developer-portfolio
npm install
```

### Environment Variables

Copy the example env file and fill in your own values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_ENDPOINT` | Your Formspree form endpoint (e.g. `https://formspree.io/f/xxxxxxxx`), used by the contact form. Get one free at [formspree.io](https://formspree.io). |

### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── common/       # Shared small components (ThemeToggle, BrandIcons)
│   ├── layout/        # Header, Footer
│   └── ui/             # ProjectCard, ProjectModal
├── data/               # Content lives here — edit these files to update the site
│   ├── profile.ts
│   ├── navigation.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── education.ts
│   └── services.ts
├── hooks/
│   └── useTheme.ts
├── sections/           # One folder per page section
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Education/
│   ├── Services/
│   └── Contact/
├── types/              # Shared TypeScript types
├── App.tsx
└── main.tsx
```

To add a new project, experience entry, or skill, edit the relevant file in `src/data/` — no component changes needed.

---

## Deployment

This project is a static site and deploys cleanly to Vercel, Netlify, or GitHub Pages.

**Vercel (recommended)**
1. Push this repo to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add the `VITE_FORMSPREE_ENDPOINT` environment variable in the Vercel project settings
4. Deploy — Vercel auto-detects the Vite build

**Netlify**
1. Push this repo to GitHub
2. Import the repo at [netlify.com](https://netlify.com)
3. Build command: `npm run build`, publish directory: `dist`
4. Add the `VITE_FORMSPREE_ENDPOINT` environment variable in Netlify's site settings

---

## Screenshots

_Add screenshots of the site here once available._

---

## Future Improvements

- Project filtering/search
- GitHub contribution graph integration
- Blog / articles section
- Testimonials
- Automated tests for form validation and navigation

---

## License

Personal project — feel free to use the structure as a reference, but please don't copy the content as your own.