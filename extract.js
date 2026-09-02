const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Extract the compiled tailwind stylesheet
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  let css = styleMatch[1];
  // Prepend tailwind import
  css = `@import "tailwindcss";\n` + css;
  fs.writeFileSync('src/style.css', css);
  console.log('Extracted style.css');
}

// Extract the inline script
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  let js = scriptMatch[1];
  fs.writeFileSync('src/main.js', js);
  console.log('Extracted main.js');
}

// Remove the extracted blocks from index.html and link the new ones
let newHtml = html;
newHtml = newHtml.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="/src/style.css" />');
newHtml = newHtml.replace(/<script>[\s\S]*?<\/script>/, '<script type="module" src="/src/main.js"></script>');

fs.writeFileSync('index.html', newHtml);
console.log('Updated index.html');
