import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import i18nVitePlugin from './i18n-vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    i18nVitePlugin(),
  ],
});
