import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=> ({
  base: {
    marginTop:35
  },
  text: {
    fontSize: "1.2rem",
    textAlign: "justify",
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      marginLeft: -25,
      marginRight: -25
    }
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% + 50px)",
      marginLeft: -25,
      marginRight: -25
    }
  }
}));


function ProjectCard(props){
  const classes = useStyles();
  let left = (
    <Grid item md={6} xs={12}>
      <Typography className={classes.text} component="div" variant="body1">
        {props.children}
      </Typography>
    </Grid>
  );
  let right = (
    <Grid item md={6} xs={12}>
      <img className={classes.image} src={props.image} alt=""/>
    </Grid>
  );
 if(props.side === "right" && props.isLargeDevice)
    // Swap them
    [left, right] = [right, left];

  return (
    <div className={classes.base}>
      <Typography
        variant="h4"
        style={{textAlign: props.isLargeDevice ? props.side:"center"}}
      >
        {props.title}
      </Typography>
      {props.subtitle &&
      <Typography variant="subtitle1" style={{textAlign: props.isLargeDevice ? props.side:"center"}}>
        <i>{props.subtitle}</i>
      </Typography>
      }
      <Grid container>
        {left}
        {right}
      </Grid>
    </div>
  );
}

export default ProjectCard;
