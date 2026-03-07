# personal-blog

Personal portfolio and blog for [bymichaellancaster.com](https://bymichaellancaster.com), built with [Astro](https://astro.build). Outputs 100% static HTML — zero client-side JavaScript shipped by default.

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **Markdown** — Blog post authoring format
- **Vanilla CSS** — No framework, all design tokens live in `src/styles/global.css`
- **GitHub Actions** — Automated build and deployment to GitHub Pages

## Project Structure

```
/
├── public/
│   └── CNAME                          # Custom domain for GitHub Pages
├── src/
│   ├── layouts/
│   │   ├── Layout.astro               # Global page wrapper (head, sidebar, SEO)
│   │   └── BlogPost.astro             # Individual blog post layout
│   ├── components/
│   │   ├── Sidebar.astro              # Sidebar nav (scrollspy on homepage)
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro             # Post preview card
│   │   └── SectionHeader.astro        # Numbered section heading
│   ├── pages/
│   │   ├── index.astro                # Homepage (portfolio + latest posts)
│   │   └── blog/
│   │       ├── index.astro            # Full post listing page
│   │       └── [...slug].astro        # Dynamic route — one page per post
│   ├── content/
│   │   ├── config.ts                  # Blog content collection schema (Zod)
│   │   └── blog/                      # ← Your Markdown posts live here
│   │       ├── intro-to-react.md
│   │       └── desktop-nwjs.md
│   └── styles/
│       └── global.css                 # All CSS (tokens, layout, components, prose)
├── astro.config.mjs
├── package.json
└── .github/workflows/deploy.yml       # GitHub Pages deployment pipeline
```

## Commands

Run all commands from the project root:

| Command             | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `npm install`       | Install dependencies                                     |
| `npm run dev`       | Start local dev server at `http://localhost:4321`        |
| `npm run build`     | Build production site to `./dist/`                       |
| `npm run preview`   | Preview the production build locally before deploying    |
| `npm run astro`     | Run Astro CLI commands directly (e.g. `npm run astro check`) |

## Writing a Blog Post

1. Create a new Markdown file in `src/content/blog/`:

   ```
   src/content/blog/my-post-slug.md
   ```

   The filename becomes the URL: `/blog/my-post-slug/`

2. Add frontmatter at the top of the file:

   ```markdown
   ---
   title: "Your Post Title"
   date: 2026-03-07
   excerpt: "A one or two sentence summary shown on listing pages."
   tags: ["react", "typescript"]
   readTime: "5 min read"
   published: true
   ---

   Your post content in Markdown goes here.
   ```

3. Write the body in standard Markdown. Supported elements:

   - Headings (`##`, `###`, `####`)
   - Paragraphs, bold (`**text**`), italic (`*text*`)
   - Ordered and unordered lists
   - Inline code (`` `code` ``) and fenced code blocks (` ``` `)
   - Blockquotes (`> ...`)
   - Horizontal rules (`---`)
   - Images (`![alt](url)`)
   - Links (`[text](url)`)

4. Save the file. In dev mode (`npm run dev`) the post appears instantly at `http://localhost:4321/blog/my-post-slug/`. It will also appear in the "Writing" section on the homepage (latest 5 posts) and on the full listing at `/blog/`.

5. Push to `main` — the GitHub Actions workflow builds and deploys automatically.

### Frontmatter Reference

| Field       | Type       | Required | Description                                            |
| ----------- | ---------- | -------- | ------------------------------------------------------ |
| `title`     | `string`   | Yes      | Post title                                             |
| `date`      | `YYYY-MM-DD` | Yes    | Publication date (used for sorting)                    |
| `excerpt`   | `string`   | Yes      | Short summary shown on cards and in meta descriptions  |
| `tags`      | `string[]` | Yes      | Array of topic tags (e.g. `["react", "performance"]`)  |
| `readTime`  | `string`   | No       | Estimated read time (e.g. `"5 min read"`)              |
| `published` | `boolean`  | No       | Defaults to `true`. Set to `false` to hide a draft.    |

### Draft Posts

Set `published: false` in the frontmatter to hide a post from all listings and prevent a page from being generated:

```markdown
---
title: "Work in Progress"
date: 2026-03-07
excerpt: "..."
tags: ["draft"]
published: false
---
```

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

**One-time setup** (if not already configured):

1. Go to the repository **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. If using a custom domain, ensure `public/CNAME` contains your domain name — it currently contains `bymichaellancaster.com`

The production build outputs to `dist/` and generates:
- `dist/index.html` — Homepage
- `dist/blog/index.html` — Post listing
- `dist/blog/<slug>/index.html` — One page per post
- `dist/sitemap-index.xml` + `dist/sitemap-0.xml` — Auto-generated sitemap

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321` in your browser. Changes to `.astro` files, `.md` posts, and CSS hot-reload automatically.
