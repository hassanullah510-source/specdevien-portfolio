# Project Constitution — Hassan Ullah Portfolio

**Version:** 1.0.0
**Ratified:** 2026-10-25
**Last amended:** 2026-10-25
**Owner:** Hassan Ullah

This constitution defines the non-negotiable rules for the portfolio project. Every
specification, plan, task, and line of code must comply with it. When a requirement
conflicts with a principle, the principle wins or the principle is formally amended.

---

## Article I — Honest content

1. Every claim on the site must be true and attributable to Hassan Ullah.
2. No invented clients, testimonials, metrics, certifications, employers, or dates.
3. Missing information must be visibly marked in the interface (`Link pending`) and
   tracked in `README.md` — never hidden behind a fake link, fake demo, or fake form.
4. Project cards may only contain links that resolve to a real live site or repository.
5. The experience statement ("6+ years") is supplied by the owner and must remain
   consistent everywhere it appears.

## Article II — Static first

1. The deployed site is plain HTML, CSS, and JavaScript. No framework, bundler, or
   runtime dependency is required to serve it.
2. The primary experience works on any static host, including GitHub Pages project
   sites served from a sub-path.
3. All internal URLs and asset references are relative. No leading `/` paths.
4. No client-side rendering of primary content. HTML is the source of truth.
5. Third-party requests are limited to none by default. Fonts are self-hosted.

## Article III — Accessible by default

1. The site targets WCAG 2.2 AA.
2. All functionality is keyboard operable with a visible focus indicator.
3. Text and UI contrast meets AA (4.5:1 body text, 3:1 large text and UI components).
4. Motion respects `prefers-reduced-motion: reduce`; no essential information depends
   on animation, hover, or colour alone.
5. Every section has a correct heading level, landmarks are labelled, and decorative
   graphics are hidden from assistive technology.
6. The site remains usable at 200% zoom and at a 320 px viewport width.

## Article IV — Performance budget

| Resource | Budget |
| --- | --- |
| HTML (index) | ≤ 45 KB uncompressed |
| CSS | ≤ 32 KB uncompressed |
| JavaScript | ≤ 18 KB uncompressed |
| Fonts | ≤ 100 KB total |
| Images | ≤ 300 KB total, lazy-loaded below the fold |
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | 100 |
| Cumulative Layout Shift | < 0.05 |
| LCP on throttled 4G | < 2.0 s |

Fonts are self-hosted, subset to Latin, and declared with `font-display: swap`.
Scripts are deferred. No render-blocking third parties.

## Article V — Design system discipline

1. Colour, type, spacing, radius, shadow, and motion values are defined once as CSS
   custom properties in the `tokens` cascade layer.
2. Components are styled through a small set of reusable classes; no inline styles for
   static presentation. Inline custom properties are allowed for per-instance values
   (for example project accent colours).
3. The visual language is "SIGNAL": editorial neo-brutalist, high contrast, oversized
   type, acid-lime and magenta accents, grain texture, numbered sections.
4. New sections must reuse existing tokens and components before adding new ones.

## Article VI — Maintainability

1. Content lives in `site/index.html` with clear section comments and no duplication.
2. Project entries follow one documented card pattern. Adding a project means copying
   one block and filling in the fields.
3. JavaScript is progressive enhancement only: navigation, reveals, copy-to-clipboard,
   active-section highlighting, and pointer effects. Disabling JavaScript must not hide
   primary content.
4. Every change is validated against the release checklist before deployment.
5. The README documents editing, local preview, deployment, and every open placeholder.

## Article VII — Privacy and ownership

1. No analytics, advertising, tracking pixels, or third-party embeds without an explicit
   amendment to this constitution.
2. The contact flow is `mailto:` plus copy-to-clipboard. No form data is collected by
   the site.
3. All fonts, graphics, and code are self-hosted or generated for this project.

---

## Governance

- Amendments require a dated entry in this file and a review of affected specs.
- The constitution supersedes convenience. Any deviation must be recorded in
  `specs/001-portfolio/plan.md` under "Complexity tracking".
- Compliance is checked twice: after planning and before release.
