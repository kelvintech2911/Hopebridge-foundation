# -*- coding: utf-8 -*-
"""Build the whole site as one self-contained HTML file.

Some hosting services take a single HTML file and nothing else - no folders, no
image uploads. This site is a shell plus a JS bundle, a stylesheet and 45 image
files, so on a host like that every picture 404s and the page comes up bare.

This packs all of it into one file: the stylesheet and the bundle are inlined,
and every photograph becomes a data: URI. Run `npm run build` first; this reads
dist/ and writes dist/standalone.html.

The one thing that stays external is Google Fonts, which is a stylesheet link
rather than a file in the project.

Photographs are re-encoded to WebP at a capped width on the way in. Base64 costs
about a third on top of the file size, so shipping the full-resolution originals
would produce a file too large for the hosts this is meant for.
"""
import base64, io, os, re, sys
from urllib.parse import unquote
from PIL import Image

def die(msg):
    print("build_standalone: " + msg, file=sys.stderr)
    sys.exit(1)


DIST = "dist"

# Defaults chosen so the file stays small enough for a host with an upload cap
# while still looking right at full width. Override them when a host is stricter:
#   python scripts/build_standalone.py --format avif --width 640 --quality 42
# WebP is the safe default because every browser since about 2020 decodes it.
# AVIF is roughly a third smaller at the same quality but wants a 2023-or-later
# browser, so it is opt-in rather than assumed.
FORMAT = "webp"
MAX_W = 800
QUALITY = 62
OUT_NAME = "standalone.html"

_args = sys.argv[1:]
while _args:
    flag = _args.pop(0)
    if flag in ("--format", "--width", "--quality", "--out"):
        if not _args:
            die("%s needs a value" % flag)
        val = _args.pop(0)
        if flag == "--format":
            if val.lower() not in ("webp", "avif"):
                die("--format must be webp or avif")
            FORMAT = val.lower()
        elif flag == "--width":
            MAX_W = int(val)
        elif flag == "--quality":
            QUALITY = int(val)
        else:
            OUT_NAME = val
    else:
        die("unknown option %s" % flag)

if not os.path.isdir(DIST):
    die("no dist/ - run `npm run build` first")

html = io.open(os.path.join(DIST, "index.html"), encoding="utf-8").read()

# ---- inline the stylesheet and the bundle --------------------------------
def read(rel):
    return io.open(os.path.join(DIST, rel.lstrip("./")), encoding="utf-8").read()

m = re.search(r'<link[^>]*rel="stylesheet"[^>]*href="(\./assets/[^"]+\.css)"[^>]*>', html)
if not m:
    die("could not find the built stylesheet link")
html = html.replace(m.group(0), "<style>" + read(m.group(1)) + "</style>")

m = re.search(r'<script[^>]*type="module"[^>]*src="(\./assets/[^"]+\.js)"[^>]*>\s*</script>', html)
if not m:
    die("could not find the built module script")
bundle = read(m.group(1))
script_tag = m.group(0)

# ---- every image the site can ask for, as a data: URI --------------------
def encode(path):
    im = Image.open(path).convert("RGB")
    if im.width > MAX_W:
        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)),
                       Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    if FORMAT == "avif":
        im.save(buf, "AVIF", quality=QUALITY)
    else:
        im.save(buf, "WEBP", quality=QUALITY, method=6)
    return ("data:image/%s;base64," % FORMAT) + base64.b64encode(buf.getvalue()).decode()

assets = {}

# Flat images are named as literals in the bundle, so they can be read straight off.
for ref in sorted(set(re.findall(r'images/[a-z0-9%._\-]+\.(?:jpg|jpeg|png|webp|avif)', bundle + html))):
    p = unquote(ref)
    if os.path.exists(p):
        assets[ref] = encode(p)

# Hero paths are concatenated at runtime, so they are not literals anywhere.
# Encode one rendition per slot and point every width and format at it: the
# browser is choosing between identical data anyway.
for slot in ("home", "work", "impact", "about"):
    widest = sorted(
        (int(re.search(r"-(\d+)\.jpg$", f).group(1)), f)
        for f in os.listdir("images/hero")
        if f.startswith("hero-" + slot + "-") and f.endswith(".jpg"))
    if not widest:
        continue
    uri = encode(os.path.join("images/hero", widest[-1][1]))
    for f in os.listdir("images/hero"):
        if f.startswith("hero-" + slot + "-"):
            assets["images/hero/" + f] = uri

if not assets:
    die("found no images to inline - has the bundle changed shape?")

# ---- the shim ------------------------------------------------------------
# The app re-renders on every route change, so a one-off pass over the DOM would
# only fix the first page. A MutationObserver keeps up with it, and works whether
# a path was written as a literal or built by concatenation.
shim = """<script>
(function () {
  var A = window.__HB_ASSETS, U = A.u, M = A.m;
  function key(u) { return (u || "").split("?")[0].replace(/^\\.?\\//, ""); }
  function fix(img) {
    if (img.__hb) return;
    var k = key(img.getAttribute("src"));
    if (M[k] === undefined) return;
    img.__hb = 1;
    var pic = img.parentNode;
    if (pic && pic.tagName === "PICTURE") {
      var s = pic.querySelectorAll("source");
      for (var i = 0; i < s.length; i++) s[i].parentNode.removeChild(s[i]);
    }
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    img.src = U[M[k]];
  }
  function sweep(root) {
    if (root.nodeType !== 1) return;
    if (root.tagName === "IMG") fix(root);
    var imgs = root.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) fix(imgs[i]);
  }
  new MutationObserver(function (recs) {
    for (var i = 0; i < recs.length; i++)
      for (var j = 0; j < recs[i].addedNodes.length; j++) sweep(recs[i].addedNodes[j]);
  }).observe(document.documentElement, { childList: true, subtree: true });
  if (document.body) sweep(document.body);
})();
</script>"""

# A hero is keyed once per width and per format, all pointing at the same
# rendition, so writing the URI out under every key would repeat a megabyte of
# base64 several times over. Store each distinct image once and let the keys
# reference it by index.
uris, index = [], {}
for k, v in sorted(assets.items()):
    if v not in index:
        index[v] = len(uris)
        uris.append(v)
payload = ("<script>window.__HB_ASSETS={u:[" +
           ",".join('"%s"' % u for u in uris) + "],m:{" +
           ",".join('"%s":%d' % (k, index[v]) for k, v in sorted(assets.items())) +
           "}};</script>")

html = html.replace(script_tag,
                    payload + shim + '<script type="module">' + bundle + "</script>")

# The favicons are separate files too; the PNG is enough on its own.
html = re.sub(r'<link rel="icon"[^>]*\.ico"[^>]*/?>', "", html)
for pat, src in ((r'<link[^>]*rel="icon"[^>]*type="image/png"[^>]*href="(\./assets/[^"]+)"[^>]*>', None),
                 (r'<link[^>]*rel="apple-touch-icon"[^>]*href="(\./assets/[^"]+)"[^>]*>', None)):
    m = re.search(pat, html)
    if not m:
        continue
    p = os.path.join(DIST, m.group(1).lstrip("./"))
    uri = "data:image/png;base64," + base64.b64encode(open(p, "rb").read()).decode()
    html = html.replace(m.group(1), uri)

out = os.path.join(DIST, OUT_NAME)
io.open(out, "w", encoding="utf-8", newline="").write(html)
print("build_standalone: %s  %.2f MB  (%d images as %s, max %dpx, q%d)"
      % (out, os.path.getsize(out) / 1048576, len(set(assets.values())),
         FORMAT, MAX_W, QUALITY))
