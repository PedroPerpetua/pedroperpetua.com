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
  },
  textBox: {
    maxWidth: "45%",
    textAlign: "justify",
    textAlignLast: "center"
  }
}));


function AboutMe(props){
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid justify="center" align="center" ref={props.scrollRef}>
        <div>
          <Avatar
            className={classes.avatar}
            alt=""
            src="/static/images/1.jpg"
          />
          <Typography variant="h5" color="inherit" noWrap>
            Student and Developer
          </Typography>
          <Typography variant="h2" color="inherit" noWrap>
            Pedro Perpétua
          </Typography>
          <Typography className={classes.textBox} variant="h6" color="inherit">
            I'm a Computer Science student at Instituto Superior Técnico, Portugal.
            I love to program and explore GameDev as a hobby.
            I seek to work as a full-stack developer.
          </Typography>
        </div>
      </Grid>
    </React.Fragment>
  );
}

export default AboutMe;
