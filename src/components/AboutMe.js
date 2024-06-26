import React from 'react';
import Theme from './Theme';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PFP from './../assets/pfp.jpg';

import TooltippedSocialIcon from './TooltippedSocialIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    marginBottom: 105,
    color: Theme.palette.text.secondary
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: 20,
    backgroundColor: Theme.palette.secondary.main
  },
  textBox: {
    textAlign: "justify",
    textAlignLast: "center"
  }
}));


function AboutMe({ scrollRef }){
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm" ref={scrollRef}>
      <Grid container justifyContent="center" align="center" spacing={2}>
        <Grid item>
          <Avatar
            className={classes.avatar}
            alt=""
            src={PFP}
            imgProps={ {draggable: false} }
          />
        </Grid>
        <Grid item>

          <Typography variant="h5" color="inherit">
            Student and Developer
          </Typography>

          <Typography variant="h2" color="inherit">
            Pedro Perpétua
          </Typography>

          <Typography className={classes.textBox} variant="h6" color="inherit">
            I'm a Computer Science student at Instituto Superior Técnico, Portugal.
            I love to program and explore GameDev as a hobby.
            I seek to work as a full-stack developer.
          </Typography>

          <TooltippedSocialIcon
            icon={GitHubIcon}
            text="GitHub"
            link="https://github.com/PedroPerpetua"
          />

          <TooltippedSocialIcon
            icon={LinkedInIcon}
            text="LinkedIn"
            link="https://www.linkedin.com/in/pedro-perpetua/"
          />

          <TooltippedSocialIcon
            icon={TwitterIcon}
            text="Twitter"
            link="https://twitter.com/Pedro_WarriorPP"
          />

        </Grid>
      </Grid>
    </Container>
  );
}


export default AboutMe;
