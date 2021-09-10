import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  text: {
    cursor: "pointer",
    fontSize: "1.2rem"
  },
  icon: {
    color: "white",
    marginRight: 15
  }
}));


function DrawerLinkIcon({ onClick, icon, text}){
  const classes = useStyles();
  const Icon = icon;

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <Icon fontSize="large" className={classes.icon}/>
      </ListItemIcon>
      <ListItemText
        primary={text}
        classes={ {primary: classes.text} }
      />
    </ListItem>
  );
}


export default DrawerLinkIcon;
