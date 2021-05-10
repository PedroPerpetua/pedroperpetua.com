import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PFP from './../pfp.jpg';

import TooltippedSocialIcon from './TooltippedSocialIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


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
            src={PFP}
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
        <TooltippedSocialIcon
          icon={TwitterIcon}
          text="Twitter"
          link="https://twitter.com/Pedro_WarriorPP"
        />
        <TooltippedSocialIcon
          icon={InstagramIcon}
          text="Instagram"
          link="https://www.instagram.com/perpetuapedro/"
        />
      </Grid>
    </React.Fragment>
  );
}

export default AboutMe;
