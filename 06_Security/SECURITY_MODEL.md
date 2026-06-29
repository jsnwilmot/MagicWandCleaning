# Security Model

**Project:** Magic Wand Cleaning  
**Client:** Jason Wilmot  
**Business or department:** Magic Wand Cleaning, a local cleaning business serving Lethbridge, Alberta and nearby areas.  
**App type:** Web Page  
**Target platform:** Web Browser  
**Status:** Intake Complete

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

## Permission rules

- Permission rules:
- The first version of the Magic Wand Cleaning website will not include user accounts, customer login, staff login, or role-based access controls.
- Public website visitors can only view public website content and use approved contact options. They cannot edit website content, access private information, view submissions, or manage website settings.
- Magic Wand Cleaning can review content, approve business information, request updates, approve photos, confirm services, and approve launch decisions. The business owner will not directly edit the website through an admin dashboard in the first version.
- Rose & Paw Digital Designs can build, edit, publish, update, and maintain the website. This includes managing website files, hosting setup, SEO settings, contact form setup, image optimization, deployment, and technical fixes.
- If a contact form is used, form submission access should be limited to the approved business email and website administrator as needed for setup and troubleshooting.
- Hosting, repository, DNS, analytics, and form service access should only be granted to authorized admin users.

## Authentication expectations

- [MISSING: authentication expectation]

## Authorization expectations

- [MISSING: authorization expectation]

## Sensitive data notes

- Sensitive data notes:
- The first version of the website should collect as little personal information as possible.
- Sensitive or personal data may include:
- 1. Contact form details
- Customer name, email address, phone number, requested service, message, and preferred contact method.
- 2. Customer inquiry details
- Information a visitor provides about their home, business, cleaning needs, schedule, or location.
- 3. Analytics data
- Basic website activity data if analytics are enabled, such as page visits, device type, referral source, and general location data.
- 4. Business account access
- Hosting, DNS, repository, analytics, and form service login details are sensitive and must only be accessed by authorized administrators.
- Handling expectations:
- Personal information should only be used to respond to customer inquiries or provide requested cleaning service information.
- The website should not publicly display customer contact details, private messages, addresses, or inquiry information.
- Contact form submissions should only be sent to the approved Magic Wand Cleaning email address and accessed by authorized users.
- The website should avoid collecting unnecessary personal information. Address details should only be requested if needed for quoting or service follow-up.
- If a contact form or analytics are used, the website should include a privacy policy explaining what information may be collected and how it is used.
- Passwords, API keys, form service keys, analytics credentials, hosting credentials, and DNS credentials must not be stored in public website files or shared publicly.

## Data protection expectations

- [MISSING: data protection expectations]

## Audit and logging needs

- [MISSING: audit or logging needs]

## Compliance notes

- [MISSING: compliance notes]

## Risks

- Risks:
- 1. Missing or incomplete business information
- Risk: Services, service area, contact details, or business wording may be incomplete before launch.
- Mitigation: Use approved available information for the first version and mark missing items for client confirmation before publishing.
- 2. Limited photos or proof-of-work content
- Risk: The website may have fewer real cleaning photos, before-and-after images, testimonials, or review highlights than planned.
- Mitigation: Build the section so it can be hidden at launch or added later when approved content is available.
- 3. Incorrect contact details
- Risk: Visitors may contact the wrong phone number, email address, or Facebook page if details are not confirmed.
- Mitigation: Confirm and test every contact method before launch.
- 4. Contact form delivery issues
- Risk: Contact form submissions may fail, go to spam, or not reach the business.
- Mitigation: Test the form before launch, use a reliable form service, add spam protection, and include direct phone or email links as backup.
- 5. Domain or hosting not confirmed
- Risk: Launch may be delayed if the domain, DNS, or hosting platform is not ready.
- Mitigation: Build the site so it can be deployed to a temporary preview URL first, then connect the final domain later.
- 6. SEO takes time to show results
- Risk: The website may not appear high in Google results immediately after launch.
- Mitigation: Include strong local SEO basics, submit the site to Google Search Console if approved, and improve content over time.
- 7. Generic design risk
- Risk: The site could look like a basic template if the visual direction is too plain.
- Mitigation: Use the approved brand assets, custom layout, local business messaging, and polished visuals that match Magic Wand Cleaning.
- 8. Performance issues from large images
- Risk: Oversized images may slow down the website.
- Mitigation: Compress images, use web-friendly formats, set proper image sizes, and avoid unnecessary scripts.
- 9. Accessibility issues
- Risk: Visitors may have trouble using the site if contrast, text size, headings, forms, or navigation are not accessible.
- Mitigation: Use readable text, strong contrast, labelled forms, keyboard-friendly navigation, and basic WCAG-aligned practices.
- 10. Privacy or data handling gaps
- Risk: If a contact form or analytics are used, visitor data may be collected without clear explanation.
- Mitigation: Include a privacy policy and collect only the information needed to respond to inquiries.
- 11. Scope creep
- Risk: Extra features such as online booking, payment processing, live chat, CRM integration, or custom dashboards may be requested during the first build.
- Mitigation: Keep the first version focused on the approved static website scope and treat larger features as future enhancements.
- 12. Broken links or unfinished content
- Risk: The site could launch with placeholder text, broken links, missing images, or untested forms.
- Mitigation: Complete a final launch checklist covering links, images, forms, spelling, mobile layout, SEO, accessibility, and performance.

## Assumptions

- [MISSING: assumptions]

## Blocked assumptions

- Do not assume authentication, backend services, external AI calls, or import features without explicit approval.

## Missing security decisions

20 intake fields are currently missing and marked explicitly in this package.