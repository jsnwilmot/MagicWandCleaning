"use strict";

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const approvedPhoneDisplay = "+1 587-377-0572";
const approvedPhoneSchema = "+1-587-377-0572";
const approvedFacebookUrl = "https://www.facebook.com/profile.php?id=100092217970885";
const approvedServiceArea = "Lethbridge, AB, Canada";
const creatorUrl = "https://designs.roseandpaw.ca";

const checks = [
  ["exact page title", "<title>Magic Wand Cleaning | Cleaning Services in Lethbridge, Alberta</title>"],
  ["semantic header", "<header"],
  ["semantic navigation", "<nav"],
  ["semantic main", "<main"],
  ["semantic footer", "<footer"],
  ["mobile menu control", 'aria-controls="primary-navigation"'],
  ["LocalBusiness structured data", '"@type": "LocalBusiness"'],
  ["proof photo marker", "[MISSING: approved before-and-after photos]"],
  ["testimonial marker", "[MISSING: client-approved testimonials or Facebook reviews]"],
  ["email marker", "[MISSING: email address]"],
  ["approved phone number", approvedPhoneDisplay],
  ["approved Facebook URL", approvedFacebookUrl],
  ["approved service area", approvedServiceArea],
  ["creator URL", creatorUrl],
  ["creator credit", "Website created by Rose &amp; Paw Digital Designs"]
];

const failures = [];

for (const [label, snippet] of checks) {
  if (!html.includes(snippet)) {
    failures.push(`Missing ${label}: ${snippet}`);
  }
}

const h1Count = (html.match(/<h1\b/gi) || []).length;
if (h1Count !== 1) {
  failures.push(`Expected exactly one h1, found ${h1Count}.`);
}

const jsonLdMatch = html.match(
  /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/i
);

if (!jsonLdMatch) {
  failures.push("Missing parseable LocalBusiness structured data.");
} else {
  try {
    const localBusiness = JSON.parse(jsonLdMatch[1]);
    if (localBusiness["@type"] !== "LocalBusiness") {
      failures.push('Structured data must use "@type": "LocalBusiness".');
    }
    if (localBusiness.telephone !== approvedPhoneSchema) {
      failures.push(`Structured data telephone must be ${approvedPhoneSchema}.`);
    }
    if (localBusiness.areaServed?.name !== "Lethbridge") {
      failures.push("Structured data service area must be Lethbridge.");
    }
    if (!localBusiness.sameAs?.includes(approvedFacebookUrl)) {
      failures.push("Structured data must include the approved Facebook URL.");
    }
    if ("email" in localBusiness) {
      failures.push("Structured data contains an unapproved email address.");
    }
  } catch (error) {
    failures.push(`Invalid LocalBusiness structured data: ${error.message}`);
  }
}

const relativeAssetPattern = /(?:src|href)="(assets\/[^"#?]+)"/g;
for (const match of html.matchAll(relativeAssetPattern)) {
  const assetPath = path.resolve(root, match[1]);
  if (!assetPath.startsWith(`${root}${path.sep}`) || !fs.existsSync(assetPath)) {
    failures.push(`Broken or unsafe asset path: ${match[1]}`);
  }
}

if (/fonts\.(?:googleapis|gstatic)\.com|googletagmanager|analytics\.js/i.test(html)) {
  failures.push("Unapproved remote font or tracking dependency found.");
}

const unapprovedContent = [
  ["email address", "tammie1964@yahoo.ca"],
  ["testimonial attribution", "Carol Heggie"]
];

for (const [label, snippet] of unapprovedContent) {
  if (html.includes(snippet)) {
    failures.push(`Unapproved ${label} found: ${snippet}`);
  }
}

if (failures.length > 0) {
  console.error("Site checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Site checks passed (${checks.length + 4} checks).`);
