import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fdc029',
      main: '#df861d',
      dark: '#aa3d01',
    },
    secondary: {
      light: '#fff',
      main: '#171820',
      dark: '#000',
    },
  },
  mixins: {
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default theme;
