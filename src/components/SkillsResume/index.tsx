import React, { useRef } from "react";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import { profileSkills, visibilityOptions } from "../../definitions/profileVariables";
import FrontendIcon from '../../assets/coding.png';
import SkillsBarGraph from "../SkillsBarGraph";
import './styles.css';

export default function SkillsResume() {

    //REFERENCES
    const skillsContainerRef = useRef<any>(null);

    //IS VISIBLE ON SCREEN
    const { isVisible: isSkillsContainerVisible } = useElementOnScreen(visibilityOptions, skillsContainerRef, true);

    //JSX
    return (
        <div
            className={`skills__container--external`}
            ref={skillsContainerRef}
        >
            <div
                className={`skills__container--internal ${isSkillsContainerVisible ? 'skills__container--internal--visible' : 'skills__container--internal--hidden'}`}
            >
                <div className={`skills__frontend-icon`}>
                    <img alt='Frontend Icon' src={FrontendIcon} />
                </div>
                <h3>Fronted Developer</h3>
                <p>I enjoy developing web applications with a friendly experience. These are some of the main technologies that I use on a daily basis:</p>
                <div className={`skills__bar-graphs`}>
                    {
                        profileSkills.map((skill, index) => {
                            return (
                                <SkillsBarGraph
                                    title={skill.title}
                                    skillPercentage={skill.skillPercentage}
                                    isGraphBarsContainerVisible={isSkillsContainerVisible}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}