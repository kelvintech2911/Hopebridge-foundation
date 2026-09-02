/**
 * Rebuilds the <style> block inside ../index.html.
 *
 *   cd _build && npm install && node build.mjs
 *
 * Run this whenever you add a Tailwind class that is not already used somewhere in
 * index.html. Editing existing classes, or hand-editing CSS in the <style> block,
 * needs no rebuild -- but note that hand edits are recovered into input.css only if
 * you copy them across, so prefer editing input.css and rebuilding.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const HTML = "../index.html";

/* @tailwindcss/forms hardcodes its own blues and greys for focus rings, borders,
   placeholders and the select arrow. They are not theme colours, so every rebuild
   reintroduces them and every rebuild has to map them back onto the palette. */
const FORMS = {
  "#2563eb": "#173B2F",
  "#3b82f6": "#173B2F",
  "#6b7280": "#666B73",
  "#9ca3af": "#9A9EA6",
  "#e5e7eb": "#E0DCD3",
};

const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

/** Whitespace-only minifier. Deliberately does not touch spaces around ':' so a
 *  descendant combinator before a pseudo-class cannot be destroyed. */
function minify(src) {
  const out = [];
  for (let i = 0; i < src.length; ) {
    const c = src[i];
    if (c === '"' || c === "'") {                 // copy strings verbatim (data: URIs)
      let j = i + 1;
      while (j < src.length && (src[j] !== c || src[j - 1] === "\\")) j++;
      out.push(src.slice(i, j + 1)); i = j + 1; continue;
    }
    if (src.startsWith("/*", i)) { i = src.indexOf("*/", i) + 2; continue; }
    if (" \t\r\n".includes(c)) {
      let j = i; while (j < src.length && " \t\r\n".includes(src[j])) j++;
      out.push(" "); i = j; continue;
    }
    out.push(c); i++;
  }
  let s = out.join("");
  for (const ch of "{};,") s = s.split(" " + ch).join(ch).split(ch + " ").join(ch);
  return s.split(";}").join("}").trim();
}

execFileSync("npx", ["tailwindcss", "-c", "tailwind.config.js", "-i", "input.css", "-o", "out.css"],
             { stdio: "inherit", shell: true });

let css = readFileSync("out.css", "utf8");
let swapped = 0;
for (const [src, dst] of Object.entries(FORMS)) {
  const before = css;
  css = css.replaceAll(src, dst).replaceAll(src.toUpperCase(), dst);
  // the select arrow carries its colour percent-encoded inside a data: URI
  css = css.replaceAll("%23" + src.slice(1), "%23" + dst.slice(1));
  const [r, g, b] = hexToRgb(src), [R, G, B] = hexToRgb(dst);
  css = css.replaceAll(`rgb(${r} ${g} ${b}`, `rgb(${R} ${G} ${B}`);
  if (css !== before) swapped++;
}

const mini = minify(css);

// Guardrails: a mangled stylesheet is worse than a failed build.
const count = (s, ch) => s.split(ch).length - 1;
// Compare against a comment-free copy, since minify strips comments and those
// legitimately contain braces and parens.
const bare = css.replace(/\/\*[\s\S]*?\*\//g, "");
for (const ch of ["{", "}", "(", ")"]) {
  if (count(bare, ch) !== count(mini, ch)) throw new Error(`minify changed '${ch}' count`);
}
for (const uri of css.match(/url\("data:[^"]+"\)/g) ?? []) {
  if (!mini.includes(uri)) throw new Error("minify mangled a data: URI");
}
for (const frag of ["env(safe-area-inset-bottom,0px)", "max(20px,env(safe-area-inset-left,0px))"]) {
  if (!mini.includes(frag)) throw new Error("lost safe-area rule: " + frag);
}
const strays = mini.match(/#(?:2563eb|3b82f6|6b7280|9ca3af|e5e7eb)/gi);
if (strays) throw new Error("unmapped forms colours: " + [...new Set(strays)].join(", "));

const html = readFileSync(HTML, "utf8");
const m = html.match(/<style>[\s\S]*?<\/style>/);
if (!m) throw new Error("no <style> block found in " + HTML);
writeFileSync(HTML, html.replace(m[0], "<style>" + mini + "</style>"));

console.log(`ok  ${count(mini, "{")} rules, ${mini.length.toLocaleString()} bytes inlined ` +
            `(${swapped} forms colour groups remapped)`);
