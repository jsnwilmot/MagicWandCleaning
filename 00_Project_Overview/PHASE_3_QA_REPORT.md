# Phase 3 QA Report

## Summary

Phase 3 browser QA was completed against the built static site preview from `dist` at `http://127.0.0.1:4174`.

Result:

- The 7-page static site loads and renders correctly at `390px`, `768px`, and `1440px`.
- Header, footer, internal navigation, mobile menu behavior, image paths, and responsive layouts passed the QA sweep.
- No console errors were observed during the page checks.
- No critical code fixes were required during this QA pass.
- The project is not ready for deployment setup or launch until the final domain, public email address, and hosting approval are confirmed.

## Commands Run

- `npm test`
- `npm run lint`
- `npm run build`

Results:

- `npm test`: passed
- `npm run lint`: passed
- `npm run build`: passed

## Browser QA Results By Breakpoint

Preview target:

- `dist` served locally at `http://127.0.0.1:4174`

Breakpoints tested:

- `390px` mobile
- `768px` tablet
- `1440px` desktop

Results by breakpoint:

| Breakpoint | Result | Notes |
| --- | --- | --- |
| 390px | Pass | No horizontal scrolling. Header/footer readable. Mobile menu opened correctly. Missing markers remained visible. |
| 768px | Pass | No horizontal scrolling. Tablet layout held together cleanly. Missing markers remained visible. |
| 1440px | Pass | No horizontal scrolling. Header/footer and content sections rendered correctly. Header and footer link navigation worked. |

## Page-By-Page Findings

### Home

- Passed layout, navigation, footer, and console checks.
- `trestle.png` is lazy-loaded, so it is not fetched in the first viewport before interaction. After a small scroll interaction it loaded correctly at all required widths with natural size `1536x1024`.
- Missing markers remained visible:
  - `[MISSING: approved before-and-after photos]`
  - `[MISSING: client-approved testimonials or Facebook reviews]`
  - `[MISSING: confirmed full service area list]`
  - `[MISSING: email address]`

### Services

- Passed layout, header/footer, current-page state, image path, and console checks.
- `[MISSING: email address]` remained visible in footer.

### About

- Passed layout, header/footer, current-page state, image path, and console checks.
- Decorative image alt handling was appropriate.
- `[MISSING: email address]` remained visible in footer.

### Work

- Passed layout, header/footer, current-page state, and console checks.
- `[MISSING: approved before-and-after photos]` remained visible.
- `[MISSING: email address]` remained visible in footer.

### FAQ

- Passed layout, header/footer, current-page state, and console checks.
- FAQ disclosure remained keyboard-usable.
- `[MISSING: email address]` remained visible in footer.

### Contact

- Passed layout, header/footer, current-page state, and console checks.
- No working form was implied or exposed.
- `[MISSING: email address]` remained visible.

### Privacy

- Passed layout, header/footer, footer-link navigation, and console checks.
- No broken references found.
- `[MISSING: email address]` remained visible in footer.

## Accessibility Findings

- All checked pages had exactly one `h1`.
- Heading structure was logical and sequential enough for a static marketing site.
- No images were missing an `alt` attribute during QA.
- Decorative images used empty alt text where appropriate.
- The service-area image used meaningful alt text: `Lethbridge train trestle illustration for Magic Wand Cleaning service area`.
- Links had clear visible names.
- Focus styling rules were present in the loaded CSS.
- Keyboard behavior spot checks passed for:
  - mobile menu toggle
  - FAQ disclosure interaction
- Contact page currently has no form fields, so there are no missing field-label issues.
- No obvious colour-contrast problems were observed during the visual pass.

## SEO File Findings

- `robots.txt` exists.
- `sitemap.xml` exists.
- Neither file uses a fake production domain.
- Both files still use the explicit placeholder marker `[MISSING: domain]`, which is appropriate until the final domain is approved.

Deployment blocker:

- `sitemap.xml` is not launch-ready until the final approved production domain is supplied and placeholders are replaced.
- `robots.txt` is not launch-ready until the sitemap URL can point to the approved production domain.

## Contact Form Status

- The contact page does not expose a working form.
- There is no implied submission workflow, endpoint, or fake success behavior.
- The unresolved email address remains clearly marked as `[MISSING: email address]`.

## Remaining Blockers

- Final approved production domain is still missing.
- Public email address is still missing.
- Hosting approval is still missing.
- Before-and-after photos are still missing.
- Client-approved testimonials or Facebook review content is still missing.
- Confirmed full service area list is still missing.

## Recommended Fixes Before Deployment

1. Approve the final production domain.
2. Replace `[MISSING: domain]` placeholders in canonical URLs, sitemap, robots, Open Graph metadata, and any structured data that depends on the live domain.
3. Approve the public email address or approved contact channel for launch.
4. Confirm the hosting target before deployment work begins.
5. Replace remaining client-content markers that should not appear on the public launch version.

## Deployment Readiness

Current status:

- Ready for continued pre-launch preparation and architect review.
- Not ready for deployment setup or public launch yet because domain, email, and hosting approval are still unresolved.
