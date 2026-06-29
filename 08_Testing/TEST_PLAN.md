# Test Plan

**Project:** Magic Wand Cleaning  
**Client:** Jason Wilmot  
**Business or department:** Magic Wand Cleaning, a local cleaning business serving Lethbridge, Alberta and nearby areas.  
**App type:** Web Page  
**Target platform:** Web Browser  
**Status:** Intake Complete

## Test scope

Validation, generation, persistence, document preview, and export behavior for the active project.

## Unit test targets

- Validation rules by stage
- Document helper functions
- File mapping and sanitization

## Integration test targets

- Active project generation and persistence
- Intake edit behavior versus generated documents
- Document preview and export behavior

## Manual test checklist

- Generate package and verify all 16 files exist
- Confirm missing markers are visible in preview and ZIP
- Switch active project and verify preview/export use active project docs
- Edit intake after generation and verify docs persist until regenerate

## Accessibility checks

- Keyboard navigation
- Focus visibility
- Semantic headings and labels
- Color contrast

## Security checks

- Sanitized folder and file paths
- No unsafe path traversal in export
- Missing decisions explicitly marked

## Data validation checks

- [MISSING: required data fields]

## Workflow checks

- Steps:
- 1. Visitor learns about the business
- Step 1: Visitor opens the website from Google, Facebook, direct link, referral, business card, or shared link.
- Step 2: Visitor lands on the homepage.
- Step 3: Visitor reads the business introduction and local Lethbridge service message.
- Step 4: Visitor reviews services, service area, proof of work, and contact options.
- Step 5: Visitor decides whether to contact Magic Wand Cleaning.
- 2. Visitor requests service or a quote
- Step 1: Visitor selects a quote, contact, phone, email, Facebook, or contact form call to action.
- Step 2: Visitor chooses their preferred contact method.
- Step 3: Visitor contacts the business directly or completes the contact form if used.
- Step 4: Magic Wand Cleaning receives the request.
- Step 5: Magic Wand Cleaning follows up with the potential customer.
- 3. Visitor checks cleaning services
- Step 1: Visitor navigates to the services section or services page.
- Step 2: Visitor reviews the list of approved cleaning services.
- Step 3: Visitor reads the short description for each service.
- Step 4: Visitor decides which service may fit their need.
- Step 5: Visitor uses a call to action to contact the business if interested.
- 4. Visitor checks service area
- Step 1: Visitor looks for service area information.
- Step 2: Visitor reads that Magic Wand Cleaning serves Lethbridge and approved nearby areas.
- Step 3: Visitor confirms whether their location is likely covered.
- Step 4: Visitor contacts the business if they need confirmation or want to request service.
- 5. Visitor views proof of work
- Step 1: Visitor scrolls to the proof-of-work section.
- Step 2: Visitor views approved before-and-after photos, testimonials, review highlights, or trust content if available.
- Step 3: Visitor uses the proof content to assess quality and credibility.
- Step 4: Visitor selects a contact or quote option if ready to proceed.
- 6. Contact form submission
- Step 1: Visitor opens the contact or quote request form.
- Step 2: Visitor enters required information, such as name, email, phone number, requested service, and message.
- Step 3: The form checks required fields.
- Step 4: Spam protection runs if enabled.
- Step 5: The form sends the message to the approved business email.
- Step 6: Visitor sees a success message or next-step confirmation.
- 7. Content update request
- Step 1: Magic Wand Cleaning requests a change to content, photos, services, contact details, or service area information.
- Step 2: Rose & Paw Digital Designs reviews the request.
- Step 3: Rose & Paw Digital Designs updates the website files.
- Step 4: The update is tested for layout, spelling, links, images, SEO, and mobile display.
- Step 5: Approved changes are published to the live website.
- 8. Website deployment
- Step 1: Rose & Paw Digital Designs completes approved website updates.
- Step 2: Updated files are pushed to the approved repository or hosting platform.
- Step 3: The hosting platform builds and publishes the static website.
- Step 4: Rose & Paw Digital Designs checks the live site after deployment.
- Step 5: Any deployment issues are corrected before the site is considered complete.
- 9. SEO discovery workflow
- Step 1: A person searches online for cleaning services in Lethbridge or nearby areas.
- Step 2: Search engines read the website content, page titles, headings, metadata, image alt text, and local service area wording.
- Step 3: The website may appear in relevant local search results.
- Step 4: The search user opens the website.
- Step 5: The visitor reviews the business and contacts Magic Wand Cleaning if interested.
- 10. Analytics review, if enabled
- Step 1: Analytics or Google Search Console collect visitor and search data after launch.
- Step 2: Rose & Paw Digital Designs or the business owner reviews visits, traffic sources, popular pages, device types, and search visibility.
- Step 3: Website improvement opportunities are identified.
- Step 4: Approved changes are planned and completed in a future update.

## Export or deployment checks

- ZIP includes approved folder structure
- Manifest reflects generated docs
- Export succeeds after generation

## Regression checks

- Intake navigation remains intact
- Generated docs persist after refresh
- Generated count remains accurate

## Known gaps

- [MISSING: deployment environment details]
- [MISSING: production secrets and configuration decisions]

## Phase 1 homepage checks

### Automated checks

- `npm.cmd test`: verifies semantic landmarks, exact homepage title, one H1, mobile menu control, LocalBusiness structured data, required missing markers, creator credit, local asset paths, and absence of unapproved font/tracking dependencies.
- `npm.cmd run lint`: validates JavaScript syntax for runtime and build scripts.
- `npm.cmd run build`: validates the source and produces the static `dist/` output.

### Results on 2026-06-28

- Test: passed, 17 checks.
- Lint: passed.
- Build: passed.

### Browser verification still required

- Verify 360px, 390px, 768px, 1024px, and 1440px widths.
- Verify mobile menu open, close, Escape-key behavior, and focus return.
- Verify keyboard traversal and visible focus indicators.
- Verify FAQ disclosure behavior.
- Verify all approved images load without layout shift.
- Verify there is no horizontal overflow, clipping, overlap, or unreadable text.
- Verify browser console has no relevant warnings or errors.
