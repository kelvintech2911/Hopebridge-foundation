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

const ASSETS = ["images", "favicon.ico", "favicon.png", "apple-touch-icon.png"];

for (const name of ASSETS) {
  if (!existsSync(name)) {
    console.warn(`copy-assets: skipped ${name}, not found`);
    continue;
  }
  cpSync(name, `dist/${name}`, { recursive: true });
  console.log(`copy-assets: ${name}`);
}
