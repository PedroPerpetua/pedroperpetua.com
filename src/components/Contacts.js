import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import MobileWrapper from './MobileWrapper';

import ListSocialIcon from './ListSocialIcon';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import Avatar from './../assets/avatar.png';


// Prevent complicating things to load SVGs just for this one icon
const DiscordIcon = `M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67\
2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.68\
3h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.4\
75 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.06\
4-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.4\
04-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.2\
02 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-\
2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-\
3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-\
.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-\
.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z`;


const useStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: "WhiteSmoke",
    padding: 50,
    marginTop: 100,
    marginBottom: 100
  },
  title: {
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0
    }
  },
  image: {
    width: "100%",
  }
}));


function Contacts({ scrollRef }){
  const classes = useStyles();

  return (
    <MobileWrapper divClass={classes.base}>
      <Grid container alignment="center">
        <Grid item md={6} xs={12}>
          <Typography className={classes.title} variant="h2" ref={scrollRef}>
            Contacts
          </Typography>
          <List>

            <ListSocialIcon
              icon={MailIcon}
              primary="E-mail"
              secondary="pedro.perpetua@sapo.pt"
              link="mailto:pedro.perpetua@sapo.pt"
            />

            <ListSocialIcon
              icon={LinkedInIcon}
              primary="LinkedIn"
              secondary="Pedro Perpétua"
              link="https://www.linkedin.com/in/pedro-perp%C3%A9tua-29a7b6211/"
            />

            <ListSocialIcon
              icon={GitHubIcon}
              primary="GitHub"
              secondary="PedroPerpetua"
              link="https://github.com/PedroPerpetua"
            />

            <ListSocialIcon
              isSvg icon={DiscordIcon}
              primary="Discord"
              secondary="Pedro (WarriorPP)#8820"
            />

            <ListSocialIcon
              icon={TwitterIcon}
              primary="Twitter"
              secondary="Pedro_WarriorPP"
              link="https://twitter.com/Pedro_WarriorPP"
            />

            <ListSocialIcon
              icon={InstagramIcon}
              primary="Instagram"
              secondary="perpetuapedro"
              link="https://www.instagram.com/perpetuapedro/"
            />

          </List>
        </Grid>
        <Grid item md={6} xs={12}>
          <img className={classes.image} src={Avatar} alt=""/>
        </Grid>
      </Grid>
    </MobileWrapper>
  );
}


export default Contacts;
