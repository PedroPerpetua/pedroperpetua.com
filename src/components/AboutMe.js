import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 20
  }
}));


function AboutMe(props){
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" align="center">
        <div ref={props.scrollRef}>
          <Avatar
            className={classes.avatar}
            alt=""
            src="/static/images/1.jpg"
          />
        <Typography variant="h5" color="inherit" noWrap>
          Estundante e programador
        </Typography>
        <Typography variant="h2" color="inherit" noWrap>
          Pedro Perpétua
        </Typography>

        </div>
      </Grid>
    </React.Fragment>
  );
}

export default AboutMe;
