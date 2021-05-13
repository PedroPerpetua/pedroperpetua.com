import React from 'react'
import '@fontsource/roboto';
import './App.css';
import { withWidth } from '@material-ui/core';
import {Parallax} from 'react-parallax';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Background from './assets/background.png';


function App(props) {
  const isLargeDevice = (props.width !== "xs" && props.width !== "sm");
  const aboutMeRef = React.createRef();
  const scrollToAboutMe = (() =>{
    window.scrollTo({
      top: aboutMeRef.current.offsetTop
    });
  });

  const projectsRef = React.createRef();
  const scrollToProjects = (() =>{
    window.scrollTo({
      top: projectsRef.current.offsetTop
    });
  });

  const contactsRef = React.createRef();
  const scrollToContacts = (() =>{
    window.scrollTo({
      top: contactsRef.current.offsetTop
    });
  });

  return (
    <div className="App">
      <Header
        isLargeDevice={isLargeDevice}
        scrollAboutMe={scrollToAboutMe}
        scrollProjects={scrollToProjects}
        scrollContacts={scrollToContacts}
      />
      <Parallax bgImage={Background} strength={1500}>
        <AboutMe isLargeDevice={isLargeDevice} scrollRef={aboutMeRef}/>
        <Projects isLargeDevice={isLargeDevice} scrollRef={projectsRef}/>
        <Contacts isLargeDevice={isLargeDevice} scrollRef={contactsRef}/>
      </Parallax>
    </div>
  );
}

export default withWidth()(App);
