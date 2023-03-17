import React, { useRef } from "react";
import { jobFunctions, visibilityOptions } from "../../definitions/profileVariables";
import './styles.css';
import useElementOnScreen from "../../hooks/useElementOnScreen";

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
                    <img alt='ITGlobers Logo' src="https://itglobers.com/assets/img/itglobers-logo.svg" />
                </div>
                <h3>IT Globers - Current Job</h3>
                <p>I currently work at IT Globers, a software development company specializing in e-commerce. Some of the main responsibilities I have are:</p>
                <ul className={`current-job__functions`}>
                    {
                        jobFunctions.map((assigment,index) => {
                            return(
                                <li>{assigment}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CurrentJob;