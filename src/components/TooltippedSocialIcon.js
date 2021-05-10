import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles((theme) => ({
  tooltip: {
    fontSize: 16
  }
}));


function TooltippedSocialIcon(props){
  const classes = useStyles();
  const Icon = props.icon;
  return(
    <Tooltip
      classes={ {tooltip: classes.tooltip} }
      title={props.text}
    >
      <IconButton
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon fontSize="large"/>
      </IconButton>
    </Tooltip>
  );
}

export default TooltippedSocialIcon;
