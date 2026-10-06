# Self-hosted fonts

These files used to load from Google Fonts. Serving them from the site's own
domain removes two cross-origin round trips that held up the first paint. The
`@font-face` rules are at the end of `src/style.css`, and `index.html` preloads
`figtree-latin.woff2` and `material-symbols-outlined.woff2`.

| File | What it is |
| --- | --- |
| `figtree-latin.woff2` | Figtree, weights 400–800, Latin. Covers English, Spanish, French and Italian. |
| `figtree-latin-ext.woff2` | Figtree, Latin Extended. Only downloaded if a page uses one of its characters. |
| `material-symbols-outlined.woff2` | Material Symbols Outlined, **only the icons listed below**. |

## Adding an icon

The icon font is a subset, so an icon that isn't in it shows up as its name in
plain text (for example "arrow_back"). To add one:

1. Add the icon name to this list, keeping it in alphabetical order:

   ```
   add,arrow_forward,arrow_upward,calendar_month,call,campaign,check_small,close,diversity_1,diversity_3,donut_small,ecg_heart,edit_calendar,fact_check,groups,handshake,handyman,hearing,history_toggle_off,home,info,insights,location_on,mail,map,mark_email_read,menu,menu_book,payments,public,receipt_long,school,verified_user,volunteer_activism,water_drop
   ```

2. Open this URL in a browser, with your updated list after `icon_names=`:

   ```
   https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300..400,0..1,0&display=block&icon_names=PASTE_LIST_HERE
   ```

3. Download the `.woff2` link from the `src: url(...)` line it returns, and save
   it over `material-symbols-outlined.woff2`.
