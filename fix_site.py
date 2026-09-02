import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Fix the logo: extract base64 and rewrite the block with mix-blend-multiply to hide white background, larger size, and remove wordmark
logo_pattern = r'<a href="#/" data-link class="flex items-center gap-3 group shrink-0 py-0\.5">\s*<span class="w-10 h-10 flex items-center justify-center shrink-0" aria-hidden="true">\s*<svg viewBox="0 0 32 32" class="w-10 h-10"><image href="(data:image/png;base64,[^"]+)" width="32" height="32" /></svg>\s*</span>\s*<span class="wordmark text-title-lg-m md:text-title-lg text-primary leading-none">HopeBridge</span>\s*</a>'

def logo_repl(match):
    b64_url = match.group(1)
    return f'''<a href="#/" data-link class="flex items-center group shrink-0 py-0.5">
        <img src="{b64_url}" class="h-16 md:h-20 w-auto object-contain mix-blend-multiply" alt="Logo" />
      </a>'''

html = re.sub(logo_pattern, logo_repl, html)

# 2. Add back the premium testimonial layouts
testimonial_funcs = """function homeTestimonialSection(title, data) {
  const testimonials = data || SITE.homeTestimonials;
  return '<section class="py-24 md:py-32 bg-surface-container-low border-y border-border-subtle">' +
    '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
      '<div class="max-w-2xl mb-16 reveal">' +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">' +
          esc(title || "What the communities we work with say") + "</h2>" +
      "</div>" +
      '<div class="flex flex-col gap-16">' +
        testimonials.map((t, i) =>
          '<figure class="reveal flex flex-col md:flex-row gap-8 md:gap-16 items-center" style="transition-delay:' + i * 90 + 'ms">' +
            '<div class="flex-1">' +
              '<svg viewBox="0 0 28 20" class="w-12 h-12 mb-8 text-secondary/30" fill="currentColor" aria-hidden="true"><path d="M11.6 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4h5.4V20H0v-6C0 6.6 3.9 1.9 11.6 0Zm16.4 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4H28V20H16.4v-6C16.4 6.6 20.3 1.9 28 0Z"/></svg>' +
              '<blockquote class="text-headline-sm-m md:text-headline-sm text-primary mb-8 text-pretty leading-snug">' + esc(t.quote) + "</blockquote>" +
            '</div>' +
            '<figcaption class="md:w-1/3 shrink-0 flex flex-col gap-4 border-l-2 border-secondary pl-6">' +
              '<div class="font-semibold text-title-md text-on-surface">' + esc(t.name) + "</div>" +
              '<div class="text-body-lg text-on-surface-variant">' + esc(t.role) + "</div>" +
            "</figcaption>" +
          "</figure>").join('<div class="w-full h-px bg-border-subtle"></div>') +
      "</div>" +
    "</div></section>";
}

function impactTestimonialSection(title, data) {
  const testimonials = data || SITE.impactTestimonials;
  return '<section class="py-24 md:py-32 bg-surface-container-low border-y border-border-subtle">' +
    '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
      '<div class="max-w-2xl mb-16 reveal">' +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">' +
          esc(title || "Partners, parents and committee members") + "</h2>" +
      "</div>" +
      '<div class="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-14">' +
        testimonials.map((t, i) => {
          let colClass = "md:col-span-4";
          let textClass = "text-quote-m md:text-quote";
          let alignClass = "";
          let quoteMark = '<svg viewBox="0 0 28 20" class="w-7 h-5 mb-6 text-secondary" fill="currentColor" aria-hidden="true"><path d="M11.6 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4h5.4V20H0v-6C0 6.6 3.9 1.9 11.6 0Zm16.4 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4H28V20H16.4v-6C16.4 6.6 20.3 1.9 28 0Z"/></svg>';
          
          if (i === 0) { 
            colClass = "md:col-span-7"; 
            textClass = "text-headline-md-m md:text-headline-md"; 
          }
          else if (i === 1) { 
            colClass = "md:col-span-4 md:col-start-9 mt-4"; 
          }
          else if (i === 2) { 
            colClass = "md:col-span-8 md:col-start-3 md:mt-12"; 
            alignClass = "text-center"; 
            quoteMark = '<svg viewBox="0 0 28 20" class="w-7 h-5 mx-auto mb-6 text-secondary" fill="currentColor" aria-hidden="true"><path d="M11.6 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4h5.4V20H0v-6C0 6.6 3.9 1.9 11.6 0Zm16.4 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4H28V20H16.4v-6C16.4 6.6 20.3 1.9 28 0Z"/></svg>';
          }
          
          return '<figure class="' + colClass + ' reveal ' + alignClass + '" style="transition-delay:' + i * 90 + 'ms">' +
            quoteMark +
            '<blockquote class="' + textClass + ' text-primary mb-6 text-pretty">' + esc(t.quote) + "</blockquote>" +
            '<figcaption class="border-t border-border-subtle pt-4">' +
              '<div class="font-semibold text-on-surface">' + esc(t.name) + "</div>" +
              '<div class="text-body-md text-on-surface-variant">' + esc(t.role) + "</div>" +
            "</figcaption>" +
          "</figure>";
        }).join("") +
      "</div>" +
    "</div></section>";
}"""

old_testimonial_func = r'function testimonialSection\(title, data\) \{.*?\}(?=\n\nfunction faqSection)'
html = re.sub(old_testimonial_func, testimonial_funcs, html, flags=re.DOTALL)

# 3. Update the calls in render()
html = html.replace('html += testimonialSection();', 'html += homeTestimonialSection();')
html = html.replace('html += testimonialSection("Partners, parents and committee members", SITE.impactTestimonials);', 'html += impactTestimonialSection("Partners, parents and committee members", SITE.impactTestimonials);')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Site fixed!")
