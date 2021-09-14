import React, { useState } from 'react';
import Theme from './Theme';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import DrawerLinkIcon from './DrawerLinkIcon';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ForumIcon from '@material-ui/icons/Forum'


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
  menuButton: {
    marginRight: theme.spacing(2)
  },
  drawer: {
    color: "white",
    backgroundColor: Theme.palette.secondary.main,
    width: "60%",
    minWidth: 180,
    maxWidth: 260
  },
  text: {
    margin: theme.spacing(1, 1.5),
    cursor: "pointer",
    color: "white",
    fontSize: "2rem"
  }
}));


function MobileHeader({ scrollAboutMe, scrollProjects, scrollContacts }){
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onLinkClick = (scrollFunction) => () => {
    setOpen(false);
    scrollFunction();
  }

  return(
    <React.Fragment>
      <AppBar className={classes.appBar} elevation={0} color="default" position="sticky">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            >
              <MenuIcon fontSize="large"/>
          </IconButton>
          <Typography className={classes.toolbarTitle} variant="h6" color="inherit" noWrap>
            Pedro Perpétua
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        classes={{ paper: classes.drawer }}
      >
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        />
        <List>

          <DrawerLinkIcon
            onClick={onLinkClick(scrollAboutMe)}
            icon={InfoIcon}
            text="About Me"
          />

          <DrawerLinkIcon
            onClick={onLinkClick(scrollProjects)}
            icon={WorkIcon}
            text="Projects"
          />

          <DrawerLinkIcon
            onClick={onLinkClick(scrollContacts)}
            icon={ForumIcon}
            text="Contacts"
          />

        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
}


export default MobileHeader;
