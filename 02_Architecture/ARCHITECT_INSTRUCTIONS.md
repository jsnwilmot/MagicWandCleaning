# Architect Instructions

**Project:** Magic Wand Cleaning  
**Client:** Jason Wilmot  
**Business or department:** Magic Wand Cleaning, a local cleaning business serving Lethbridge, Alberta and nearby areas.  
**App type:** Web Page  
**Target platform:** Web Browser  
**Status:** Intake Complete

## Project purpose

This website helps local homeowners and businesses in Lethbridge learn about Magic Wand Cleaning, understand the cleaning services offered, see the quality of work, and contact the business to request a quote or book service.

## App type

Web Page

## Target platform

Web Browser

## User roles

- User roles:
- Website visitor / potential customer
- Views the website to learn about Magic Wand Cleaning, review cleaning services, check the service area, view proof of work, and contact the business for a quote or booking request.
- Magic Wand Cleaning owner
- Provides business information, confirms services, approves photos, reviews website content, confirms contact details, and gives final approval before launch.
- Website administrator / Rose & Paw Digital Designs
- Builds, edits, publishes, and maintains the website. Manages layout, SEO, accessibility, performance, contact form setup, image optimization, hosting, deployment, and technical fixes.
- Search engine visitor
- Finds the website through Google or other search engines while searching for cleaning services in Lethbridge or nearby areas.

## Data sources

- Data sources:
- Approved project data sources may include:
- 1. Magic Wand Cleaning owner-provided information
- Business name, service details, service area, contact information, preferred wording, pricing guidance if used, and final content approvals.
- 2. Provided brand assets
- Logo, favicon, icons, colours, business card design, and any approved visual branding files.
- 3. Provided photos and images
- Cleaning photos, before-and-after images, showcase images, background images, and any other client-approved website images.
- 4. Existing Facebook page
- Public business information, service details, photos, reviews, and general business context from the Magic Wand Cleaning Facebook page.
- 5. Rose & Paw Digital Designs project files
- Website files, design notes, SEO notes, copy drafts, image optimization files, and deployment notes created during the project.
- 6. Contact form service
- Submitted contact or quote request details if a contact form is added.
- 7. Website analytics
- Basic traffic and search data if analytics or Google Search Console are connected.
- No private customer database, payment system, booking system, login system, or internal business records are included as data sources for the first version.

## Architecture rules

- Keep boundaries explicit between data, workflows, security, UI, and generation.
- Avoid assumptions not present in intake or approved decisions.
- Preserve deterministic output and missing-marker visibility.

## Naming standards

Use stable names from intake for projects, roles, features, screens, workflows, and entities.

## Documentation standards

Every decision must be documented and contradictory statements must be resolved before handoff.

## Accessibility expectations

Accessibility requirements are mandatory and must be traceable to acceptance criteria.

## Security expectations

Enforce least privilege, sensitive-data handling notes, and explicit risk tracking.

## Testing expectations

Define unit, integration, and manual verification requirements before Codex implementation starts.

## Review process

1. Resolve missing markers.
2. Validate cross-document consistency.
3. Approve phased implementation order.
4. Mark package ready for Codex.

## Allowed assumptions

- Formatting or wording improvements that do not change scope.

## Blocked assumptions

- Backend, authentication, import, external AI calls, or architecture replacement without approval.

## How GPT creates Codex prompts

Create phased, scoped prompts with objective, files, constraints, acceptance criteria, testing, and reporting.

## How GPT reviews Codex output

Review for scope compliance, requirement coverage, security/accessibility impact, and test evidence.