# Yousuf Sultan's Portfolio & Blog

This repository powers [https://ysultankpg.github.io](https://ysultankpg.github.io) — a personal portfolio site (About, Experience, Skills, Automation Projects, AI Agents) with a built-in blog and a "My Works" showcase page, both powered by **Jekyll**, built and deployed automatically by **GitHub Pages**.

Everything below can be done **directly on GitHub.com in your browser** — no local setup, no terminal, no software installation needed.

---

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

---

## How the site is organized

| What | Where | Type |
|---|---|---|
| Main portfolio page (About/Experience/Skills/Automation/Agents) | `index.html` | Static HTML |
| Portfolio content (jobs, skills, projects, impact numbers) | `data.js` | JavaScript data file |
| DOM rendering + scroll animations | `render.js` | JavaScript |
| Light/dark/system theme switcher | `theme.js` | JavaScript |
| Base styles (colors, fonts, layout, go-to-top) | `style.css` | CSS |
| Section styles (about, experience, agents, projects, skills, contact) | `sections.css` | CSS |
| Blog/Works page styles | `pages.css` | CSS |
| Blog listing page | `blog/index.html` | Jekyll template |
| Individual blog posts | `_posts/` folder | Markdown/HTML files |
| "My Works" showcase page | `works/index.html` | Jekyll template |
| Works data (Tableau/app links) | `_data/works.yml` | YAML data file |
| Site-wide layout (nav, footer, go-to-top, scripts) | `_layouts/default.html` | Jekyll layout |
| Blog post layout | `_layouts/post.html` | Jekyll layout |
| Site configuration | `_config.yml` | Jekyll config |
| Your downloadable resume | `Yousuf_Sultan_Resume.pdf` | PDF |

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Full portfolio with all sections |
| Blog | `/blog/` | Blog listing with subscribe box and post cards |
| Works | `/works/` | Project gallery grid from `_data/works.yml` |

---

## Blog Posts

- **The SQL Mindmap** (Aug 16, 2026) — Animated SVG mindmap with continuously flowing particles, covering DDL, DML, DCL, Joins, Window Functions, Aggregates
- **Data Analyst vs. BI Analyst vs. Data Engineer** (Jul 22, 2026) — Role comparison article
- **Welcome to my blog** (Jul 22, 2026) — Introduction post

---

## Tech Stack

- **Static site generator:** Jekyll (Ruby)
- **Hosting:** GitHub Pages (auto-builds on push to `main`)
- **Styling:** Pure CSS with custom properties (no frameworks)
- **JavaScript:** Vanilla JS — data-driven rendering, theme persistence, scroll animations
- **Blog visuals:** SVG `<animateMotion>` for animated mindmaps with flowing particles

---

## How to make any edit (general workflow)

Every instruction below follows the same basic pattern:

1. Go to **https://github.com/ysultankpg/ysultankpg.github.io**
2. Navigate to the file you want to change
3. Click the **pencil icon** in the top-right of the file view
4. Make your edit directly in GitHub's browser-based editor
5. Scroll down, write a short commit message (e.g. "Update About text"), click **"Commit changes"**
6. Wait ~1-3 minutes — GitHub Pages automatically detects the push, rebuilds the Jekyll site, and redeploys to https://ysultankpg.github.io

No local files, no terminal, no git commands required for any of this.

---

## How to add a new blog post

1. Go to the **`_posts/`** folder in the repo
2. Click **"Add file" → "Create new file"**
3. Name the file exactly like this (this naming pattern is required by Jekyll):
   ```
   _posts/YYYY-MM-DD-your-post-title.md
   ```
   Example: `_posts/2026-08-15-lessons-from-scaling-a-team.md`
4. Paste this at the very top of the file, then write your post below it in plain Markdown:
   ```markdown
   ---
   title: "Your Post Title Here"
   date: 2026-08-15
   ---

   Your post content goes here. You can use:

   - **Bold text**
   - *Italic text*
   - Bullet lists like this one
   - [Links](https://example.com)

   ## A subheading

   More paragraphs, as much as you want.
   ```
5. Commit the file — it will automatically appear on **`/blog/`**, sorted newest-first. No other file needs to be touched.

### Adding an image to a post
1. First, upload the image itself:
   - Go to the **`assets/images/`** folder (create it if it doesn't exist yet, by creating a new file inside it — GitHub will create the folder automatically)
   - Click **"Add file" → "Upload files"**, drag your image in, commit
2. In your blog post's Markdown, reference it like this:
   ```markdown
   ![Description of the image](/assets/images/your-image-name.jpg)
   ```

### Editing or deleting an existing post
- **Edit**: open the file in `_posts/`, click the pencil icon, edit, commit
- **Delete**: open the file, click the **trash/delete icon** (or the "..." menu → "Delete file"), commit

---

## How to add a new "My Works" entry (Tableau Public, apps, etc.)

1. Go to **`_data/works.yml`**
2. Click the pencil icon to edit
3. Add a new block in this exact format (matching the existing entries):
   ```yaml
   - title: "Your Dashboard or App Name"
     description: "One or two sentences about what it shows and why it matters."
     url: "https://public.tableau.com/app/profile/yourname/viz/..."
     type: "Tableau Public"
     icon: "📊"
   ```
   - `type` is just a label shown as a small tag on the card — use whatever fits: `"Tableau Public"`, `"Web App"`, `"iOS App"`, `"Power BI"`, etc.
   - `icon` is a single emoji shown on the card — pick anything relevant
4. Commit — it appears automatically on **`/works/`**

### Removing a work entry
Delete its block (all lines starting with `-` for that entry through the next `-`), commit.

---

## How to update your Experience, Skills, or Impact Numbers

All of this lives in **`data.js`** — open it, find the right array, and edit.

### Add a new job
Find the `EXPERIENCE` array and add a new object anywhere in the list (position doesn't matter — entries are automatically sorted newest-first by `startDate` when the page loads):
```js
{
  title: "Your New Title — Company",
  company: "Location or team",
  startDate: "2026-08-01",   // YYYY-MM-DD
  endDate: null,              // null = current role, or use "YYYY-MM-DD" for a past role
  dateLabel: "Aug 2026 – Present",
  bullets: [
    "First bullet point describing your impact.",
    "Second bullet point."
  ],
},
```
Don't forget the trailing comma after the closing `}` if it's not the last item in the array.

### Add a new skill
Find `SKILL_CATEGORIES`, find the right category (e.g. `"Data Platforms"`), and add your skill to its `items` list:
```js
items: ["Snowflake", "SQL Server", "Your New Skill"],
```

### Update an impact number
Find `IMPACT_NUMBERS` and edit the `num`/`label` values directly:
```js
{ num: "9", label: "Analysts Managed & Mentored" },
```

---

## How to update your "About" text or Contact info

These live directly in **`index.html`** as plain text (not in `data.js`):
- **About paragraph**: search for `id="about"` in the file — the paragraph text is right there
- **Contact links**: search for `id="contact"` — email, phone, and LinkedIn links are listed there

Edit directly in GitHub's editor, same as everywhere else.

---

## How to replace your resume PDF

1. Go to **`Yousuf_Sultan_Resume.pdf`** in the repo
2. Click the pencil icon → since it's a PDF (not text), GitHub will offer an **"Upload files"** option instead — use that to upload your new version
3. **Keep the exact same filename** (`Yousuf_Sultan_Resume.pdf`, case-sensitive) — the "Download Resume" button on the site links to this exact name, so renaming it will break the link
4. Commit

---

## Posting from your phone (GitHub Mobile App)

You don't need a laptop to add a blog post or a new "Works" entry — the **GitHub mobile app** handles almost everything.

### What works well in the app
- Creating new blog posts (`_posts/` folder → "Create file")
- Editing existing text files (posts, `_data/works.yml`, `data.js`, etc.)
- Committing changes

### Adding a blog post from your phone
1. Open the GitHub app → your repo → **`_posts/`** folder
2. Tap **"+"** or the **"..." menu → "Create file"**
3. Name it `YYYY-MM-DD-your-title.md`
4. Type your content (same front matter format as on desktop):
   ```markdown
   ---
   title: "Your Post Title"
   date: 2026-08-01
   ---

   Your content here.
   ```
5. Tap **Commit**

### Adding a "My Works" entry from your phone
Same idea — open `_data/works.yml`, tap the pencil icon, add your new block, commit.

### Uploading images from the app
The GitHub mobile app's text editor doesn't have an image upload button. Workaround: open **github.com in your phone's mobile browser** (Safari/Chrome) instead of the app when you need to upload an image — the browser version has a proper upload/drag-and-drop button.

Once the image is uploaded to `assets/images/`, reference it in your post:
```markdown
![Description of the image](/assets/images/your-image-name.jpg)
```

---

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production — deploys to GitHub Pages |
| `backup/v1-enhanced` | Previous portfolio version (pre-redesign backup) |

---

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`

---

## Deployment

Push to `main` triggers GitHub Pages auto-build:
- Jekyll is natively supported — no extra config needed
- Publishes from root `/` of `main` branch
- Site available at `https://ysultankpg.github.io`
- `future: true` is set in `_config.yml` to handle timezone differences for post dates

To enable: Settings → Pages → Source: Deploy from branch → `main` / `/ (root)`

---

## License

Personal portfolio — all rights reserved.
