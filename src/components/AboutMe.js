import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
//import PFP from './../assets/pfp.jpg';
import PFPAvatar from './../assets/pfp_avatar.png';

import TooltippedSocialIcon from './TooltippedSocialIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    marginBottom: 105,
    color: "white"
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: 20,
    backgroundColor: "#222222"
  },
  textBox: {
    textAlign: "justify",
    textAlignLast: "center"
  }
}));


function AboutMe(props){
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid
        container
        justify="center"
        align="center"
        spacing={2}
        ref={props.scrollRef}
      >
        {
          // IRL picture
          /* <Grid item>
            <Avatar
              className={classes.avatar}
              alt=""
              src={PFP}
              imgProps={ {draggable: false} }
            />
          </Grid> */
        }
        <Grid item>
          <Avatar
            className={classes.avatar}
            alt=""
            src={PFPAvatar}
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
      </Grid>
    </Container>
  );
}

export default AboutMe;
