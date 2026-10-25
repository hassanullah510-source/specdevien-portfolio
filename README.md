# Hassan Ullah — Portfolio

A single-page portfolio built with semantic HTML, modern CSS, and vanilla JavaScript.
Static, dependency-free, accessible, and deployed to GitHub Pages.

**Design direction:** SIGNAL — editorial neo-brutalist dark theme with acid-lime and
magenta accents, oversized type, numbered sections, and optional motion.

---

## What's inside

```text
.
├─ .github/workflows/pages.yml      # GitHub Pages deployment
├─ .specify/memory/constitution.md  # project principles
├─ specs/001-portfolio/             # spec, plan, tasks, checklist
├─ site/                            # the deployable site
│  ├─ index.html
│  ├─ 404.html
│  ├─ robots.txt · sitemap.xml · site.webmanifest
│  └─ assets/{css,js,fonts,img}
├─ tools/                           # social image + icon render templates
└─ README.md
```

Primary content lives in `site/index.html`. JavaScript only enhances the page; with
JavaScript disabled, all content and links remain available.

## Local preview

Any static server works. From the project root:

```powershell
# Option A — Node (npm is available as npm.cmd in this environment)
npx.cmd --yes serve site

# Option B — Python
python -m http.server 8080 --directory site
```

Then open <http://localhost:3000> or <http://localhost:8080>. Opening `site/index.html`
directly also shows all content, but clipboard and smooth-scroll behaviour may differ on
`file://`.

## Editing content

### Add or update a project link

Each project is one `<li class="work-item">` block in `site/index.html` (search for
`project-1-title`). To publish a project:

1. Replace the pending block:

   ```html
   <div class="work-meta">
     <span class="pending">Link pending</span>
   </div>
   ```

   with a real link:

   ```html
   <div class="work-meta">
     <a class="btn btn-ghost" href="https://example.com" target="_blank" rel="noopener">
       Visit <span aria-hidden="true">↗</span>
       <span class="sr-only">(opens in a new tab)</span>
     </a>
   </div>
   ```

2. Optionally wrap the project title in a link to the same URL.
3. Remove the "Live and repository links are being verified" note when all six are done.

### Project link checklist

| # | Project | Live URL | Repository |
| --- | --- | --- | --- |
| 01 | E-Commerce Website | _pending_ | _pending_ |
| 02 | Admin Dashboard | _pending_ | _pending_ |
| 03 | Full Stack Banking System | _pending_ | _pending_ |
| 04 | Task Management App | _pending_ | _pending_ |
| 05 | Portfolio / CMS | _pending_ | _pending_ |
| 06 | Real-Time Chat Application | _pending_ | _pending_ |

### Other content

| What | Where |
| --- | --- |
| Name, role, hero copy | `site/index.html`, `<section class="hero">` |
| About text and facts | `<section id="about">` |
| Skills | `<section id="skills">` — three `<ul>` groups |
| Experience phases | `<section id="experience">` |
| Services | `<section id="services">` — one `<details>` per service |
| Email and social links | Contact/footer sections; search `hassanullah510@gmail.com` |
| Colours, type, spacing | `site/assets/css/styles.css`, `@layer tokens` |
| Metadata and social image | `<head>` of `site/index.html`, `site/sitemap.xml`, `site/robots.txt` |

### Change the deployment URL

The site assumes the repository will be named `hassan-portfolio` and be served at:

```text
https://hassanullah510-source.github.io/hassan-portfolio/
```

If the repository name or domain changes, update these places:

- `site/index.html` — canonical, Open Graph and Twitter URLs
- `site/robots.txt` — sitemap URL
- `site/sitemap.xml` — `<loc>`
- `site/404.html` — absolute home/favicon URLs
- `site/index.html` JSON-LD — `url` and `sameAs`
- this README and the spec

## Deployment (GitHub Pages)

1. Create a new GitHub repository named **`hassan-portfolio`** under
   `hassanullah510-source`. Do not initialise it with a README.
2. From this folder:

   ```powershell
   git add .
   git commit -m "Build spec-driven portfolio"
   git remote add origin https://github.com/hassanullah510-source/hassan-portfolio.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/pages.yml` publishes the `site/` folder on every
   push to `main`. Watch progress under the **Actions** tab.
5. The site goes live at
   <https://hassanullah510-source.github.io/hassan-portfolio/>.

> This project is a dedicated Git repository inside your home directory. The outer
> home-directory repository will list this folder as untracked; that is expected. Commit
> from inside this folder.

## Validation

```powershell
# HTML validation (Nu HTML Checker)
npx.cmd --yes vnu-jar site/index.html site/404.html

# Lighthouse (start a local server first)
npx.cmd --yes lighthouse http://localhost:8080 --output=html --output-path=./lighthouse-report.html
```

Manual checks are listed in `specs/001-portfolio/checklist.md`:

- keyboard-only walkthrough (skip link, menu, accordion, copy, back to top)
- reduced-motion and JavaScript-disabled walkthroughs
- 320 / 375 / 768 / 1024 / 1440 / 1920 px widths
- no dead links and no third-party requests

## Open items

| ID | Item | Status |
| --- | --- | --- |
| OI-1 | Live/repository URLs for the six projects | **Pending** — visible "Link pending" labels |
| OI-2 | Confirm repository name / Pages URL | Assumed `hassan-portfolio` |
| OI-3 | LinkedIn / X profiles | Omitted until provided |
| OI-4 | Photo and résumé | Not included in v1 |

## Spec-driven workflow

This project was built with a lightweight Spec Kit structure:

1. `.specify/memory/constitution.md` — principles and budgets
2. `specs/001-portfolio/spec.md` — user stories, acceptance criteria, requirements
3. `specs/001-portfolio/plan.md` — architecture, design system, validation, risks
4. `specs/001-portfolio/tasks.md` — ordered implementation tasks
5. `specs/001-portfolio/checklist.md` — requirements and release checks

## Credits

- Typefaces: **Space Grotesk** (Florian Karsten) and **JetBrains Mono** (JetBrains),
  both licensed under the SIL Open Font License 1.1. See
  `site/assets/fonts/OFL.txt`.
- Design, code and content: Hassan Ullah.
