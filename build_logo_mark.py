"""Extracts the bridge icon from Logo.png and installs it everywhere the brand mark
appears: the header lockup, the footer lockup, and the favicon / apple-touch-icon.
Re-runnable -- it rewrites its own output rather than appending.

Logo.png is a 1024x1024 composite: the icon occupies x 296-727, y 256-519 with a
cream #F8F6E9 background baked in and a serif wordmark below it. The icon is traced
at full resolution as a hard binary mask (which discards the source's compression
noise -- the thing that was making the exported PNG large), downsampled with LANCZOS
so the edge anti-aliasing is generated clean, and tinted to the design system's
`primary` with the cream as real transparency.

The mark is defined ONCE, as the background-image of .logo__mark, so the header and
footer share a single copy of the blob and can never drift apart.
"""
import base64, re
from io import BytesIO
import numpy as np
from PIL import Image

PAD = 2          # px of breathing room around the traced bounding box
TARGET_H = 200   # ~4x the 48px desktop render
INK = 131        # luminance midpoint between the cream ground and the green ink

PRIMARY = (0x17, 0x3B, 0x2F)   # design system: primary
SURFACE = (0xF5, 0xF5, 0xF0)   # design system: surface


def png_b64(im):
    buf = BytesIO()
    im.save(buf, format="PNG", optimize=True)
    return base64.b64encode(buf.getvalue()).decode()


# ---- trace the icon out of the composite --------------------------------------
lum = np.array(Image.open("Logo.png").convert("RGB")).astype(np.float32).mean(axis=2)
ys, xs = np.where(lum[:545] < 140)            # dark pixels above the wordmark
box = (xs.min() - PAD, ys.min() - PAD, xs.max() + 1 + PAD, ys.max() + 1 + PAD)
mask = (lum[box[1]:box[3], box[0]:box[2]] < INK).astype(np.uint8) * 255

h, w = mask.shape
alpha = Image.fromarray(mask, "L").resize((round(w * TARGET_H / h), TARGET_H), Image.LANCZOS)
rgba = np.zeros((alpha.size[1], alpha.size[0], 4), dtype=np.uint8)
rgba[..., 0], rgba[..., 1], rgba[..., 2] = PRIMARY
rgba[..., 3] = np.array(alpha)
mark = Image.fromarray(rgba, "RGBA")
mark.save("logo-mark.png", optimize=True)
MW, MH = mark.size

# ---- favicon / touch icon: same mark, on surface so it holds up on dark chrome --
def icon(size, pad_frac=0.08):
    pad = round(size * pad_frac)
    iw = size - 2 * pad
    ih = round(iw * MH / MW)
    im = Image.new("RGBA", (size, size), (*SURFACE, 255))
    im.alpha_composite(mark.resize((iw, ih), Image.LANCZOS), (pad, (size - ih) // 2))
    return im


mark_uri = f"data:image/png;base64,{png_b64(mark)}"
html = open("index.html", encoding="utf-8").read()
css_src = open("_build/input.css", encoding="utf-8").read()

# ---- 1. the mark, defined once in CSS -----------------------------------------
mark_rule = (f".logo__mark{{height:40px;aspect-ratio:{MW}/{MH};flex-shrink:0;"
             f"background:url({mark_uri}) center/contain no-repeat}}")
old_rule = re.compile(r"\.logo__mark\{(?!height:48px)[^}]*\}")
html, n1 = old_rule.subn(lambda m: mark_rule, html, count=1)
css_src, n2 = old_rule.subn(lambda m: mark_rule, css_src, count=1)
assert n1 == n2 == 1, "logo__mark rule not found"

# ---- 2. off-palette green -> design system on-surface-variant ------------------
html = html.replace("color:#4A6154", "color:#4A5058")
css_src = css_src.replace("color:#4A6154", "color:#4A5058")

LOCKUP = ('<span class="logo__mark" aria-hidden="true"></span>\n'
          '        <span class="logo__text">\n'
          '          <span class="logo__name">HopeBridge</span>\n'
          '          <span class="logo__sub">Foundation</span>\n'
          '        </span>')

# ---- 3. header ----------------------------------------------------------------
header = re.search(r'<a href="#/" data-link class="logo group shrink-0"[^>]*>.*?</a>', html, re.S)
html = html.replace(header.group(0),
    '<a href="#/" data-link class="logo group shrink-0" aria-label="HopeBridge Foundation, home">\n'
    f'        {LOCKUP}\n      </a>', 1)

# ---- 4. footer: was a blue/gold arch on a solid square, from an older palette ---
footer = re.search(r'<div class="(?:flex items-center gap-3|logo) mb-5">.*?</div>', html, re.S)
html = html.replace(footer.group(0),
    f'<div class="logo mb-5">\n        {LOCKUP}\n      </div>', 1)

# ---- 5. favicon + touch icon: was a navy #12233F square from the older palette --
icons = (f'<link rel="icon" type="image/png" sizes="64x64" href="data:image/png;base64,{png_b64(icon(64))}"/>\n'
         f'<link rel="apple-touch-icon" sizes="180x180" href="data:image/png;base64,{png_b64(icon(180, 0.10))}"/>')
html = re.sub(r'<link rel="icon"[^>]*/>(?:\n<link rel="apple-touch-icon"[^>]*/>)?', icons, html, count=1)

open("index.html", "w", encoding="utf-8").write(html)
open("_build/input.css", "w", encoding="utf-8").write(css_src)
print(f"mark {MW}x{MH} ({len(mark_uri)/1024:.1f} KB uri) -> header, footer, favicon, touch icon")
