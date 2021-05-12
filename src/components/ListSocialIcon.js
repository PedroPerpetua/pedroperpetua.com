import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';


function NewSvgIcon(props){
  return (
    <SvgIcon>
      <path d={props.icon} />
    </SvgIcon>
  );
}


function ListSocialIcon(props){
  let Icon;
  if(props.svg)
    Icon = React.createElement(NewSvgIcon, {icon: props.icon}, null);
  else
    Icon = React.createElement(props.icon);
  let extraProps = {};
  if(props.link)
      extraProps = {
        button: true,
        component: "a",
        href: props.link,
        target: "_blank",
        rel: "noopener noreferrer"
      };
  return (
    <ListItem {...extraProps}>
      <ListItemAvatar>
        <Avatar>
          {Icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.primary}
        secondary={props.secondary}
      />
    </ListItem>
  );
}

export default ListSocialIcon;
