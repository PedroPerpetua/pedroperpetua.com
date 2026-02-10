import type { CSSProperties } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Mixins {
    flexCenter: CSSProperties,
  };
}
