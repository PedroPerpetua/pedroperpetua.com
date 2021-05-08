import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    textAlign: 'left'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function Header(){
  const classes = useStyles();
  return(
    <React.Fragment>
      <AppBar className={classes.appBar} elevation={0} position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.toolbarTitle} variant="h6" color="inherit" noWrap>
            Pedro Perpétua
          </Typography>
          <nav>
            <Link className={classes.link} variant="button" color="textPrimary" href="#about-me">
              About me
            </Link>
            <Link className={classes.link} variant="button" color="textPrimary" href="#projects">
              Projects
            </Link>
            <Link className={classes.link} variant="button" color="textPrimary" href="#contacts">
              Contacts
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;