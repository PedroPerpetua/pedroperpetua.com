import { AppBar as MUIAppBar, Toolbar, Typography } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';

function AppBar() {
  return (
    <MUIAppBar position="sticky" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pedro Perpétua
        </Typography>
        <LanguageSwitcher />
      </Toolbar>
    </MUIAppBar>
  );
}

export default AppBar;
