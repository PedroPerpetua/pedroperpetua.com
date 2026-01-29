import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

export const defaultNS = 'common';

export type AvailableLanguage = 'en' | 'pt';
export const availableLanguages: AvailableLanguage[] = [
  'en',
  'pt',
];

i18next
  .use(initReactI18next)
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  });

// Setup hot reload
if (import.meta.hot) {
  import.meta.hot.on('locales-updated', async () => {
    await i18next.reloadResources();
    await i18next.changeLanguage(i18next.language);
  });
}

export default i18next;
