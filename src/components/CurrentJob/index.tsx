import React, { useRef } from "react";
import { jobFunctions, visibilityOptions } from "../../definitions/profileVariables";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import ItGlobersLogo from '../../assets/itglobers-logo.svg';
import './styles.css';
import ProfileDescription from "../ProfileDescription";

const CurrentJob = () => {

    //REFERENCES
    const currentJobRef = useRef<any>(null);

    //IS VISIBLE ON SCREEN
    const { isVisible: currentJobVisible } = useElementOnScreen(visibilityOptions, currentJobRef, true);

    //JSX
    return (
        <div
            ref={currentJobRef}
            className={`current-job__general-container`}
        >
            <div 
                className={`current-job__internal-container ${currentJobVisible && 'current-job__visible'}`}
            >
                <div className={`current-job__company-logo`}>
                    <img alt='ITGlobers Logo' src={ItGlobersLogo} />
                </div>
                <h3>IT Globers - Current Job</h3>
                <p>I currently work at IT Globers, a software development company specializing in e-commerce. Some of the main responsibilities I have are:</p>
                <ul className={`current-job__functions`}>
                    {
                        jobFunctions.map((assignment,index) => {
                            return(
                                <ProfileDescription
                                    key={index}
                                    assignment={assignment}
                                    index={index}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CurrentJob;