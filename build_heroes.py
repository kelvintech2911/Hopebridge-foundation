# -*- coding: utf-8 -*-
"""Generate responsive, modern-format derivatives of the four hero photographs.

Writes images/hero/hero-<slot>-<width>.{avif,webp,jpg}. Never upscales: a source
narrower than a target width simply does not get that width, so the srcset never
promises detail the original does not have.
"""
import os, io
from PIL import Image

SRC = {
    "home":   "images/FFF.jpg",               # children in a circle, shot from below
    "work":   "images/hero section 3.jpg",   # food drive, packing totes
    # hero section1/2 were 360px and 426px thumbnails - far too small for a
    # full-bleed hero, so these two slots use the largest images in the project.
    "impact": "images/Second Chair Digital Hubs.jpg",
    "about":  "images/Community Wellbeing.jpg",
}
# 1536 covers a full-bleed hero on a 1080p desktop; past that the scrim and the
# viewing distance hide the difference and the bytes stop earning their place.
WIDTHS = [640, 1024, 1536]
OUT = "images/hero"
os.makedirs(OUT, exist_ok=True)

manifest = {}
total = 0
for slot, src in SRC.items():
    im = Image.open(src).convert("RGB")
    targets = [w for w in WIDTHS if w <= im.width]
    if not targets:
        # source narrower than the smallest step: all it can offer is itself
        targets = [im.width]
    elif im.width < max(WIDTHS) and im.width not in targets:
        # source sits between two steps: offer its own width rather than round down
        targets.append(im.width)
    targets.sort()
    rows = []
    for w in targets:
        h = round(im.height * w / im.width)
        rs = im.resize((w, h), Image.Resampling.LANCZOS)
        # Bigger renditions are shown at higher pixel density, where compression
        # artefacts are far less visible - so quality ramps down as width goes up.
        big = w > 1024
        made = {}
        for ext, kw in (("avif", dict(quality=40 if big else 50)),
                        ("webp", dict(quality=62 if big else 72, method=6)),
                        ("jpg",  dict(quality=68 if big else 76, optimize=True, progressive=True))):
            p = "%s/hero-%s-%d.%s" % (OUT, slot, w, ext)
            rs.save(p, **kw)
            made[ext] = os.path.getsize(p)
        rows.append((w, h, made))
        total += sum(made.values())
    manifest[slot] = rows
    print("%-7s src %dx%d -> %s" % (slot, im.width, im.height,
          ", ".join("%dw" % w for w, _, _ in rows)))
    for w, h, made in rows:
        print("          %4dw  avif %5.1fkB   webp %5.1fkB   jpg %5.1fkB"
              % (w, made["avif"]/1024, made["webp"]/1024, made["jpg"]/1024))

print("\ntotal generated: %.0f kB across %d files"
      % (total/1024, sum(len(r)*3 for r in manifest.values())))
