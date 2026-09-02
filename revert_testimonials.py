import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Original testimonial section
original_func = """function testimonialSection(title, data) {
  const testimonials = data || SITE.homeTestimonials;
  return '<section class="py-24 md:py-32 bg-surface-container-low border-y border-border-subtle">' +
    '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
      '<div class="max-w-2xl mb-16 reveal">' +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">' +
          esc(title || "What the communities we work with say") + "</h2>" +
      "</div>" +
      '<div class="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-14">' +
        testimonials.map((t, i) =>
          '<figure class="reveal" style="transition-delay:' + i * 90 + 'ms">' +
            '<svg viewBox="0 0 28 20" class="w-7 h-5 mb-6 text-secondary" fill="currentColor" aria-hidden="true">' +
              '<path d="M11.6 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4h5.4V20H0v-6C0 6.6 3.9 1.9 11.6 0Zm16.4 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4H28V20H16.4v-6C16.4 6.6 20.3 1.9 28 0Z"/></svg>' +
            '<blockquote class="text-quote-m md:text-quote text-primary mb-6 text-pretty">' + esc(t.quote) + "</blockquote>" +
            '<figcaption class="border-t border-border-subtle pt-4">' +
              '<div class="font-semibold text-on-surface">' + esc(t.name) + "</div>" +
              '<div class="text-body-md text-on-surface-variant">' + esc(t.role) + "</div>" +
            "</figcaption>" +
          "</figure>").join("") +
      "</div>" +
    "</div></section>";
}"""

# Remove homeTestimonialSection and impactTestimonialSection
pattern = r'function homeTestimonialSection\(title, data\) \{.*?\}\s*function impactTestimonialSection\(title, data\) \{.*?\}(?=\n\nfunction faqSection)'
html = re.sub(pattern, original_func, html, flags=re.DOTALL)

# Update calls in render()
html = html.replace('html += homeTestimonialSection();', 'html += testimonialSection();')
html = html.replace('html += impactTestimonialSection("Partners, parents and committee members", SITE.impactTestimonials);', 'html += testimonialSection("Partners, parents and committee members", SITE.impactTestimonials);')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Testimonials reverted successfully!")
