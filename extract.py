import re
import os

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Extract CSS
style_pattern = re.compile(r"<style>([\s\S]*?)</style>")
style_match = style_pattern.search(html)
if style_match:
    css = '@import "tailwindcss";\n' + style_match.group(1)
    with open("src/style.css", "w", encoding="utf-8") as f:
        f.write(css)
    html = html[:style_match.start()] + '<link rel="stylesheet" href="/src/style.css" />' + html[style_match.end():]
    print("Extracted style.css")

# 2. Extract Main JS (find the LAST script tag)
# The last script tag is before </body>
script_start = html.rfind("<script>")
script_end = html.rfind("</script>")
if script_start != -1 and script_end != -1 and script_start < script_end:
    main_js = html[script_start + 8 : script_end]
    with open("src/main.js", "w", encoding="utf-8") as f:
        f.write(main_js)
    html = html[:script_start] + '<script type="module" src="/src/main.js"></script>' + html[script_end + 9:]
    print("Extracted main.js")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated index.html")
