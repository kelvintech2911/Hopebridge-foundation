import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Emit every asset URL relative to the page rather than rooted at '/'.
  // A default Vite build writes '/assets/index-abc.js', which only resolves
  // when the site is served from the root of a domain; on a host that puts it
  // under a path, every one of those 404s and the page comes up blank. './'
  // works in both cases.
  base: './',
  plugins: [
    tailwindcss(),
  ],
});
