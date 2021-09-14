import React from 'react';
import Theme from './Theme';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: "white",
    backgroundColor: Theme.palette.secondary.main
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1,
    textAlign: 'left'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    cursor: "pointer",
    color: Theme.palette.text.secondary
  }
}));


function Header({ scrollAboutMe, scrollProjects, scrollContacts }){
  const classes = useStyles();

  return(
    <React.Fragment>
      <AppBar className={classes.appBar} elevation={0} color="default" position="sticky">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.toolbarTitle} variant="h6" color="inherit" noWrap>
            Pedro Perpétua
          </Typography>
          <nav>
            <Link className={classes.link} variant="button" color="textPrimary" onClick={scrollAboutMe}>
              About me
            </Link>
            <Link className={classes.link} variant="button" color="textPrimary" onClick={scrollProjects}>
              Projects
            </Link>
            <Link className={classes.link} variant="button" color="textPrimary" onClick={scrollContacts}>
              Contacts
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


export default Header;
