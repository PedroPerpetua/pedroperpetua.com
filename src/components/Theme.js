import { createTheme } from '@material-ui/core/styles';


const Theme = createTheme({
  palette: {
    primary: {
      light: '#fdc029',
      main: "#df861d",
      dark: '#aa3d01'
    },
    secondary: {
      light: '#fff',
      main: '#171820',
      dark: '#000'
    },
    other: {
      paper: "gainsboro"
    },
    text: {
      primary: "#000",
      secondary: "#fff"
    }
  },
});


export default Theme;
