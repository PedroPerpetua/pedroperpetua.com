import React from 'react'
import '@fontsource/roboto';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  const HeaderOffset = 65; // Hardcoded value

  const aboutMeRef = React.createRef();
  const scrollToAboutMe = (() =>{
    window.scrollTo({
      top: aboutMeRef.current.offsetTop - HeaderOffset
    });
  });

  const projectsRef = React.createRef();
  const scrollToProjects = (() =>{
    window.scrollTo({
      top: projectsRef.current.offsetTop - HeaderOffset
    });
  });

  const contactsRef = React.createRef();
  const scrollToContacts = (() =>{
    window.scrollTo({
      top: contactsRef.current.offsetTop - HeaderOffset
    });
  });

  return (
    <div className="App">
      <Header
        scrollAboutMe={scrollToAboutMe}
        scrollProjects={scrollToProjects}
        scrollContacts={scrollToContacts}
      />
      <AboutMe scrollRef={aboutMeRef}/>
      <Projects scrollRef={projectsRef}/>
      <Contacts scrollRef={contactsRef}/>
    </div>
  );
}

export default App;
