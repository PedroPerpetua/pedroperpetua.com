import React from 'react';
import Theme from './Theme';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: Theme.palette.primary.main
  }
}));


function NewSvgIcon({ icon }){
  return (
    <SvgIcon>
      <path d={icon} />
    </SvgIcon>
  );
}


function ListSocialIcon({ icon, isSvg, link, primary, secondary }){
  const classes = useStyles();
  const Icon = isSvg ? <NewSvgIcon icon={icon} /> : React.createElement(icon);

  const linkProps = link ? {
    button: true,
    component: "a",
    href: link,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <ListItem {...linkProps}>
      <ListItemAvatar>
        <Avatar className={classes.container}>
          {Icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={primary}
        secondary={secondary}
      />
    </ListItem>
  );
}


export default ListSocialIcon;
