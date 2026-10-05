# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`kalfasyan/kalfasyan` is Ioannis Kalfas's GitHub **profile repo**. It holds two independent pieces of content:

- **`README.md`**: the GitHub profile README shown on github.com/kalfasyan (GitHub-flavored Markdown only: `<details>`, shields.io badges, skillicons.dev).
- **`index.html`**: the portfolio/CV site, served at https://kalfasyan.github.io/.

Both describe the same career, but neither is generated from the other. When CV facts change (roles, dates, publication counts, contact details), update both.

There is no build step, package manager, linter or test suite. To preview the site, serve the repo root and open http://localhost:8000:

```bash
python3 -m http.server 8000
```

## Deployment

`.github/workflows/publish-root-site.yml` runs on pushes to `main` that touch `index.html`, `robots.txt`, `sitemap.xml`, `images/**`, `docs/**` or the workflow itself. It copies **only those paths** into `_site/` and force-pushes them as an orphan commit to `kalfasyan/kalfasyan.github.io` (using the `SITE_DEPLOY_KEY` secret).

- All editing happens here. Never edit the `kalfasyan.github.io` repo directly; every publish overwrites it.
- A new top-level file or folder that needs to go live must be added to both the `cp` line and the `paths:` trigger, or it won't be published. Examples are a separate `css/` dir, a Google verification file or a `CNAME` file.
- `robots.txt` points crawlers at `sitemap.xml`. If you add another page to the site, add it to the sitemap as well.
- This repo's own GitHub Pages site also serves the page at `/kalfasyan/`. The first `<script>` in `<head>` redirects that URL to the root site. It only fires on the `kalfasyan.github.io` hostname, so local previews are unaffected.

## index.html architecture

The page is a single self-contained file with no frameworks. The only external requests are Google Fonts (Inter, Space Grotesk, JetBrains Mono) and the unauthenticated GitHub API for star counts. Top to bottom it contains:

1. `<head>`: SEO, Open Graph and JSON-LD `Person` metadata, all with absolute `https://kalfasyan.github.io/` URLs; the pre-paint theme script; and one inline `<style>` block organized by `/* ── SECTION ── */` banners.
2. An inline **SVG icon sprite** (`<symbol id="i-…">`). Use an icon with `<svg class="ico" aria-hidden="true"><use href="#i-name"/></svg>`. Stroke icons (Lucide-style) need nothing extra; filled brand logos (GitHub, LinkedIn, etc.) need `class="ico ico-fill"`. To add an icon, add a `<symbol>` to the sprite.
3. Nav, hero, then `<main>` with sections `#about`, `#experience`, `#work` (which includes `#open-source`), `#skills`, `#publications`, `#education`, `#community`, `#contact`.
4. One inline `<script>` IIFE at the end, written in ES5 (`var`, `function`, no modules). Keep new JS in the same style.

### Styling conventions

- **Theme tokens are defined three times**: in `:root` (light), in `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }`, and in `:root[data-theme="dark"]`. A change to a dark value must be made in both dark blocks. The toggle stores `light`/`dark` in `localStorage['theme']`, and the `<head>` script applies it before first paint.
- **Category colour via `--c`**: the career areas have tokens `--c-neuro`, `--c-industry`, `--c-agri` and `--c-eo`. A container sets `style="--c: var(--c-eo)"`, and descendants (`.org-mark`, `.bullets li::before`, `.gantt-bar`, `.subrole.current`, `.legend li`) read `--c`.
- **Scroll reveal**: add the `reveal` class to new cards or blocks. They are hidden only when JS has added the `js` class to `<html>` and the user allows motion.
- Responsive breakpoints are at 1020px, 900px and 640px, and there is an `@media print` block (it hides chrome and un-hides filtered publications).
- Accessibility conventions: decorative SVGs get `aria-hidden="true"`; external links get `target="_blank" rel="noopener noreferrer"`; motion is gated on `prefers-reduced-motion`.

### Data-driven bits (edit carefully)

- **Career Gantt chart** (`.gantt` in `#about`): bar and tick positions are hand-computed percentages on an axis that runs from `AXIS_START = 2015.75` across `AXIS_SPAN = 11.25` years (Oct 2015 to Jan 2027). For a date, `t = year + (month − 1)/12`; then `--l = (t_start − 2015.75) / 11.25 × 100%` and `--w = (t_end − t_start) / 11.25 × 100%`. Ticks use the same formula for `--x`.
  - The `.gantt-row.now` bar gets its width from JS (using its `data-start`), capped so the bar ends before the right edge. After Jan 2027 the bar stops growing. Extending the axis means changing `AXIS_SPAN` in the script **and** recomputing every `--l`, `--w` and `--x` in the markup.
  - `.end` right-aligns a row's label; use it for bars in the right half of the chart.
- **Role durations**: `<span class="dur" data-start="YYYY-MM" data-end="YYYY-MM">` is filled with text like "2 yrs 3 mos" by JS. Omit `data-end` for an ongoing role. The visible "Mar 2024 – Present" date text sits beside it and is static.
- **Publications**: each `li.pub` has space-separated `data-tags` (`agri`, `neuro`, `first`) that drive the filter chips. The list is ordered newest first. The counts in the chips' `<span>`s are **hard-coded**, so update them when adding a paper.
- **GitHub stars**: on `.stars[data-repo="owner/name"]`, the number in the markup is a fallback that JS replaces with the live count.

### Hard-coded facts that drift

When something changes, grep for and update all of these:

- **Years of experience** ("11"/"Eleven"): `<title>`, meta description, the hero stat, the About text and the Experience heading.
- **Publication counts** ("9", "5 as first author", "Nine"): the hero stat, the Publications heading and the filter chips.
- **Footer**: "© 2026" and "Last updated October 2026".
- **CV PDF**: `docs/Kalfas_Ioannis_Resume.pdf` is linked from the nav, the hero and the Contact section. To keep those links valid, replace the file in place.

## Legacy / unused files

- `assets/` holds the old HTML5 UP "Prologue" template (Sass, jQuery, Font Awesome). Nothing has referenced it since commit `74eae06`, and the deploy workflow doesn't publish it. Don't link to it from `index.html`. `LICENSE.txt` (CC BY 3.0) came with that template.
- `index.html` uses only `atlantis_logo.png`, `flytrap.png`, `pbox.png`, `profile_pic.jpg`, `sticky.png` and `wbt_freq.png` from `images/`. The other images are leftovers, but they are still published because the workflow copies the whole directory. Anything in `docs/` gets published and can be indexed by Google, so keep only the current CV there.
- `.kilo/` contains Kilo Code agent worktrees. It is ignored via `.git/info/exclude`, so it is not part of the repo.
