import React from 'react';
import { makeStyles, withWidth } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: "WhiteSmoke",
    padding: 50
  },
  title: {
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  }
}));


function Projects(props){
  const classes = useStyles();
  const isLargeDevice = (props.width !== "xs" && props.width !== "sm");

  const interior = (
    <React.Fragment>
      <Typography className={classes.title} variant="h2">Projects</Typography>


    </React.Fragment>
  );

  if(isLargeDevice)
    return (
      <div className={classes.base} ref={props.scrollRef}>
        <Container>
          {interior}
        </Container>
      </div>
    )
  // If it's a small device, don't wrap in a container
  return (
    <div className={classes.base} ref={props.scrollRef}>
      {interior}
    </div>
  );
}

export default withWidth()(Projects);
