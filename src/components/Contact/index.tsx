import { useRef } from "react";
import './styles.css';
import SocialMedia from "../SocialMedia";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import { visibilityOptionsContact } from "../../definitions/profileVariables";

export default function Contact() {

    //REFERENCES
    const footerRef = useRef<any>(null);

    //IS VISIBLE ON SCREEN
    const { isVisible: isFooterVisible } = useElementOnScreen(visibilityOptionsContact, footerRef, true);

    //JSX
    return (
        <footer 
            ref={footerRef}
            className={`footer-contact__container`}
        >
            <div className={`footer-contact__internal-container ${isFooterVisible ? 'internal-container__active' : undefined}`}>
                <div className={`contact__title-container`}>
                    <h4>Contact</h4>
                    <p>Do you have any questions, interest in working together or just want to say hi? Send me a message and I will try my best to get back to you</p>
                </div>
                <div className={`contact__button-container`}>
                    <a 
                        href="mailto:hugoriverosfajardo@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={`send-email__button`}
                    >
                        Say Hello
                    </a>
                </div>
                <SocialMedia />
                <div className={`contact__built`}>
                    <p>Create & Built by Hugo Riveros Fajardo</p>
                </div>
            </div>
        </footer>
    )
}

