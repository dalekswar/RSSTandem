import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
});
