"use strict";

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const pageFiles = [
  "index.html",
  "services.html",
  "about.html",
  "work.html",
  "faq.html",
  "clean-start-gift.html",
  "contact.html",
  "privacy.html"
];
const primaryNavLinks = [
  "index.html",
  "services.html",
  "about.html",
  "work.html",
  "faq.html",
  "clean-start-gift.html",
  "contact.html"
];
const approvedPhoneDisplay = "+1 587-377-0572";
const approvedPhoneSchema = "+1-587-377-0572";
const approvedFacebookUrl = "https://www.facebook.com/profile.php?id=100092217970885";
const approvedServiceArea = "Lethbridge, AB, Canada";
const creatorUrl = "https://design.roseandpaw.ca/";
const failures = [];
const titles = new Map();
const descriptions = new Map();

const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const addFailure = (file, message) => failures.push(`${file}: ${message}`);
const getAttribute = (html, pattern) => html.match(pattern)?.[1]?.trim();

for (const file of [...pageFiles, "robots.txt", "sitemap.xml"]) {
  if (!fs.existsSync(path.join(root, file))) {
    failures.push(`Missing required file: ${file}`);
  }
}

for (const file of pageFiles) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) {
    continue;
  }

  const html = read(file);
  const title = getAttribute(html, /<title>([^<]+)<\/title>/i);
  const description = getAttribute(
    html,
    /<meta\s+name="description"\s+content="([^"]+)"/i
  );

  if (!title) {
    addFailure(file, "missing page title.");
  } else if (titles.has(title)) {
    addFailure(file, `page title duplicates ${titles.get(title)}.`);
  } else {
    titles.set(title, file);
  }

  if (!description) {
    addFailure(file, "missing meta description.");
  } else if (descriptions.has(description)) {
    addFailure(file, `meta description duplicates ${descriptions.get(description)}.`);
  } else {
    descriptions.set(description, file);
  }

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) {
    addFailure(file, `expected exactly one h1, found ${h1Count}.`);
  }

  for (const landmark of ["header", "nav", "main", "footer"]) {
    if (!new RegExp(`<${landmark}\\b`, "i").test(html)) {
      addFailure(file, `missing semantic ${landmark} landmark.`);
    }
  }

  const requiredMetadata = [
    [/<link\s+rel="canonical"\s+href="[^"]+"/i, "canonical URL"],
    [/<meta\s+property="og:title"\s+content="[^"]+"/i, "Open Graph title"],
    [/<meta\s+property="og:description"\s+content="[^"]+"/i, "Open Graph description"],
    [/<meta\s+property="og:type"\s+content="website"/i, "Open Graph type"],
    [/<meta\s+property="og:image"\s+content="[^"]+"/i, "Open Graph image"],
    [/<meta\s+name="twitter:card"\s+content="[^"]+"/i, "Twitter card"],
    [/<meta\s+name="twitter:title"\s+content="[^"]+"/i, "Twitter title"],
    [/<meta\s+name="twitter:description"\s+content="[^"]+"/i, "Twitter description"],
    [/<meta\s+name="twitter:image"\s+content="[^"]+"/i, "Twitter image"]
  ];

  for (const [pattern, label] of requiredMetadata) {
    if (!pattern.test(html)) {
      addFailure(file, `missing ${label}.`);
    }
  }

  for (const snippet of [
    approvedPhoneDisplay,
    approvedFacebookUrl,
    approvedServiceArea,
    "[MISSING_BUSINESS_EMAIL]",
    creatorUrl,
    "Website created by Rose &amp; Paw Digital Designs"
  ]) {
    if (!html.includes(snippet)) {
      addFailure(file, `missing approved shared content: ${snippet}`);
    }
  }

  const primaryNav = html.match(
    /<nav\s+class="site-nav"[\s\S]*?<\/nav>/i
  )?.[0];
  if (!primaryNav) {
    addFailure(file, "missing primary navigation.");
  } else {
    for (const link of primaryNavLinks) {
      if (!primaryNav.includes(`href="${link}"`)) {
        addFailure(file, `primary navigation is missing ${link}.`);
      }
    }

    const activeLinks = [...primaryNav.matchAll(
      /<a\s+href="([^"]+)"\s+aria-current="page"/gi
    )].map((match) => match[1]);
    const expectedActive = primaryNavLinks.includes(file) ? file : null;
    if (expectedActive && (activeLinks.length !== 1 || activeLinks[0] !== expectedActive)) {
      addFailure(file, `primary active state must point to ${expectedActive}.`);
    }
    if (!expectedActive && activeLinks.length > 0) {
      addFailure(file, "primary navigation has an unexpected active state.");
    }
  }

  const relativeAssetPattern = /(?:src|href)="(assets\/[^"#?]+)"/g;
  for (const match of html.matchAll(relativeAssetPattern)) {
    const assetPath = path.resolve(root, match[1]);
    if (!assetPath.startsWith(`${root}${path.sep}`) || !fs.existsSync(assetPath)) {
      addFailure(file, `broken or unsafe asset path: ${match[1]}`);
    }
  }

  const localPagePattern = /href="([^"]+\.html)(?:#[^"]*)?"/g;
  for (const match of html.matchAll(localPagePattern)) {
    if (match[1].startsWith("[MISSING: domain]")) {
      continue;
    }
    if (!fs.existsSync(path.join(root, match[1]))) {
      addFailure(file, `broken local page link: ${match[1]}`);
    }
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    addFailure(file, `duplicate id values: ${[...new Set(duplicateIds)].join(", ")}`);
  }

  if (/fonts\.(?:googleapis|gstatic)\.com|googletagmanager|analytics\.js/i.test(html)) {
    addFailure(file, "contains an unapproved remote font or tracking dependency.");
  }

  for (const unapproved of ["tammie1964@yahoo.ca", "Carol Heggie"]) {
    if (html.includes(unapproved)) {
      addFailure(file, `contains unapproved content: ${unapproved}`);
    }
  }
}

if (fs.existsSync(path.join(root, "index.html"))) {
  const indexHtml = read("index.html");
  const approvedWorkImages = [
    "assets/images/work/before-after-1.png",
    "assets/images/work/before-after-2.png",
    "assets/images/work/before-after-3.png"
  ];

  for (const imagePath of approvedWorkImages) {
    const escapedImagePath = imagePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const imageTag = indexHtml.match(
      new RegExp(`<img\\s+[^>]*src="${escapedImagePath}"[^>]*>`, "i")
    )?.[0];
    const hasRequiredMarkup = imageTag
      && /alt="[^"]+"/i.test(imageTag)
      && /\sloading="lazy"/i.test(imageTag)
      && /\swidth="1672"/i.test(imageTag)
      && /\sheight="941"/i.test(imageTag);
    if (!hasRequiredMarkup) {
      addFailure("index.html", `approved work image is missing accessible lazy-loaded markup: ${imagePath}`);
    }
  }

  if (indexHtml.includes("[MISSING: approved before-and-after photos]")) {
    addFailure("index.html", "approved before-and-after missing marker is still visible.");
  }

  for (const testimonialSnippet of [
    "Facebook recommendation.",
    "Tammie is fantastic! Always very thorough! And is very knowledgeable about cleaning.",
    "Carol H."
  ]) {
    if (!indexHtml.includes(testimonialSnippet)) {
      addFailure("index.html", `missing approved testimonial content: ${testimonialSnippet}`);
    }
  }

  if (indexHtml.includes("[MISSING: client-approved testimonials or Facebook reviews]")) {
    addFailure("index.html", "approved testimonial missing marker is still visible.");
  }

  for (const serviceAreaSnippet of [
    "assets/trestle.png",
    "Proudly serving homes in Lethbridge",
    "Magic Wand Cleaning serves homes in Lethbridge, Alberta.",
    "For move-out cleaning, surrounding areas may be considered depending on location, timing, and job size.",
    "Lethbridge train trestle illustration for Magic Wand Cleaning service area",
  ]) {
    if (!indexHtml.includes(serviceAreaSnippet)) {
      addFailure("index.html", `missing Service Area content: ${serviceAreaSnippet}`);
    }
  }

  const localBusinessMatch = indexHtml.match(
    /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/i
  );

  if (!localBusinessMatch) {
    addFailure("index.html", "missing LocalBusiness structured data.");
  } else {
    try {
      const localBusiness = JSON.parse(localBusinessMatch[1]);
      if (localBusiness["@type"] !== "LocalBusiness") {
        addFailure("index.html", 'structured data must use "@type": "LocalBusiness".');
      }
      if (localBusiness.telephone !== approvedPhoneSchema) {
        addFailure("index.html", `structured data telephone must be ${approvedPhoneSchema}.`);
      }
      if (!localBusiness.sameAs?.includes(approvedFacebookUrl)) {
        addFailure("index.html", "structured data must include the approved Facebook URL.");
      }
      if ("email" in localBusiness || "aggregateRating" in localBusiness) {
        addFailure("index.html", "structured data contains unapproved contact or rating data.");
      }
    } catch (error) {
      addFailure("index.html", `invalid LocalBusiness structured data: ${error.message}`);
    }
  }
}

if (fs.existsSync(path.join(root, "clean-start-gift.html"))) {
  const givingBackHtml = read("clean-start-gift.html");

  for (const snippet of [
    "https://api.web3forms.com/submit",
    "name=\"access_key\"",
    "[MISSING_WEB3FORMS_ACCESS_KEY]",
    "Magic Wand Cleaning, Clean Start Gift Nomination",
    "name=\"from_name\"",
    "name=\"botcheck\"",
    "Submitting a nomination does not guarantee selection."
  ]) {
    if (!givingBackHtml.includes(snippet)) {
      addFailure("clean-start-gift.html", `missing required Giving Back form/content snippet: ${snippet}`);
    }
  }
}

if (fs.existsSync(path.join(root, "faq.html"))) {
  const faqHtml = read("faq.html");
  const scripts = [...faqHtml.matchAll(
    /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/gi
  )];
  const faqData = scripts
    .map((match) => {
      try {
        return JSON.parse(match[1]);
      } catch {
        return null;
      }
    })
    .find((data) => data?.["@type"] === "FAQPage");

  if (!faqData || !Array.isArray(faqData.mainEntity) || faqData.mainEntity.length < 1) {
    addFailure("faq.html", "missing valid FAQPage structured data.");
  }
}

if (fs.existsSync(path.join(root, "robots.txt"))) {
  const robots = read("robots.txt");
  if (!robots.includes("Sitemap: [MISSING: domain]/sitemap.xml")) {
    addFailure("robots.txt", "missing sitemap marker URL.");
  }
}

if (fs.existsSync(path.join(root, "sitemap.xml"))) {
  const sitemap = read("sitemap.xml");
  for (const file of pageFiles) {
    if (!sitemap.includes(`[MISSING: domain]/${file}`)) {
      addFailure("sitemap.xml", `missing ${file}.`);
    }
  }
}

if (failures.length > 0) {
  console.error("Site checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Site checks passed for ${pageFiles.length} pages.`);
