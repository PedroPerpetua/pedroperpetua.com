import Resources from './i18n-resources';
import { defaultNS } from '../i18n';

declare module 'i18next' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface CustomTypeOptions {
    enableSelector: 'optimize',
    defaultNS: typeof defaultNS,
    resources: {
      [defaultNS]: Resources,
    },
  };
}
