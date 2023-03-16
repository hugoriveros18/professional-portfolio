import React, { useRef } from 'react';
import './App.css';
import StartingScreen from './components/StartingScreen';
import FrontendIcon from './assets/coding.png';
import { profileSkills, visibilityOptions } from './definitions/profileVariables';
import SkillsBarGraph from './components/SkillsBarGraph';
import useElementOnScreen from './hooks/useElementOnScreen';

function App() {

  //REFERENCES
  const firstSectionRef = useRef<any>(null);
  const welcomeMessageRef = useRef<any>(null);
  const skillsContainerRef = useRef<any>(null);

  //IS VISIBLE ON SCREEN
  const {isVisible: isWelcomeMessageVisible} = useElementOnScreen(visibilityOptions, welcomeMessageRef);
  const {isVisible: isSkillsContainerVisible} = useElementOnScreen(visibilityOptions, skillsContainerRef);

  if(isWelcomeMessageVisible) {
    console.log("soy visible")
  }

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
      <div 
        className={`about-me__container`}
        ref={firstSectionRef}
      >
        <div 
          className={`about-me__welcome-message`}
          ref={welcomeMessageRef}
          style={isWelcomeMessageVisible ? {opacity: 1}: {}}
        >
          <h3>¡Hi, I'm Hugo! Thanks for being here.</h3>
          <p>Since I started my journey as a developer I am constantly amazed by the impact of technology around the world, that's one of the reasons why I love my profession and keep learning to develop software that positively impacts other people's lives. I am a frontend developer committed to creating high quality applications, mainly with experience in e-commerce development, focused on results and happy customers.</p>
        </div>
      </div>

      {/* SKILLS */}
      <div 
        className={`skills__container--external`} 
      >
        <div 
          className={`skills__container--internal`}
          ref={skillsContainerRef}
          // style={isSkillsContainerVisible ? {} : {}}
        >
          <div className={`skills__frontend-icon`}>
            <img alt='Frontend Icon' src={FrontendIcon}/>
          </div>
          <h3>Fronted Developer</h3>
          <p>I enjoy developing web applications with a friendly experience. These are some of the technologies that I use on a daily basis:</p>
          <div className={`skills__bar-graphs`}>
            {
              profileSkills.map((skill) => {
                return (
                  <SkillsBarGraph 
                    title={skill.title}
                    skillPercentage={skill.skillPercentage}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
