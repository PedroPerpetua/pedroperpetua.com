import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white"
  },
  tooltip: {
    fontSize: 16
  }
}));


function TooltippedSocialIcon({ icon, text, link }){
  const classes = useStyles();
  const Icon = icon;
  return(
    <Tooltip
      classes={ {tooltip: classes.tooltip} }
      title={text}
    >
      <IconButton
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={classes.icon} fontSize="large"/>
      </IconButton>
    </Tooltip>
  );
}


export default TooltippedSocialIcon;
