# Magic Wand Cleaning Website

Magic Wand Cleaning Website is an 8-page static marketing website for a local cleaning business in Lethbridge, Alberta.

## Project Purpose

Provide a polished, trust-focused website that helps local homeowners understand services, build trust, and book cleaning while preserving clearly marked placeholders for unapproved client data.

## Static Site Summary

- Stack: semantic HTML, CSS, and vanilla JavaScript
- Current pages:
	- Home: `index.html`
	- Services: `services.html`
	- About: `about.html`
	- Work: `work.html`
	- FAQ: `faq.html`
	- Giving Back: `clean-start-gift.html`
	- Contact: `contact.html`
	- Privacy: `privacy.html`
- Assets: `assets/`
- Build output: `dist/`
- Validation/build tools: `tools/check-site.js`, `tools/build-site.js`

## Commands

```bash
npm test
npm run lint
npm run build
```

## Current Status

Current implementation is a dependency-free static multi-page website serving local homeowners in Lethbridge, with a monthly community donation nomination page.

- Release posture: Draft-ready, not final production-ready.

## Approved Intake Details Implemented

- Business name: Magic Wand Cleaning
- Location: Lethbridge, Alberta
- Operating history: 20+ years
- Business model: Owner-operated, mostly solo with occasional help from daughter
- Pricing: $30 per hour with a 3-hour minimum per visit
- Contact number: +1 587-377-0572
- Preferred booking methods: phone, text, email, Facebook Messenger
- Service area: Lethbridge homes, with move-out exceptions in surrounding areas based on fit
- Program page: The Clean Start Gift community nomination program

## Missing Client Details

Some business details are intentionally not invented and remain marked as placeholders.

Current marker format examples:

- `[MISSING: detail]`
- `[MISSING_BUSINESS_EMAIL]`
- `[MISSING_OWNER_BIO]`
- `[MISSING_WEB3FORMS_ACCESS_KEY]`

Current unresolved details:

- final domain
- business email address (`[MISSING_BUSINESS_EMAIL]`)
- owner bio content (`[MISSING_OWNER_BIO]`)
- Web3Forms access key (`[MISSING_WEB3FORMS_ACCESS_KEY]`)
- additional client images (`[MISSING_CLIENT_IMAGES]`)
- additional testimonials (`[MISSING_TESTIMONIALS]`)

## Final Launch Blockers

The following items must be resolved before final production deployment:

- `[MISSING: domain]`
- `[MISSING_BUSINESS_EMAIL]`
- `[MISSING_WEB3FORMS_ACCESS_KEY]`
- Owner bio final content approval for About page

Additional pending content items:

- `[MISSING_CLIENT_IMAGES]`
- `[MISSING_TESTIMONIALS]`

## Client Setup Todo

Client to create:

- New Gmail account for the business
- Cloudflare account

Client to complete with developer assistance in person:

- Google Analytics 4 access level: Editor or Administrator
- Google Search Console access level: Full user
- Google Business Profile access level: Manager
- Facebook Business Profile access level: Editor or Administrator
- Cloudflare: procure domain and grant developer access

Recommended domain:

- magicwandcleaninglethbridge.ca
