import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: ['en', 'pt'],
  extract: {
    input: 'src/**/*.{js,jsx,ts,tsx}',
    output: 'public/locales/{{language}}.json',
    defaultNS: false,
    mergeNamespaces: true,
  },
  types: {
    input: ['public/locales/*.json'],
    output: 'src/@types/i18next.d.ts',
    resourcesFile: 'src/@types/i18n-resources.d.ts',
    enableSelector: true,
  },
});
