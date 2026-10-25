# Implementation Plan — Personal Portfolio

**Feature:** `001-portfolio`
**Status:** Implemented (v1.0.0)
**Created:** 2026-10-25
**Spec:** [spec.md](./spec.md)
**Constitution:** [constitution.md](../../.specify/memory/constitution.md)

---

## 1. Technical context

| Concern | Decision |
| --- | --- |
| Language | HTML5, CSS3 (cascade layers), JavaScript ES2020 |
| Frameworks | None |
| Build step | None |
| Dependencies | None at runtime; dev-only `npx lighthouse` for audits |
| Fonts | Self-hosted Space Grotesk (variable) + JetBrains Mono, Latin subset |
| Hosting | GitHub Pages, published from `site/` via Actions |
| Preview | `npx.cmd serve site` or `python -m http.server` inside `site/` |
| Testing | Lighthouse CLI, Nu HTML Checker, manual keyboard/reduced-motion/no-JS checks |

## 2. Constitution check

| Principle | Status | Evidence |
| --- | --- | --- |
| I. Honest content | Pass | No fake links; `Link pending` labels; README open items |
| II. Static first | Pass | No framework or build; all paths relative |
| III. Accessible | Pass | Landmarks, skip link, dialog focus management, native details, reduced motion |
| IV. Performance | Pass | Self-hosted fonts, deferred JS, SVG/CSS graphics, budgets enforced |
| V. Design system | Pass | Tokens in `@layer tokens`; shared components |
| VI. Maintainability | Pass | One HTML file, documented project block, progressive enhancement |
| VII. Privacy | Pass | `mailto:` only; no analytics or third parties |

No deviations. No complexity exceptions required.

## 3. Project structure

```text
.
├─ .github/workflows/pages.yml      # GitHub Pages deployment
├─ .specify/memory/constitution.md
├─ specs/001-portfolio/
│  ├─ spec.md
│  ├─ plan.md
│  ├─ tasks.md
│  └─ checklist.md
├─ site/
│  ├─ index.html                    # all primary content
│  ├─ 404.html
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ site.webmanifest
│  └─ assets/
│     ├─ css/styles.css             # layered design system + components
│     ├─ js/main.js                 # progressive enhancement only
│     ├─ fonts/*.woff2
│     └─ img/                       # favicon and social preview
├─ tools/og-template.html            # source for social preview render
├─ .gitignore
└─ README.md
```

## 4. Architecture

### 4.1 HTML

- One document with semantic landmarks: banner, main, footer.
- Sections in reading order: hero → work → about → skills → experience → services →
  contact.
- Primary content is static. No content is injected by JavaScript.
- Project entries use a consistent block:

```html
<article class="work-item" style="--accent: var(--acid)">
  <a class="work-link" href="…" rel="noopener">…</a>
  <!-- or -->
  <div class="work-link work-link--pending">…<span>Link pending</span></div>
</article>
```

- Missing links use `<span class="pending">` with a tooltip-style label and no anchor.

### 4.2 CSS

Single stylesheet using native cascade layers:

```css
@layer reset, tokens, base, layout, components, utilities;
```

- `reset` — box sizing, media defaults, reduced motion reset.
- `tokens` — colour, type, space, radius, shadow, easing, container.
- `base` — elements, typography, selection, focus.
- `layout` — header, sections, grids, footer.
- `components` — buttons, work rows, accordion, chips, marquee, dialog, toast.
- `utilities` — visually hidden, skip link, reveal states.

Key tokens:

| Token | Value |
| --- | --- |
| `--ink` | `#07080a` |
| `--ink-2` | `#0d0f14` |
| `--bone` | `#f2efe6` |
| `--acid` | `#d7ff3e` |
| `--magenta` | `#ff3d7f` |
| `--blue` | `#5b7cff` |
| `--display` | Space Grotesk, variable 300–700 |
| `--mono` | JetBrains Mono |
| `--step-0…6` | fluid `clamp()` type scale |
| `--space-…` | 4 px-based spacing scale |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` |

### 4.3 JavaScript (`main.js`, ≤ 18 KB)

Progressive enhancement only:

1. Add `js` class early (inline in `<head>`) for reveal initial states.
2. Mobile navigation `<dialog>`: open/close, Escape, focus return, scroll lock.
3. Scroll progress bar and active nav link with `IntersectionObserver`.
4. Reveal-on-scroll with `IntersectionObserver`; instantly visible under reduced motion.
5. Copy-email button with Clipboard API and graceful failure message.
6. Pointer spotlight on the hero, enabled only for `(pointer: fine)` and motion allowed.
7. Footer year.
8. Back-to-top button visibility and smooth scroll (respecting reduced motion).

All handlers are guarded, and every enhancement has a no-JS fallback.

### 4.4 Contact

`mailto:hassanullah510@gmail.com` link plus copy button. No form, no third party.

### 4.5 Assets

- Fonts: two Latin woff2 files (~54 KB total).
- Favicon: hand-authored SVG plus 32/180 px PNG rendered with headless Chrome.
- Social image: 1200 × 630 PNG rendered from `tools/og-template.html` with headless
  Chrome.
- Project visuals: pure CSS gradients and type; no image requests.

### 4.6 SEO

- Descriptive title, meta description, author, theme-color.
- Canonical and Open Graph URLs based on
  `https://hassanullah510-source.github.io/hassan-portfolio/` (documented as editable).
- JSON-LD `Person` with name, job title, email, URL, and GitHub `sameAs`.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`.
- One `h1`; hierarchical headings; descriptive link text.

### 4.7 GitHub Pages

`.github/workflows/pages.yml`:

1. Trigger on push to `main` and manual dispatch.
2. `actions/configure-pages`, `actions/upload-pages-artifact` with `path: site`.
3. `actions/deploy-pages` with `pages: write` and `id-token: write`.

Because the site is served from `/<repo>/`, every internal path is relative.

## 5. Design direction — "SIGNAL"

- Editorial neo-brutalist: oversized display type, numbered sections, hard rules.
- Dark ink canvas, one bone-paper section for contrast, acid contact block.
- Acid lime + magenta + electric blue accents on near-black.
- Grain overlay, marquee ticker, outlined display text, monogram tile.
- Motion: staggered reveals, marquee, pointer spotlight, hover inversion of work rows.
- All motion is decorative and disabled under reduced motion.

## 6. Validation strategy

| Check | Method | Pass condition |
| --- | --- | --- |
| HTML validity | Nu HTML Checker via `vnu.jar` or online | 0 errors |
| Lighthouse | `npx.cmd lighthouse` against local server | Per budgets |
| Accessibility | Keyboard walkthrough, axe DevTools, contrast check | No critical/serious issues |
| Responsive | 320, 375, 768, 1024, 1440, 1920 | No overflow, readable |
| No-JS | Disable JavaScript | All content and links usable |
| Reduced motion | Emulate media feature | No animation, content visible |
| Links | `Link pending` audit | No dead links |
| Console | DevTools | No errors |

## 7. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Fonts fail to load | `font-display: swap` and robust system fallback stack |
| Clipboard unavailable | Catch error, show fallback message, mailto still works |
| Dialog unsupported | Feature-detect `showModal`; fall back to anchor navigation |
| Long project titles overflow | Fluid type and `overflow-wrap` |
| Pages sub-path breaks assets | All paths relative; verified locally under a sub-path |
| Owner forgets pending links | Visible labels, README checklist, spec open items |

## 8. Complexity tracking

No constitution deviations or added complexity.
