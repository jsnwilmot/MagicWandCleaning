# Magic Wand Cleaning

**Project:** Magic Wand Cleaning  
**Client:** Jason Wilmot  
**Business or department:** Magic Wand Cleaning, a local cleaning business serving Lethbridge, Alberta and nearby areas.  
**App type:** Web Page  
**Target platform:** Web Browser  
**Status:** Intake Complete

## Project purpose

This website helps local homeowners and businesses in Lethbridge learn about Magic Wand Cleaning, understand the cleaning services offered, see the quality of work, and contact the business to request a quote or book service.

## Problem being solved

Magic Wand Cleaning needs a clear online presence that helps local customers quickly understand what services are offered, where the business operates, and how to request cleaning services. Without a strong website, potential customers may rely only on Facebook, word of mouth, or scattered information, which can make the business harder to find and harder to trust.

## Target users

- Target users:
- Local homeowners, renters, landlords, property managers, and small business owners in Lethbridge and nearby areas who need reliable cleaning services and want an easy way to learn about Magic Wand Cleaning, view services, and request a quote.

## Generated package contents

- README.md
- PROJECT_SCOPE.md
- NEXT_STEPS.md
- CHANGE_LOG.md
- CLIENT_REQUIREMENTS.md
- ACCEPTANCE_CRITERIA.md
- ARCHITECT_INSTRUCTIONS.md
- APP_BLUEPRINT.md
- DATA_MODEL.md
- SCREEN_MAP.md
- WORKFLOW_MAP.md
- SECURITY_MODEL.md
- CODEX_INSTRUCTIONS.md
- TEST_PLAN.md
- DEPLOYMENT_NOTES.md
- PHASED_CODEX_PROMPTS.md

## Folder structure

```text
/project-name/
  00_Project_Overview/
  01_Requirements/
  02_Architecture/
  03_Data_Model/
  04_UI_UX/
  05_Workflows/
  06_Security/
  07_Development/
  08_Testing/
  09_Deployment/
  10_Documentation/
  11_Codex_Prompts/
```

## How GPT Architect should use this package

1. Validate scope boundaries and assumptions.
2. Resolve every missing marker before approvals.
3. Produce phased Codex prompts aligned with accepted requirements.

## How Codex Developer should use this package

1. Build only what is approved in these documents.
2. Do not guess beyond accepted scope.
3. Report missing decisions using exact missing-decision markers.

## Missing information summary

20 intake fields are currently missing and marked explicitly in this package.

## Next steps

- Architect review and contradiction cleanup
- Resolve client questions and missing decisions
- Approve the first Codex implementation phase

## Phase 1 implementation

The Architect-approved Phase 1 homepage foundation is implemented as a dependency-free static site.

### Local commands

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

The production-ready static output is generated in `dist/`.

### Phase 1 scope delivered

- Responsive homepage with reusable design tokens
- Accessible header, mobile navigation, main landmarks, FAQ disclosures, and footer
- Hero, services, trust, proof placeholder, service area, quote, and FAQ sections
- Approved logo and favicon assets
- Homepage metadata and safe LocalBusiness structured data
- Visible missing markers for unconfirmed business details

### Current limitation

Automated checks pass. Final rendered browser verification at the required responsive widths remains pending because the current Codex session could not keep a local preview server running for the in-app browser.
