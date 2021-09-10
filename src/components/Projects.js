import React from 'react';
import { makeStyles } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MobileWrapper from './MobileWrapper';

import ProjectCard from './ProjectCard';
import PedroPerpetua from './../assets/pedroperpetua.jpg';
import PapelMagico from './../assets/papelmagico.jpg';
import ProjetosUtil from './../assets/projetosutil.jpg';
import ProjectAthens from './../assets/projectathens.jpg';

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


function Projects({ scrollRef }){
  const classes = useStyles();

  return (
    <MobileWrapper divClass={classes.base}>
      <Typography className={classes.title} variant="h2" ref={scrollRef}>
        Projects
      </Typography>

      <ProjectCard
        title="pedroperpetua.com"
        image={PedroPerpetua}
        side="left"
      >
        I developed this website using React, integrating Material-UI, and serving it trough Github-Pages. It features a responsive design,
        working well both on large, medium and small devices.
      </ProjectCard>

      <ProjectCard
        title="ProjetosUtil"
        subtitle="Currently only available in Portuguese"
        image={ProjetosUtil}
        side="right"
      >
        <Link href="https://projetosutil.pedroperpetua.com/" target="_blank" rel="noopener noreferrer">Website</Link>.
        ProjetosUtil is a tool specially designed for Civil Engineers to automate their "office paperwork". It features a local Python Backend
        and a JavaScript (Electron) Frontend that communicate with each other. It also features a small webserver that makes use of Flask to
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

      <ProjectCard
        title="Athens Project"
        subtitle="Internship @ Tetrapi Creative Solutions"
        image={ProjectAthens}
        side="left"
      >
        The athens project was a project I developed while working as an intern at Tetrapi Creative Solutions. It was a proof of concept exclusively
        developed by me for a secure digital vote platform, making use of blockchain technology. It contained four distinc services:
        <ul>
          <li>
            Backoffice<br/>
            A backend service developed using DjangoRestFramework to manage users and elections. It featured user authentication using JWT and
            email two-factor-authentication. This service was also dockerized.
          </li>
          <li>
            BlockchainEngine<br/>
            A backend service developed using Flask and web3py with the sole purpose of being the middleman between the Backoffice and Ethereum's
            blockchain. This service was also dockerized.
          </li>
          <li>
            Desktop<br/>
            A frontend service using React and Material-Ui designed to be the frontend for managing elections. A fully fledged website with login/signup,
            account settings, fetching information from the Backoffice, making requests, error handling, and everything that would be expected for managing
            elections, candidates, election's results, etc. This service was also dockerized.
          </li>
          <li>
            VotingApp<br/>
            A mobile application developed with React-Native and web3js. This phone app allowed users to register for elections and vote on them,
            making direct contact with the Ethereum's Blockchain and holding itself an HDWallet.
          </li>
        </ul>
        This platform allowed users to create elections with an extensive array of options: encrypted votes/results, blank votes, the ability to manage and
        stop elections early, have a real-time updated view of events, and many other features.<br/>
        The project was fully organized featuring extensive documentation, dockerization options, global and easy to change configurations, and a makefile
        to tie it all together.
      </ProjectCard>

      <ProjectCard
        title="papelmagico.eu"
        image={PapelMagico}
        side="right"
      >
        <Link href="https://papelmagico.eu" target="_blank" rel="noopener noreferrer">papelmagico.eu</Link> is a simple website that serves
        as a hub to multiple platforms. Developed in simple HTML, CSS and JavaScript, it features a responsive design in all devices.
      </ProjectCard>

    </MobileWrapper>
  );
}

export default Projects;
