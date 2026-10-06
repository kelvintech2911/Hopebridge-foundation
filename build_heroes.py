# -*- coding: utf-8 -*-
"""Generate responsive, modern-format derivatives of the four hero photographs.

Writes images/hero/hero-<slot>-<width>.{avif,webp,jpg}. Never upscales: a source
narrower than a target width simply does not get that width, so the srcset never
promises detail the original does not have.
"""
import os, io
from PIL import Image, ImageEnhance

# The home photograph is shot against an open sky that clips to pure white,
# and the hero copy sits right on it. Left alone it forces a scrim heavy
# enough to bury the picture, so the highlights are rolled off here instead:
# everything below the knee is untouched, everything above is compressed
# towards it. That turns a blown sky into a mid grey, which the copy can sit
# on under a much lighter wash. Colour and contrast come back up a little
# because a shoulder flattens both. Applied only to the responsive derivatives,
# so the high-resolution source remains untouched.
GRADE = {"home": dict(knee=0.55, comp=0.45, color=1.10, contrast=1.06)}

def graded(im, slot):
    g = GRADE.get(slot)
    if not g:
        return im
    knee, comp = g["knee"], g["comp"]
    lut = []
    for v in range(256):
        x = v / 255.0
        y = x if x <= knee else knee + (1 - knee) * comp * ((x - knee) / (1 - knee))
        lut.append(max(0, min(255, round(255 * y))))
    im = im.point(lut * 3)
    im = ImageEnhance.Color(im).enhance(g["color"])
    return ImageEnhance.Contrast(im).enhance(g["contrast"])

SRC = {
    "home":   "images/hero-home-sharp.png",   # high-resolution children-in-a-circle hero
    "work":   "images/hero-section-3.jpg",   # food drive, packing totes
    # hero section1/2 were 360px and 426px thumbnails - far too small for a
    # full-bleed hero, so these two slots use the largest images in the project.
    "impact": "images/second-chair-digital-hubs.jpg",
    "about":  "images/community-wellbeing.jpg",
}
# 1536 covers a full-bleed hero on a 1080p desktop; past that the scrim and the
# viewing distance hide the difference and the bytes stop earning their place.
WIDTHS = [640, 1024, 1536]
OUT = "images/hero"
os.makedirs(OUT, exist_ok=True)

manifest = {}
total = 0
generated = set()
for slot, src in SRC.items():
    im = graded(Image.open(src).convert("RGB"), slot)
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
            generated.add(os.path.normcase(os.path.abspath(p)))
            made[ext] = os.path.getsize(p)
        rows.append((w, h, made))
        total += sum(made.values())
    manifest[slot] = rows
    print("%-7s src %dx%d -> %s" % (slot, im.width, im.height,
          ", ".join("%dw" % w for w, _, _ in rows)))
    for w, h, made in rows:
        print("          %4dw  avif %5.1fkB   webp %5.1fkB   jpg %5.1fkB"
              % (w, made["avif"]/1024, made["webp"]/1024, made["jpg"]/1024))

# Width lists can change as better source images arrive. Remove only stale
# derivatives for the four managed hero slots so unused files are not deployed.
for name in os.listdir(OUT):
    managed = any(name.startswith("hero-%s-" % slot) for slot in SRC)
    if not managed or os.path.splitext(name)[1].lower() not in (".avif", ".webp", ".jpg"):
        continue
    path = os.path.join(OUT, name)
    if os.path.normcase(os.path.abspath(path)) not in generated:
        os.remove(path)
        print("removed stale %s" % path)

print("\ntotal generated: %.0f kB across %d files"
      % (total/1024, sum(len(r)*3 for r in manifest.values())))
