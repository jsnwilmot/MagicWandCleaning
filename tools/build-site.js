"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");

if (!output.startsWith(`${root}${path.sep}`)) {
  throw new Error("Build output resolved outside the project root.");
}

execFileSync(process.execPath, [path.join(__dirname, "check-site.js")], {
  cwd: root,
  stdio: "inherit"
});

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
const staticFiles = [
  "index.html",
  "services.html",
  "about.html",
  "work.html",
  "faq.html",
  "contact.html",
  "privacy.html",
  "robots.txt",
  "sitemap.xml"
];

for (const file of staticFiles) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
fs.cpSync(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });

console.log("Static build completed in dist/.");
