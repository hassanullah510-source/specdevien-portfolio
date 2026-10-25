# Tasks — Personal Portfolio

**Feature:** `001-portfolio`
**Spec:** [spec.md](./spec.md) · **Plan:** [plan.md](./plan.md)
**Legend:** `[P]` can run in parallel · `[x]` complete

---

## Phase 1 — Setup

- [ ] **T001** Initialize a dedicated Git repository with `main` as the default branch.
  *Done when:* `git status` works in the project folder and no site files are tracked by
  the outer home-directory repository.
- [ ] **T002** Create the folder tree: `.specify/memory`, `specs/001-portfolio`, `site`,
  `site/assets/{css,js,img,fonts}`, `.github/workflows`, `tools`.
  *Done when:* every folder exists.
- [ ] **T003** [P] Add `.gitignore` for OS files, editor files, and audit output.
- [ ] **T004** [P] Download the Latin-subset woff2 files for Space Grotesk and JetBrains
  Mono into `site/assets/fonts/`.
  *Done when:* both files exist and total ≤ 100 KB.

## Phase 2 — Specification package

- [ ] **T005** Write `.specify/memory/constitution.md` v1.0.0 with honest-content,
  static-first, accessibility, performance, design-system, maintainability, and privacy
  principles.
- [ ] **T006** Write `spec.md` with personas, eight user stories, acceptance criteria,
  functional and non-functional requirements, success criteria, assumptions, and open
  items.
- [ ] **T007** Write `plan.md` with technical context, constitution check, structure,
  architecture, design tokens, JS inventory, SEO, deployment, validation, and risks.
- [ ] **T008** Write `tasks.md` and `checklist.md`.
  *Done when:* every functional requirement maps to at least one task.

## Phase 3 — Foundation

- [ ] **T009** Create `site/index.html` skeleton: document metadata, skip link, header,
  main, footer, and section landmarks.
- [ ] **T010** Write `styles.css` `@layer reset, tokens, base` with colour, type, space,
  radius, shadow, easing, and container tokens.
- [ ] **T011** Add self-hosted `@font-face` declarations and fallback stacks.
- [ ] **T012** Implement the fixed header, wordmark, desktop navigation, availability
  badge, and scroll progress bar.
- [ ] **T013** Implement the mobile navigation `<dialog>` markup and styles.
- [ ] **T014** Implement shared components: buttons, eyebrow labels, section headings,
  tags, and pending-link labels.

## Phase 4 — Content sections

- [ ] **T015** Build the hero: name, role, value statement, availability, two CTAs,
  facts row, oversized display type, and decorative pointer spotlight.
- [ ] **T016** Build the marquee strip with duplicated, `aria-hidden` content and a
  reduced-motion pause.
- [ ] **T017** Build the six project rows with index, title, description, stack tags,
  accent variables, and pending-link state.
- [ ] **T018** Build the about section on the bone-paper background with a generated
  monogram, statement, and facts grid.
- [ ] **T019** Build the skills section with three semantic groups and no percentage
  bars.
- [ ] **T020** Build the experience section with the "6+ years" statement and four
  capability phases (no employers or dates).
- [ ] **T021** Build the services accordion with seven native `<details>` entries and
  the first open.
- [ ] **T022** Build the contact section with a large mailto link, copy button, status
  live region, and GitHub/email links.
- [ ] **T023** Build the footer with quick links, copyright, and back-to-top control.

## Phase 5 — Enhancement layer

- [ ] **T024** Implement `main.js` bootstrap: `js` class guard, reduced-motion query,
  helper utilities.
- [ ] **T025** Implement mobile dialog open/close, Escape, focus return, and scroll lock
  with a feature-detect fallback.
- [ ] **T026** Implement scroll progress and active navigation with
  `IntersectionObserver`.
- [ ] **T027** Implement reveal-on-scroll with stagger and immediate visibility under
  reduced motion.
- [ ] **T028** Implement copy-email with Clipboard API, success/failure live-region
  message, and mailto fallback.
- [ ] **T029** Implement pointer spotlight, footer year, and back-to-top visibility.
- [ ] **T030** Verify every enhancement has a no-JS fallback and no console errors.

## Phase 6 — Assets and metadata

- [ ] **T031** Create the SVG favicon, raster favicons, and `site.webmanifest`.
- [ ] **T032** Create the 1200 × 630 social preview image from
  `tools/og-template.html` using headless Chrome.
- [ ] **T033** Add title, description, canonical, Open Graph, Twitter card, theme colour,
  and JSON-LD `Person` metadata.
- [ ] **T034** Write `robots.txt` and `sitemap.xml` with the documented Pages URL.
- [ ] **T035** Build `404.html` matching the design with relative links home.

## Phase 7 — Documentation and deployment

- [ ] **T036** Write `README.md`: overview, structure, local preview, content editing,
  project link workflow, open placeholders, and deployment steps.
- [ ] **T037** Add `.github/workflows/pages.yml` to publish `site/` through GitHub Pages.
- [ ] **T038** Document the exact GitHub repository creation and Pages enablement steps
  (no `gh` CLI available).
- [ ] **T039** Add a link audit table to the README for the six project URLs.

## Phase 8 — Validation

- [ ] **T040** Validate HTML with the Nu HTML Checker; fix all errors.
- [ ] **T041** Run Lighthouse mobile against a local server; record results and meet the
  budgets.
- [ ] **T042** Keyboard walkthrough: skip link, nav, dialog, accordion, copy button,
  back-to-top.
- [ ] **T043** Reduced-motion and no-JS walkthroughs.
- [ ] **T044** Responsive check at 320, 375, 768, 1024, 1440, and 1920 px.
- [ ] **T045** Contrast audit for all text and UI states; fix failures.
- [ ] **T046** Confirm no dead links and no third-party requests.
- [ ] **T047** Verify direct-file preview and static-server preview both render content.

## Phase 9 — Release

- [ ] **T048** Review `checklist.md` and tick every applicable item.
- [ ] **T049** Update spec/plan status and record any deviations.
- [ ] **T050** Commit the completed site with a descriptive message.

---

## Dependencies

- T005–T008 precede all implementation (spec-driven gate).
- T009–T014 precede T015–T023.
- T024–T030 follow the components they enhance.
- T040–T047 follow all content and enhancements.
- T048–T050 are last.
