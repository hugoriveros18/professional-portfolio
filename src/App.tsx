import React, { useRef } from 'react';
import './App.css';
import StartingScreen from './components/StartingScreen';
import ProfileIntroduction from './components/ProfileIntroduction';
import SkillsResume from './components/SkillsResume';
import CurrentJob from './components/CurrentJob';

function App() {

  //REFERENCES
  const firstSectionRef = useRef<any>(null);


  //METHODS
  const scrollToRef = () => {
    firstSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  //JSX
  return (
    <div className="App">

      {/* WELCOME SCREEN */}
      <StartingScreen scrollToRef={scrollToRef}/>

      {/* PROFILE INTRODUCTION */}
      <ProfileIntroduction ref={firstSectionRef}/>

      {/* SKILLS RESUME*/}
      <SkillsResume/>

      {/* CURRENT JOB */}
      <CurrentJob/>

    </div>
  );
}

export default App
