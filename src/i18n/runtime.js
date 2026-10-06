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

/* The three dictionaries are about 80 KB each, more than half the site's
   JavaScript, and an English visitor never uses any of them. So each is its own
   file, fetched the first time someone picks that language and kept after that. */
const LOADERS = {
  es: () => import("./es.js"),
  fr: () => import("./fr.js"),
  it: () => import("./it.js")
};
const DICTS = {};

function loadDict(code) {
  if (DICTS[code]) return Promise.resolve(DICTS[code]);
  return LOADERS[code]().then((mod) => (DICTS[code] = mod.default));
}

/* The language a visitor has picked while its dictionary is still downloading. */
let wanted = null;

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
  /* The dictionaries are keyed on the sentence with its internal whitespace
     collapsed, because that is how the sentence reads on screen. A text node
     does not necessarily hold it that way: the header and footer live in
     index.html, where the formatter wraps long sentences across lines, so the
     node carries a newline and an indent in the middle. Match on the collapsed
     form as well, or every wrapped sentence silently stays in English. */
  const hit = d[key] || d[key.replace(/\s+/g, " ")];
  if (!hit) return null;
  const lead = raw.slice(0, raw.length - raw.trimStart().length);
  const tail = raw.slice(raw.trimEnd().length);
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

/* The router sets document.title per route, and that is not a node we can walk,
   so it is handled on every pass.

   Two traps here, both of which have bitten. Assigning document.title replaces
   the text node inside <title>, which is a childList mutation - so an observer
   that watches the whole document and unconditionally assigns the title on each
   pass will re-trigger itself forever and hang the page. Hence the assignment
   only happens when the value actually changes, and the observer below watches
   document.body rather than documentElement.

   And the title has to be re-read whenever the router changes it, rather than
   cached once, or every route after the first would show the home page's title. */
let titleEn = null;
let titleOut = null;

function syncTitle() {
  const shown = document.title;
  /* Anything we did not write ourselves is the router setting a new English
     title for this route. */
  if (shown !== titleOut) titleEn = shown;
  if (titleEn === null) return;
  const hit = translate(titleEn);
  const next = hit === null ? titleEn : hit;
  if (shown !== next) document.title = next;
  titleOut = next;
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
  if (titleEn !== null) {
    document.title = titleEn;
    titleOut = titleEn;
  }
}

export function getLang() {
  return current;
}

export function setLang(code) {
  if (!LANGS.some((l) => l.code === code)) return;
  if (code !== "en" && !DICTS[code]) {
    wanted = code;
    loadDict(code).then(
      () => { if (wanted === code) setLang(code); },
      () => {
        /* Offline or blocked: stay on the current language and say so in the
           switcher, rather than leaving it showing a language we could not load. */
        if (wanted !== code) return;
        wanted = null;
        for (const sel of document.querySelectorAll("[data-lang-select]")) sel.value = current;
      });
    return;
  }
  wanted = null;
  if (code === current) return;
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
  /* English is the default for every visitor, whatever their browser's language;
     the site only changes language when someone picks one from the switcher, and
     that choice is remembered above. The chat widget is English too (see the
     Tawk.to block in index.html). */
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
  }).observe(document.body, { childList: true, subtree: true });

  for (const sel of document.querySelectorAll("[data-lang-select]")) {
    sel.addEventListener("change", (e) => setLang(e.target.value));
  }

  if (want !== "en") setLang(want);
  else document.documentElement.lang = "en";
}
