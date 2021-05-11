import { makeStyles, withWidth } from '@material-ui/core';
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
  const isLargeDevice = (props.width !== "xs" && props.width !== "sm");
  let left = (
    <Grid item md={6} xs={12}>
      <Typography variant="body1" className={classes.text}>
        {props.children}
      </Typography>
    </Grid>
  )
  let right = (
    <Grid item md={6} xs={12}>
      <img className={classes.image} src={props.image} alt=""/>
    </Grid>
  )
 if(props.side === "right" && isLargeDevice)
    // Swap them
    [left, right] = [right, left];

  return (
    <div className={classes.base}>
      <Typography
        variant="h4"
        style={{textAlign: isLargeDevice ? props.side:"center"}}
      >
        {props.title}
      </Typography>
      <Grid container>
        {left}
        {right}
      </Grid>
    </div>
  );
}

export default withWidth()(ProjectCard);