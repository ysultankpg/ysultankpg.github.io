# Yousuf Sultan — Portfolio & Blog

Live: [yousufsultan.netlify.app](https://yousufsultan.netlify.app)

## Design

Glassmorphic dark-theme portfolio with animated floating orbs, built on Jekyll and deployed via Netlify.

- **Font:** Outfit (Google Fonts)
- **Navigation:** Floating pill nav with glassmorphic blur, hamburger on mobile
- **Theme:** Three-way switcher — Light / Dark / System (persisted in localStorage)
- **Hero:** Animated gradient orbs + circular photo + headline + tech marquee
- **Sections:** Bento stats, About (glass card + tech chips), Experience timeline, AI Agents grid, Automation Projects, Skills & Certifications, Contact card
- **Animations:** CSS float keyframes on orbs, IntersectionObserver scroll-reveal with stagger delay, pulse on agent status dots
- **Film grain:** SVG noise overlay at 3% opacity for texture

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Full portfolio with all sections |
| Blog | `/blog/` | Blog listing with subscribe box and post cards |
| Works | `/works/` | Project gallery grid from `_data/works.yml` |

## Blog Posts

- **The SQL Mindmap** (Aug 17, 2026) — Animated mindmap covering DDL, DML, DCL, Joins, Window Functions, Aggregates
- **Data Analyst vs. BI Analyst vs. Data Engineer** (Jul 22, 2026) — Role comparison article
- **Welcome to my blog** (Jul 22, 2026) — Introduction post

## Tech Stack

- **Static site generator:** Jekyll (Ruby)
- **Hosting:** Netlify (auto-builds on push to `main`)
- **Styling:** Pure CSS with custom properties (no frameworks)
- **JavaScript:** Vanilla JS — data-driven rendering, theme persistence, visitor counter
- **Visitor counter:** CountAPI + localStorage deduplication (no double-count on refresh)

## Project Structure

```
├── index.html              # Main portfolio page
├── style.css               # Base styles, theme tokens, nav, hero, buttons
├── sections.css            # About, experience, agents, projects, skills, contact
├── pages.css               # Blog/Works page styles
├── data.js                 # Experience, agents, projects, skills, certs data
├── render.js               # DOM rendering + scroll animations
├── theme.js                # Light/dark/system theme switcher
├── visitor-counter.js      # Unique visitor counter (CountAPI)
├── _config.yml             # Jekyll config
├── _layouts/
│   ├── default.html        # Base layout (nav, footer, scripts)
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
└── netlify.toml            # Netlify build config
```

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production — deploys to Netlify |
| `backup/v1-enhanced` | Previous portfolio version (pre-redesign backup) |

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`

## Deployment

Push to `main` triggers Netlify auto-build:
- Ruby 3.1
- `bundle exec jekyll build`
- Publishes `_site/` directory

## License

Personal portfolio — all rights reserved.
