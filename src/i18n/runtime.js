/* ============================================================================
   MULTILINGUAL SUPPORT
   ----------------------------------------------------------------------------
   The site's copy lives inside render functions that build HTML strings, and
   there are a few hundred of them. Threading a t() call through every one would
   have meant touching almost every line of main.js, which is the file a full
   day of approved design work already lives in.

   So the translation happens to the rendered DOM instead. Every dictionary is
   keyed by the exact English sentence as it appears on the page; after anything
   renders, the text nodes underneath it are looked up and swapped. The app
   re-renders its whole body on each route change, so a MutationObserver keeps
   up with it - the same approach the single-file build uses for images, which
   is already proven in a browser.

   Two consequences worth knowing. A string only translates if it is in the
   dictionary character for character, so a copy edit in main.js silently falls
   back to English rather than breaking. And because the original English is
   kept on each node, switching language is instant and does not reload.
   ========================================================================== */

import es from "./es.js";
import fr from "./fr.js";
import it from "./it.js";

const DICTS = { es, fr, it };

export const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" }
];

const STORE_KEY = "hb-lang";
const ATTRS = ["placeholder", "aria-label", "alt", "title"];

/* Material Symbols renders its icons from ligature text - the word "menu" inside
   the span *is* the icon. Translating that turns the icon into the literal word,
   so those subtrees are left alone, along with anything opted out by hand. */
const SKIP_SELECTOR = ".material-symbols-outlined, [data-no-i18n], script, style, textarea";

let current = "en";

/* Nodes we have rewritten, so a second language change can start from the
   English again rather than trying to translate a translation. */
const touchedText = new Set();
const touchedAttr = new Set();

function dict() {
  return DICTS[current] || null;
}

/* Look a string up while preserving whatever whitespace surrounded it: the
   dictionary is keyed on the trimmed sentence, but the DOM node may carry
   indentation that matters to inline layout. */
function translate(raw) {
  const d = dict();
  if (!d) return null;
  const key = raw.trim();
  if (key.length < 2) return null;
  const hit = d[key];
  if (!hit) return null;
  const lead = raw.slice(0, raw.indexOf(key[0]));
  const tail = raw.slice(lead.length + key.length);
  return lead + hit + tail;
}

function skipped(el) {
  return !el || (el.closest && el.closest(SKIP_SELECTOR));
}

function sweepText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || node.nodeValue.trim().length < 2) return NodeFilter.FILTER_REJECT;
      if (skipped(node.parentElement)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  /* Collect first, write after: rewriting during the walk would have the walker
     stepping over nodes it has already been handed. */
  const jobs = [];
  let node;
  while ((node = walker.nextNode())) {
    const en = node.__hbEn !== undefined ? node.__hbEn : node.nodeValue;
    const out = translate(en);
    if (out !== null && out !== node.nodeValue) jobs.push([node, en, out]);
  }
  for (const [n, en, out] of jobs) {
    if (n.__hbEn === undefined) n.__hbEn = en;
    touchedText.add(n);
    n.nodeValue = out;
  }
}

function sweepAttrs(root) {
  if (!root.querySelectorAll) return;
  const scope = root.matches && root.matches("[" + ATTRS.join("],[") + "]") ? [root] : [];
  const els = scope.concat(Array.from(root.querySelectorAll("[" + ATTRS.join("],[") + "]")));
  for (const el of els) {
    if (skipped(el)) continue;
    for (const attr of ATTRS) {
      if (!el.hasAttribute(attr)) continue;
      const store = "__hbEn_" + attr;
      const en = el[store] !== undefined ? el[store] : el.getAttribute(attr);
      const out = translate(en);
      if (out === null || out === el.getAttribute(attr)) continue;
      if (el[store] === undefined) el[store] = en;
      touchedAttr.add(el);
      el.setAttribute(attr, out);
    }
  }
}

/* The router sets document.title per route, and that is not a DOM node we can
   walk, so it is handled on every pass. */
function syncTitle() {
  if (document.__hbEnTitle === undefined) document.__hbEnTitle = document.title;
  const out = translate(document.__hbEnTitle);
  document.title = out === null ? document.__hbEnTitle : out;
}

function apply(root) {
  if (current === "en") return;
  sweepText(root);
  sweepAttrs(root);
}

/* Put every node we have touched back to its English before switching, so the
   next language is looked up against the original and not against Spanish. */
function restore() {
  for (const n of touchedText) {
    if (n.__hbEn !== undefined) n.nodeValue = n.__hbEn;
  }
  touchedText.clear();
  for (const el of touchedAttr) {
    for (const attr of ATTRS) {
      const store = "__hbEn_" + attr;
      if (el[store] !== undefined) el.setAttribute(attr, el[store]);
    }
  }
  touchedAttr.clear();
  if (document.__hbEnTitle !== undefined) document.title = document.__hbEnTitle;
}

export function getLang() {
  return current;
}

export function setLang(code) {
  if (!LANGS.some((l) => l.code === code) || code === current) return;
  restore();
  current = code;
  try { localStorage.setItem(STORE_KEY, code); } catch (e) { /* private mode */ }
  document.documentElement.lang = code;
  apply(document.body);
  syncTitle();
  for (const sel of document.querySelectorAll("[data-lang-select]")) sel.value = code;
  document.dispatchEvent(new CustomEvent("hb:langchange", { detail: { lang: code } }));
}

function preferred() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && LANGS.some((l) => l.code === saved)) return saved;
  } catch (e) { /* private mode */ }
  /* The client's reason for wanting this is visitors arriving from outside the
     US, so honour the browser's own language before falling back to English. */
  for (const tag of navigator.languages || [navigator.language || ""]) {
    const base = String(tag).slice(0, 2).toLowerCase();
    if (DICTS[base]) return base;
  }
  return "en";
}

export function initI18n() {
  current = "en";
  const want = preferred();

  new MutationObserver((records) => {
    if (current === "en") return;
    for (const rec of records) {
      for (const node of rec.addedNodes) {
        if (node.nodeType === 1) apply(node);
        else if (node.nodeType === 3 && !skipped(node.parentElement)) {
          const out = translate(node.nodeValue);
          if (out !== null && out !== node.nodeValue) {
            if (node.__hbEn === undefined) node.__hbEn = node.nodeValue;
            touchedText.add(node);
            node.nodeValue = out;
          }
        }
      }
    }
    syncTitle();
  }).observe(document.documentElement, { childList: true, subtree: true });

  for (const sel of document.querySelectorAll("[data-lang-select]")) {
    sel.addEventListener("change", (e) => setLang(e.target.value));
  }

  if (want !== "en") setLang(want);
  else document.documentElement.lang = "en";
}
