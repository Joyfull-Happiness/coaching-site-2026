import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        podcast: resolve(__dirname, 'podcast.html'),
        programs: resolve(__dirname, 'programs.html'),
        resources: resolve(__dirname, 'resources.html'),
        speaking: resolve(__dirname, 'speaking.html'),
      },
    },
  },
});
