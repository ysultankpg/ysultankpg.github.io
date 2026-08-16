# Yousuf Sultan — Portfolio & Blog

Live: [ysultankpg.github.io](https://ysultankpg.github.io)

## Design

Glassmorphic dark-theme portfolio with animated floating orbs, built on Jekyll and deployed via GitHub Pages.

- **Font:** Outfit (Google Fonts)
- **Navigation:** Floating pill nav with glassmorphic blur, hamburger on mobile
- **Theme:** Three-way switcher — Light / Dark / System (persisted in localStorage)
- **Hero:** Animated gradient orbs + circular photo + headline + tech marquee
- **Sections:** Bento stats, About (glass card + tech chips), Experience timeline, AI Agents grid, Automation Projects, Skills & Certifications, Contact card
- **Animations:** CSS float keyframes on orbs, IntersectionObserver scroll-reveal with stagger delay, pulse on agent status dots
- **Film grain:** SVG noise overlay at 3% opacity for texture
- **Go-to-top:** Floating purple button appears after 400px scroll, smooth-scrolls to top

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Full portfolio with all sections |
| Blog | `/blog/` | Blog listing with subscribe box and post cards |
| Works | `/works/` | Project gallery grid from `_data/works.yml` |

## Blog Posts

- **The SQL Mindmap** (Aug 16, 2026) — Animated mindmap covering DDL, DML, DCL, Joins, Window Functions, Aggregates
- **Data Analyst vs. BI Analyst vs. Data Engineer** (Jul 22, 2026) — Role comparison article
- **Welcome to my blog** (Jul 22, 2026) — Introduction post

## Tech Stack

- **Static site generator:** Jekyll (Ruby)
- **Hosting:** GitHub Pages (auto-builds on push to `main`)
- **Styling:** Pure CSS with custom properties (no frameworks)
- **JavaScript:** Vanilla JS — data-driven rendering, theme persistence, scroll animations

## Project Structure

```
├── index.html              # Main portfolio page
├── style.css               # Base styles, theme tokens, nav, hero, buttons, go-to-top
├── sections.css            # About, experience, agents, projects, skills, contact
├── pages.css               # Blog/Works page styles
├── data.js                 # Experience, agents, projects, skills, certs data
├── render.js               # DOM rendering + scroll animations
├── theme.js                # Light/dark/system theme switcher
├── _config.yml             # Jekyll config (future: true for timezone safety)
├── _layouts/
│   ├── default.html        # Base layout (nav, footer, go-to-top, scripts)
│   └── post.html           # Single blog post layout
├── _posts/                 # Blog posts (Markdown/HTML)
├── _data/
│   └── works.yml           # Works gallery entries
├── blog/
│   └── index.html          # Blog listing page
├── works/
│   └── index.html          # Works gallery page
├── assets/
│   └── images/             # Blog and works images
├── Gemfile                 # Ruby dependencies
└── README.md               # This file
```

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production — deploys to GitHub Pages |
| `backup/v1-enhanced` | Previous portfolio version (pre-redesign backup) |

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`

## Deployment

Push to `main` triggers GitHub Pages auto-build:
- Jekyll is natively supported — no extra config needed
- Publishes from root `/` of `main` branch
- Site available at `https://ysultankpg.github.io`

To enable: Settings → Pages → Source: Deploy from branch → `main` / `/ (root)`

## License

Personal portfolio — all rights reserved.
