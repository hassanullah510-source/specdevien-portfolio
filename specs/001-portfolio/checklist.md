# Checklist — Personal Portfolio

Use this checklist twice: once to judge the specification before implementation, and once
before release.

---

## A. Requirements quality

- [ ] Every user story has a priority and testable acceptance criteria.
- [ ] Every functional requirement is traceable to a task.
- [ ] Non-functional requirements have measurable thresholds.
- [ ] Content is explicitly sourced and no claim is invented.
- [ ] Missing project URLs have a defined, visible handling.
- [ ] Out-of-scope items are listed so scope cannot creep.
- [ ] Assumptions are stated and editable.
- [ ] The spec is understandable without reading the code.

## B. Constitution compliance

- [ ] No fake links, forms, metrics, employers, or testimonials.
- [ ] No framework, bundler, or runtime dependency.
- [ ] All internal URLs are relative (Pages sub-path safe).
- [ ] Primary content is present in HTML, not injected by JS.
- [ ] Fonts are self-hosted and limited to Latin subsets.
- [ ] No analytics, trackers, or third-party embeds.
- [ ] Design tokens are defined once in the `tokens` layer.
- [ ] Enhancements are optional and documented.

## C. Accessibility

- [ ] One `h1`; headings descend in order.
- [ ] Banner, navigation, main, and footer landmarks exist and are labelled.
- [ ] Skip link is the first focusable element and works.
- [ ] All interactive elements are keyboard reachable.
- [ ] Focus indicator is visible on every interactive element and background.
- [ ] Mobile dialog opens, traps focus, closes on Escape, and restores focus.
- [ ] Accordion uses native `<details>`/`<summary>` and is keyboard operable.
- [ ] Copy button announces success and failure in a live region.
- [ ] Images and decorative graphics have correct `alt` or `aria-hidden`.
- [ ] External links indicate that they open a new tab.
- [ ] Colour is never the only indicator of state.
- [ ] Body text contrast ≥ 4.5:1; large text and UI ≥ 3:1.
- [ ] Tap targets ≥ 44 × 44 px.
- [ ] Page works at 200% zoom and 320 px width.
- [ ] `prefers-reduced-motion: reduce` disables marquee, reveals, and spotlight.
- [ ] Content remains usable with JavaScript disabled.

## D. Performance

- [ ] HTML ≤ 45 KB, CSS ≤ 32 KB, JS ≤ 18 KB, fonts ≤ 100 KB.
- [ ] Fonts use `font-display: swap`.
- [ ] Scripts are deferred.
- [ ] No render-blocking third-party requests.
- [ ] No layout shift from fonts, images, or late content.
- [ ] Animations use only `transform` and `opacity`.
- [ ] Lighthouse Performance ≥ 95 on mobile.
- [ ] LCP < 2.0 s on throttled 4G.

## E. Content and links

- [ ] Name, role, email, and GitHub are correct.
- [ ] Six projects match the approved content.
- [ ] Every project is either linked or visibly labelled "Link pending".
- [ ] No `href="#"` or placeholder URLs remain.
- [ ] "6+ years" appears once and matches the owner's claim.
- [ ] No invented employer, date, testimonial, or metric.
- [ ] Services match the approved list.
- [ ] Skills match the approved list and use no percentages.
- [ ] Copyright year is current.

## F. SEO and metadata

- [ ] Descriptive `<title>` and meta description.
- [ ] Canonical URL matches the deployed Pages URL.
- [ ] Open Graph and Twitter card tags are complete.
- [ ] Social preview image is 1200 × 630 and loads.
- [ ] JSON-LD `Person` is valid.
- [ ] `robots.txt` and `sitemap.xml` reference the deployed URL.
- [ ] Favicon and web manifest resolve with relative paths.
- [ ] 404 page links home.

## G. Cross-browser and responsive

- [ ] Chrome, Edge, Firefox, Safari: layout and interactions intact.
- [ ] 320, 375, 768, 1024, 1440, 1920 px: no horizontal scrolling.
- [ ] Long project titles and email address wrap gracefully.
- [ ] Touch devices: no hover-only information.
- [ ] `file://` preview shows all content.

## H. Release

- [ ] Lighthouse Accessibility 100, SEO 100, Best Practices ≥ 95.
- [ ] Nu HTML Checker: zero errors.
- [ ] No console errors or warnings.
- [ ] No third-party requests in the network panel.
- [ ] README documents editing, preview, links, and deployment.
- [ ] Open placeholders are listed in README and spec.
- [ ] GitHub Actions workflow publishes `site/`.
- [ ] Repository and Pages settings verified.
- [ ] Final commit made.
