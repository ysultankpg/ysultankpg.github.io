# Yousuf Sultan's Portfolio & Blog

This repository powers [https://yousufsultan.netlify.app](https://yousufsultan.netlify.app) — a personal portfolio site (About, Experience, Skills, Automation Projects) with a built-in blog and a "My Works" showcase page, both powered by **Jekyll**, built and deployed automatically by **Netlify**.

> 🔒 This repository is **private**. Only you (and anyone you explicitly invite as a collaborator) can view or edit these files on GitHub. The live site itself remains fully public at the Netlify URL above.

Everything below can be done **directly on GitHub.com in your browser** — no local setup, no terminal, no software installation needed.

---

## 🗂️ How the site is organized

| What | Where | Type |
|---|---|---|
| Main portfolio page (About/Experience/Skills/Automation) | `index.html` | Static HTML |
| Portfolio content (jobs, skills, projects, impact numbers) | `data.js` | JavaScript data file |
| Shared site styling (colors, fonts, layout) | `styles.css` | CSS — used by every page |
| Blog listing page | `blog/index.html` | Jekyll template |
| Individual blog posts | `_posts/` folder | Markdown files |
| "My Works" showcase page | `works/index.html` | Jekyll template |
| Works data (Tableau/app links) | `_data/works.yml` | YAML data file |
| Site-wide layout (nav, footer) | `_layouts/default.html` | Jekyll layout |
| Blog post layout | `_layouts/post.html` | Jekyll layout |
| Site configuration | `_config.yml` | Jekyll config |
| Your downloadable resume | `Yousuf_Sultan_Resume.pdf` | PDF |

---

## ✏️ How to make any edit (general workflow)

Every instruction below follows the same basic pattern:

1. Go to **https://github.com/ysultankpg/ysultankpg.github.io** (sign in — this repo is private)
2. Navigate to the file you want to change
3. Click the **pencil (✏️) icon** in the top-right of the file view
4. Make your edit directly in GitHub's browser-based editor
5. Scroll down, write a short commit message (e.g. "Update About text"), click **"Commit changes"**
6. Wait ~1-3 minutes — Netlify automatically detects the push, rebuilds the Jekyll site, and redeploys to https://yousufsultan.netlify.app

No local files, no terminal, no git commands required for any of this.

---

## 📝 How to add a new blog post

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
3. That's a complete, valid line — you can also make an entire post *just* an image if you want:
   ```markdown
   ---
   title: "A quick visual"
   date: 2026-08-15
   ---

   ![Description of the image](/assets/images/your-image-name.jpg)
   ```
   Images are automatically sized responsively and styled with rounded corners to match the site — no extra work needed.

### Editing or deleting an existing post
- **Edit**: open the file in `_posts/`, click the pencil icon, edit, commit
- **Delete**: open the file, click the **trash/delete icon** (or the "..." menu → "Delete file"), commit

---

## 💼 How to add a new "My Works" entry (Tableau Public, apps, etc.)

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
   - `icon` is a single emoji shown on the card — pick anything relevant (📊 📱 🖥️ 📈 etc.)
4. Commit — it appears automatically on **`/works/`**

### Removing the placeholder entry
The file starts with one example entry labeled "Example Dashboard — replace me". Once you've added your first real entry, delete that placeholder block entirely (select those 6 lines and remove them), then commit.

### Removing a work entry
Delete its block (all lines starting with `-` for that entry through the next `-`), commit.

---

## 🧑‍💼 How to update your Experience, Skills, or Impact Numbers

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

## 🖊️ How to update your "About" text or Contact info

These live directly in **`index.html`** as plain text (not in `data.js`):
- **About paragraph**: search for `id="about"` in the file — the paragraph text is right there
- **Contact links**: search for `id="contact"` — email, phone, and LinkedIn links are listed there

Edit directly in GitHub's editor, same as everywhere else.

---

## 📄 How to replace your resume PDF

1. Go to **`Yousuf_Sultan_Resume.pdf`** in the repo
2. Click the pencil icon → since it's a PDF (not text), GitHub will offer an **"Upload files"** option instead — use that to upload your new version
3. **Keep the exact same filename** (`Yousuf_Sultan_Resume.pdf`, case-sensitive) — the "Download Resume" button on the site links to this exact name, so renaming it will break the link
4. Commit
