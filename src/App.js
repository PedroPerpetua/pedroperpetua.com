import React from 'react'
import './App.css';
import '@fontsource/roboto';
import { withWidth } from '@material-ui/core';
import { Parallax } from 'react-parallax';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Background from './assets/background.png';


function App({ width }) {
  const isLargeDevice = (width !== "xs" && width !== "sm");
  const ChosenHeader = isLargeDevice ? Header : MobileHeader;

  const aboutMeRef = React.createRef();
  const projectsRef = React.createRef();
  const contactsRef = React.createRef();
  const scrollToRef = (ref) => () => {
    window.scrollTo({
      top: ref.current.offsetTop
    });
  };

  return (
    <div className="App">
      <ChosenHeader
        scrollAboutMe={scrollToRef(aboutMeRef)}
        scrollProjects={scrollToRef(projectsRef)}
        scrollContacts={scrollToRef(contactsRef)}
      />
      <Parallax bgImage={Background} strength={1500}>
        <AboutMe scrollRef={aboutMeRef}/>
        <Projects scrollRef={projectsRef}/>
        <Contacts scrollRef={contactsRef}/>
      </Parallax>
    </div>
  );
}


export default withWidth()(App);
