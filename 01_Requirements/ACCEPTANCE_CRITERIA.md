# Acceptance Criteria

**Project:** Magic Wand Cleaning  
**Client:** Jason Wilmot  
**Business or department:** Magic Wand Cleaning, a local cleaning business serving Lethbridge, Alberta and nearby areas.  
**App type:** Web Page  
**Target platform:** Web Browser  
**Status:** Intake Complete

## Project-level acceptance criteria

- Success criteria:
- The project is successful when Magic Wand Cleaning has a clean, fast, mobile-friendly website that clearly explains the business, presents its services, supports local Lethbridge SEO, and makes it easy for customers to request cleaning services. The final website must use the approved branding, work across screen sizes, include clear contact options, load quickly, have no broken links or unfinished content, and be ready to publish on the selected hosting platform.

## Feature-level acceptance criteria

- Acceptance notes:
- 1. Homepage
- Verified when the homepage clearly identifies Magic Wand Cleaning, explains that it serves Lethbridge and nearby areas, highlights the main services, includes approved branding, and provides a clear contact or quote call to action.
- 2. Services section
- Verified when each approved cleaning service is listed with a short, clear description and the business owner confirms that the service information is accurate.
- 3. Local service area content
- Verified when the website clearly mentions Lethbridge and approved nearby service areas, and the wording supports local cleaning service searches.
- 4. Contact options
- Verified when all contact methods are visible, accurate, and tested. Phone links, email links, Facebook links, and contact forms must work correctly before launch.
- 5. Calls to action
- Verified when quote or contact buttons appear in key sections of the website and direct users to the correct contact method or form.
- 6. Branding
- Verified when the approved logo, colours, favicon, typography, and visual style are applied consistently across the website.
- 7. Mobile-first responsive layout
- Verified when the website displays correctly on phone, tablet, and desktop screen sizes without broken layouts, overlapping text, cropped content, or hard-to-use buttons.
- 8. Proof-of-work section
- Verified when approved photos, before-and-after images, testimonials, or review references are added, optimized, and displayed correctly. If no proof content is available, this section can be hidden until later.
- 9. SEO setup
- Verified when each page has a clear title tag, meta description, heading structure, local Lethbridge wording, descriptive image alt text, Open Graph metadata, and clean readable content.
- 10. Footer
- Verified when the footer includes business details, service area, navigation links, and the Rose & Paw Digital Designs credit link. All footer links must work correctly.
- 11. Privacy policy
- Verified when a privacy policy is included if the website uses a contact form, analytics, or collects visitor information.
- 12. Performance and accessibility
- Verified when images are optimized, pages load quickly, text is readable, colour contrast is strong, buttons and links are accessible, forms are labelled, keyboard navigation works, and no obvious accessibility issues remain.
- 13. Final launch readiness
- Verified when the website has no unfinished placeholder text, missing images, broken links, spelling errors, major layout issues, or unapproved content.

## Workflow acceptance criteria

- Expected outcome:
- 1. Visitor learns about the business
- Expected outcome: The visitor understands that Magic Wand Cleaning is a local Lethbridge cleaning business, knows what services are offered, and knows how to contact the business.
- 2. Visitor requests service or a quote
- Expected outcome: The visitor successfully contacts Magic Wand Cleaning through phone, email, Facebook, or the contact form. The business receives enough information to follow up.
- 3. Visitor checks cleaning services
- Expected outcome: The visitor understands the available cleaning services and can decide whether Magic Wand Cleaning offers the service they need.
- 4. Visitor checks service area
- Expected outcome: The visitor confirms whether Magic Wand Cleaning serves Lethbridge or their nearby area. If unsure, the visitor has a clear way to ask.
- 5. Visitor views proof of work
- Expected outcome: The visitor gains confidence in the quality and professionalism of Magic Wand Cleaning through approved photos, testimonials, reviews, or trust content.
- 6. Contact form submission
- Expected outcome: The form validates required fields, sends the message to the approved business email, and shows the visitor a clear success message or next step.
- 7. Content update request
- Expected outcome: The requested update is reviewed, completed, tested, approved, and published without breaking existing website content or layout.
- 8. Website deployment
- Expected outcome: The latest approved website version is published successfully and works correctly on the live hosting platform.
- 9. SEO discovery workflow
- Expected outcome: Search engines can understand the website content, service area, and cleaning services so the site can appear for relevant local searches.
- 10. Analytics review, if enabled
- Expected outcome: Website traffic and search data can be reviewed to identify future improvements to content, SEO, user experience, or calls to action.

## Data acceptance criteria

- [MISSING: required data fields]
- Key fields:

1. Services

Primary key: Service ID
Unique field: Service name
Lookup fields: Service ID, Service name, Active status

Used to identify each cleaning service and connect services to page content, calls to action, images, and SEO content.

2. Service areas

Primary key: Area ID
Unique field: City or community name
Lookup fields: Area ID, City or community name, Active status

Used to identify each approved service location and support local SEO content.

3. Contact methods

Primary key: Contact method ID
Unique fields: Email address, phone number, Facebook URL
Lookup fields: Contact method ID, Method type, Preferred contact method, Active status

Used to manage the approved ways visitors can contact Magic Wand Cleaning.

4. Website pages

Primary key: Page ID
Unique fields: Page slug, page title
Lookup fields: Page ID, Page slug, Publish status

Used to identify each page or section and connect page content to SEO metadata, images, and calls to action.

5. Image assets

Primary key: Image ID
Unique field: File name
Lookup fields: Image ID, File name, Image type, Related page or section, Approval status

Used to manage approved logo files, icons, favicon, service images, background images, and proof-of-work photos.

6. Testimonials or reviews

Primary key: Review ID
Unique field: Review ID
Lookup fields: Review ID, Review source, Approval status, Active status

Used to manage approved customer feedback or review highlights.

7. SEO metadata

Primary key: Metadata ID
Unique field: Page slug or page ID
Lookup fields: Metadata ID, Page slug, Primary keyword, Local SEO phrase

Used to connect SEO titles, descriptions, keywords, Open Graph content, and alt text to the correct website page.

8. Contact requests

Primary key: Request ID
Unique field: Request ID
Lookup fields: Customer name, email address, phone number, requested service, submission date, follow-up status

Used to track contact or quote requests if a contact form is included.
- Field types:

1. Services

Service ID
Type: Text or slug
Constraint: Unique value

Service name
Type: Text
Constraint: Required

Short description
Type: Text
Constraint: Required, 1 to 2 sentences

Detailed description
Type: Long text
Constraint: Optional

Customer benefit
Type: Text
Constraint: Optional

Recommended use case
Type: Text
Constraint: Optional

Display order
Type: Number
Constraint: Optional, used to control service order

Related image
Type: Image file path
Constraint: Optional, must use approved website image

Call to action text
Type: Text
Constraint: Optional

Active status
Type: Boolean
Constraint: True or false

2. Service areas

Area ID
Type: Text or slug
Constraint: Unique value

City or community name
Type: Text
Constraint: Required

Province
Type: Text
Constraint: Default value should be Alberta

Service availability
Type: Choice
Constraint: Available, limited, not available

Display order
Type: Number
Constraint: Optional

Local SEO phrase
Type: Text
Constraint: Optional

Active status
Type: Boolean
Constraint: True or false

3. Contact methods

Contact method ID
Type: Text or slug
Constraint: Unique value

Method type
Type: Choice
Constraint: Phone, email, Facebook, contact form

Phone number
Type: Phone number
Constraint: Required if phone contact is used

Email address
Type: Email
Constraint: Required if email or contact form is used

Facebook URL
Type: URL
Constraint: Required if Facebook is linked

Display label
Type: Text
Constraint: Required

Preferred contact method
Type: Boolean
Constraint: True or false

Button text
Type: Text
Constraint: Optional

Active status
Type: Boolean
Constraint: True or false

4. Website pages

Page ID
Type: Text or slug
Constraint: Unique value

Page title
Type: Text
Constraint: Required

Page slug
Type: Text or URL path
Constraint: Required and unique

Page purpose
Type: Text
Constraint: Required

Hero heading
Type: Text
Constraint: Required for main pages

Hero subheading
Type: Text
Constraint: Optional

Main body content
Type: Long text
Constraint: Required where page content is needed

Call to action text
Type: Text
Constraint: Optional

Call to action link
Type: URL or page anchor
Constraint: Optional

Display order
Type: Number
Constraint: Optional

Publish status
Type: Choice
Constraint: Draft, review, published

5. Image assets

Image ID
Type: Text or slug
Constraint: Unique value

File name
Type: Text
Constraint: Required

Image type
Type: Choice
Constraint: Logo, favicon, icon, hero image, service image, before-and-after image, background image

Image location
Type: File path
Constraint: Required

Alt text
Type: Text
Constraint: Required for content images

Caption
Type: Text
Constraint: Optional

Related page or section
Type: Text
Constraint: Optional

Source
Type: Text
Constraint: Optional

Approval status
Type: Choice
Constraint: Pending, approved, rejected

Optimized file size
Type: Number
Constraint: Optional, should be kept as small as practical for web performance

6. Testimonials or reviews

Review ID
Type: Text or slug
Constraint: Unique value

Customer name or initials
Type: Text
Constraint: Optional

Review text
Type: Long text
Constraint: Required if review is displayed

Review source
Type: Text or URL
Constraint: Optional

Rating
Type: Number
Constraint: Optional, usually 1 to 5

Date received
Type: Date
Constraint: Optional

Approval status
Type: Choice
Constraint: Pending, approved, rejected

Display order
Type: Number
Constraint: Optional

Active status
Type: Boolean
Constraint: True or false

7. SEO metadata

Metadata ID
Type: Text or slug
Constraint: Unique value

Page title tag
Type: Text
Constraint: Required, recommended under 60 characters

Meta description
Type: Text
Constraint: Required, recommended under 160 characters

Primary keyword
Type: Text
Constraint: Required

Secondary keywords
Type: Text list
Constraint: Optional

Local SEO phrase
Type: Text
Constraint: Required where local search matters

Open Graph title
Type: Text
Constraint: Optional

Open Graph description
Type: Text
Constraint: Optional

Open Graph image
Type: Image file path
Constraint: Optional

Canonical URL
Type: URL
Constraint: Optional until domain is confirmed

Image alt text
Type: Text
Constraint: Required for important images

8. Contact requests

Request ID
Type: Text or generated ID
Constraint: Unique value

Customer name
Type: Text
Constraint: Required

Email address
Type: Email
Constraint: Required if email response is needed

Phone number
Type: Phone number
Constraint: Optional unless phone follow-up is required

Requested service
Type: Choice or text
Constraint: Optional

Message
Type: Long text
Constraint: Required

Preferred contact method
Type: Choice
Constraint: Phone, email, Facebook

Submission date
Type: Date and time
Constraint: Automatically captured by form service if available

Spam check status
Type: Choice
Constraint: Passed, flagged, blocked

Follow-up status
Type: Choice
Constraint: New, contacted, closed

Notes
Type: Long text
Constraint: Internal use only, optional

## Security acceptance criteria

- Permission rules:

The first version of the Magic Wand Cleaning website will not include user accounts, customer login, staff login, or role-based access controls.

Public website visitors can only view public website content and use approved contact options. They cannot edit website content, access private information, view submissions, or manage website settings.

Magic Wand Cleaning can review content, approve business information, request updates, approve photos, confirm services, and approve launch decisions. The business owner will not directly edit the website through an admin dashboard in the first version.

Rose & Paw Digital Designs can build, edit, publish, update, and maintain the website. This includes managing website files, hosting setup, SEO settings, contact form setup, image optimization, deployment, and technical fixes.

If a contact form is used, form submission access should be limited to the approved business email and website administrator as needed for setup and troubleshooting.

Hosting, repository, DNS, analytics, and form service access should only be granted to authorized admin users.
- Sensitive data notes:

The first version of the website should collect as little personal information as possible.

Sensitive or personal data may include:

1. Contact form details
   Customer name, email address, phone number, requested service, message, and preferred contact method.

2. Customer inquiry details
   Information a visitor provides about their home, business, cleaning needs, schedule, or location.

3. Analytics data
   Basic website activity data if analytics are enabled, such as page visits, device type, referral source, and general location data.

4. Business account access
   Hosting, DNS, repository, analytics, and form service login details are sensitive and must only be accessed by authorized administrators.

Handling expectations:

Personal information should only be used to respond to customer inquiries or provide requested cleaning service information.

The website should not publicly display customer contact details, private messages, addresses, or inquiry information.

Contact form submissions should only be sent to the approved Magic Wand Cleaning email address and accessed by authorized users.

The website should avoid collecting unnecessary personal information. Address details should only be requested if needed for quoting or service follow-up.

If a contact form or analytics are used, the website should include a privacy policy explaining what information may be collected and how it is used.

Passwords, API keys, form service keys, analytics credentials, hosting credentials, and DNS credentials must not be stored in public website files or shared publicly.
- [MISSING: data protection expectations]

## Accessibility acceptance criteria

- Accessibility considerations:
- The website should be mobile-friendly, easy to read, keyboard accessible, screen reader friendly, and simple to navigate. It should use readable text, clear headings, strong colour contrast, descriptive alt text, labelled forms, accessible buttons, and plain language.

## Testing acceptance criteria

- Unit tests cover validation and generation logic.
- Integration tests cover active-project persistence and workflow behavior.
- Manual checks cover accessibility and export reliability.

## Export or deployment acceptance criteria

- Generated package contains all 16 required files.
- ZIP structure matches approved folders.
- Missing markers remain visible in exported markdown.