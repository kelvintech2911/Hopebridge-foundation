# Stylesheet build

`index.html` ships a **compiled** `<style>` block, not the Tailwind runtime CDN.
A Tailwind class that is not already used somewhere in `index.html` will not work
until you rebuild.

## Rebuild

    cd _build
    npm install        # first time only
    node build.mjs     # compiles, fixes plugin colours, minifies, inlines into ../index.html

`build.mjs` refuses to write if the minifier mangles anything, so a failed build
leaves `index.html` untouched.

## Files

- `tailwind.config.js` — the theme: palette, type scale, spacing. Keep the palette
  here in step with the page; if you hand-edit colours in `index.html`, mirror the
  change here or the next rebuild will revert it.
- `input.css` — the hand-written CSS. Layer placement is deliberate:
  `@layer components` for rules a utility should still be able to override, and
  plain rules after `@tailwind utilities` for rules that must win (`.wordmark`,
  `.footer-link`, the safe-area rules).
- `build.mjs` — the pipeline, including the `@tailwindcss/forms` colour fix below.

## Why build.mjs exists

`@tailwindcss/forms` hardcodes its own blues and greys for focus rings, borders,
placeholders and the select arrow — including one percent-encoded inside a `data:`
URI. They are not theme colours, so every rebuild reintroduces them. `build.mjs`
maps them back onto the palette and fails the build if any survive.

## Responsive rules worth knowing

- Real navigation appears at **768px**; the phone tab bar is hidden from there up.
- `.footer-link` guarantees a 44px row; `.footer-link--inline` keeps the legal row
  from filling its line.
- Safe-area rules need `viewport-fit=cover` on the viewport meta — don't remove it.
- The hero uses `svh`, not `vh`, so iOS Safari's collapsing address bar doesn't push
  the buttons below the fold.
