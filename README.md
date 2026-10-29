# Ehsan Saberi — AI-themed portfolio (EN / FA)

Static site: HTML + CSS + vanilla JS. No build step. Works on GitHub Pages.

## Files
- `index.html` — page + all CSS (inline for fast first paint)
- `js/data.js` — **all content** (edit this). `js/app.js` — rendering logic.
- `assets/` — put here: `photo.webp`, `Ehsan_Saberi_Resume.pdf` (paths set in data.js), `og.png` (share preview), `projects/*.svg`
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `404.html`

## Articles
In `js/data.js` → `articles`: `{ date:"YYYY-MM-DD", read:6, tags:["llm","python"], title, desc, link }`.
The site sorts by date (newest first), adds tag filters, search and pagination (`articlesPerPage`).
New tag: add it to `articleTags`, then use its id. The 9 current articles are SAMPLES.

## Before publishing
1. Upload `assets/photo.webp` and `assets/Ehsan_Saberi_Resume.pdf`.
2. Verify the site URL (`https://ehsadev.github.io/`) in `index.html` (canonical, og:*, JSON-LD), `robots.txt`, `sitemap.xml`. Project site? set `BASE` in `404.html`.
3. Replace sample articles.

## Deploy
Repo → upload files (keep folders) → Settings → Pages → Deploy from branch `main` / root.
Then test speed at pagespeed.web.dev and structured data at search.google.com/test/rich-results.
