import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import TooltippedSocialIcon from './TooltippedSocialIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
      <Grid container justify="center" align="center" ref={props.scrollRef}>
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
      <Grid container justify="center" align="center">
        <TooltippedSocialIcon
          icon={GitHubIcon}
          text="GitHub"
          link="https://github.com/PedroPerpetua"
        />
        <TooltippedSocialIcon
          icon={LinkedInIcon}
          text="LinkedIn"
          link="https://www.linkedin.com/in/pedro-perp%C3%A9tua-29a7b6211/"
        />
      </Grid>
    </React.Fragment>
  );
}

export default AboutMe;
