import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        journal: resolve(__dirname, 'journal.html'),
        experiments: resolve(__dirname, 'experiments.html'),
        protocols: resolve(__dirname, 'protocols.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  },
  server: {
    port: 3000,
    open: false
  },
  preview: {
    port: 3000,
    open: false
  }
});
