import { useRef, useState } from 'react';
import StartingScreen from './components/StartingScreen';
import ProfileIntroduction from './components/ProfileIntroduction';
import SkillsResume from './components/SkillsResume';
import CurrentJob from './components/CurrentJob';
import './App.css';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import { MenuBar, MenuNav } from './components/Menu';

function App() {

  //REFERENCES
  const profileRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const jobRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  //STATES
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  //METHODS
  const scrollToRef = (sectionReference: any) => {
    sectionReference.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const scrollToRefEnd = (sectionReference: any) => {
    sectionReference.current.scrollIntoView({
      behavior: 'smooth',
      block: "end",
      inline: "nearest"
    })
  }

  //JSX
  return (
    <div className="App">

      {/* WELCOME SCREEN */}
      <StartingScreen
        reference={profileRef}
        scrollToRef={scrollToRef}
        />

      {/* MENU */}
      <MenuNav setIsMenuActive={setIsMenuActive}/>
      <MenuBar 
        isMenuActive={isMenuActive}
        profileRef={profileRef}
        skillsRef={skillsRef}
        jobRef={jobRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        setIsMenuActive={setIsMenuActive}
        scrollToRef={scrollToRef}
        scrollToRefEnd={scrollToRefEnd}
      />

      {/* PROFILE INTRODUCTION */}
      <div ref={profileRef}>
        <ProfileIntroduction />
      </div>

      <div className={`skills-job__container`}>
        {/* SKILLS RESUME*/}
        <div className={`skills-job__box`} ref={skillsRef}>
          <SkillsResume />
        </div>

        {/* CURRENT JOB */}
        <div className={`skills-job__box`} ref={jobRef}>
          <CurrentJob />
        </div>
      </div>

      {/* PROJECTS */}
      <div ref={projectsRef}>
        <MyProjects />
      </div>

      {/* CONTACT */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App
