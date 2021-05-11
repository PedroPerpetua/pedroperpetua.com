import React from 'react'
import '@fontsource/roboto';
import './App.css';
import {Parallax} from 'react-parallax';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Background from './assets/background.jpg';


function App() {
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
        scrollAboutMe={scrollToAboutMe}
        scrollProjects={scrollToProjects}
        scrollContacts={scrollToContacts}
      />
      <Parallax bgImage={Background} strength={1000}>
        <AboutMe scrollRef={aboutMeRef}/>
        <Projects scrollRef={projectsRef}/>
        <Contacts scrollRef={contactsRef}/>
      </Parallax>
    </div>
  );
}

export default App;
