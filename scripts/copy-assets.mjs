/**
 * Copies the site's static assets into dist/ after a build.
 *
 * They deliberately live at the project root rather than in public/, because the
 * site is previewed with VS Code Live Server, which serves the project folder as
 * the web root and knows nothing about Vite's public/ convention. Keeping them at
 * the root is what makes "images/..." resolve identically in Live Server, in
 * `vite dev` and in the built output.
 */
import { cpSync, existsSync } from "node:fs";
import { relative, resolve } from "node:path";

const ASSETS = ["images", "fonts", "favicon.ico", "favicon.png", "apple-touch-icon.png"];

// These files are source material for the image generators, or superseded
// thumbnails kept for future editing. The live site has no references to them,
// so copying them would add almost 3 MB to every deployment for no user benefit.
const BUILD_ONLY_IMAGES = new Set([
  "images/fff.jpg",
  "images/hero-home-sharp.png",
  "images/hero-section1.jpg",
  "images/hero-section2.jpg",
  "images/hero-section-4.jpg",
]);

function includeInBuild(source) {
  const path = relative(process.cwd(), resolve(source)).replaceAll("\\", "/");
  return !BUILD_ONLY_IMAGES.has(path);
}

for (const name of ASSETS) {
  if (!existsSync(name)) {
    console.warn(`copy-assets: skipped ${name}, not found`);
    continue;
  }
  cpSync(name, `dist/${name}`, { recursive: true, filter: includeInBuild });
  console.log(`copy-assets: ${name}`);
}
