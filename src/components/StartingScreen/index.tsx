import React, { useState, useEffect, useRef } from 'react';
import ProfilePicture from '../../assets/hugo-picture.png';
import './styles.css';

type StartingScreenProps = {
    scrollToRef: () => void
}

const StartingScreen = ({scrollToRef}:StartingScreenProps) => {

    //STATES
    const [currentText, setCurrentText] = useState<string>('');
    const [firstRender, setFirstRender] = useState<boolean>(false);

    //REFERENCES
    const welcomePhrase = useRef<string>('In Love With Software Development');

    //EFFECTS
    useEffect(() => {
        setFirstRender(true);
    },[])

    useEffect(() => {
        let splitWelcomePhrase = welcomePhrase.current.split('');
        const intervalId = setInterval(() => {
            let letter =  splitWelcomePhrase.shift();
            if(!letter) {
                clearInterval(intervalId);
            } else {
                setCurrentText((currentState) => currentState += letter);
            }
        },60)
        return
    },[])

    //JSX
    return(
        <div className={`starting-screen__general-container`}>
            <div className={`starting-screen__name-container`}>
                <h2>Hugo Felipe Riveros Fajardo</h2>
            </div>
            <div className={`starting-screen__welcome-text`}>
                <p>{currentText}<span className={`writing__animation`}>|</span></p>
            </div>
            <div className={`starting-screen__button-container ${firstRender ? 'button-first-render' : 'button-inital-render'}`}>
                <button onClick={scrollToRef}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> 
                    <p>About Me</p>
                </button>
            </div>
            <div className={`starting-screen__profile-picture`}>
                <img className={`starting-screen__profile-picture--image ${firstRender ? 'profile-first-render' : 'profile-initial-position'}`} alt='profile-picture' src={ProfilePicture}/>
            </div>
        </div>
    )
}

export default StartingScreen;