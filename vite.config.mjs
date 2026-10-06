import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  // Emit every asset URL relative to the page rather than rooted at '/'.
  // A default Vite build writes '/assets/index-abc.js', which only resolves
  // when the site is served from the root of a domain; on a host that puts it
  // under a path, every one of those 404s and the page comes up blank. './'
  // works in both cases.
  base: './',
  plugins: [
    tailwindcss(),
  ],
  // The translations are separate chunks, fetched only when someone picks a
  // language. The single-file build (`npm run build:standalone`) has nowhere to
  // fetch them from, so in that mode everything is kept in the one bundle.
  build: mode === 'standalone'
    ? { rollupOptions: { output: { codeSplitting: false } } }
    : {},
}));
