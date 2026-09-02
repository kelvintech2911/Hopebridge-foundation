const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const oldScript = fs.readFileSync('src/main.js', 'utf8');

// Restore the preload script
html = html.replace('<script type="module" src="/src/main.js"></script>', `<script>${oldScript}</script>`);

// Now extract the REAL script (the one at the bottom, before </body>)
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/);
if (scriptMatch) {
  const realJs = scriptMatch[1];
  fs.writeFileSync('src/main.js', realJs);
  console.log('Extracted real main.js');
  
  // Replace it
  html = html.replace(/<script>[\s\S]*?<\/script>\s*<\/body>/, '<script type="module" src="/src/main.js"></script>\n</body>');
} else {
  console.log('Could not find real script block');
}

fs.writeFileSync('index.html', html);
console.log('Fixed index.html');
