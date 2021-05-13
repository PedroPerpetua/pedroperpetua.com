import React from 'react';
import { makeStyles } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import ProjectCard from './ProjectCard';
import PedroPerpetua from './../assets/pedroperpetua.jpg';
import PapelMagico from './../assets/papelmagico.jpg'
import ProjetosUtil from './../assets/projetosutil.jpg'


const useStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: "WhiteSmoke",
    padding: 50
  },
  title: {
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0
    }
  }
}));


function Projects(props){
  const classes = useStyles();

  const interior = (
    <React.Fragment>
      <Typography className={classes.title} variant="h2">Projects</Typography>

      <ProjectCard
        isLargeDevice={props.isLargeDevice}
        title="pedroperpetua.com"
        image={PedroPerpetua}
        side="left"
      >
        I developed this website using React, integrating Material-UI, and serving it trough Github-Pages. It features a responsive design,
        working well both on large, medium and small devices.<br/>
        Even though it is mostly/totally static, I have knowledge about what is and how to use State and Hooks.
      </ProjectCard>

      <ProjectCard
        isLargeDevice={props.isLargeDevice}
        title="papelmagico.eu"
        image={PapelMagico}
        side="right"
      >
        <Link href="https://papelmagico.eu" target="_blank" rel="noopener noreferrer">papelmagico.eu</Link> is a simple website that serves
        as a hub to multiple platforms. Developed in simple HTML, CSS and JavaScript, it features a responsive design in all devices.
      </ProjectCard>

      <ProjectCard
        isLargeDevice={props.isLargeDevice}
        title="ProjetosUtil"
        subtitle="Currently only available in Portuguese"
        image={ProjetosUtil}
        side="left"
      >
        ProjetosUtil is a tool specially designed for Civil Engineers to automate their "office paperwork". It features a local Python Backend
        and a Javascript (Electron) Frontend that communicate with each other. It also features a small webserver that makes use of Flask to
        manage version updating, bug reporting, and user requests, featuring a fully fledged admin page. Packaged with Pyinstaller and destributed
        using Inno Setup.<br/>
        <br/>
        Notable libraries/frameworks used:<br/>
        <ul>
          <li>PythonEel</li>
          <li>Python Requests</li>
          <li>Docxtpl and Docxcompose</li>
          <li>Pyinstaller</li>
          <li>Flask</li>
          <li>MaterializeCSS (on Electron)</li>
        </ul>
      </ProjectCard>

    </React.Fragment>
  );

  if(props.isLargeDevice)
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

export default Projects;
