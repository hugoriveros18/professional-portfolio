import React, { forwardRef, useRef } from "react";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import { visibilityOptions } from "../../definitions/profileVariables";
import './styles.css';

const ProfileIntroduction = forwardRef((props, ref: any) => {

    //JSX
    return (
        <div
            className={`about-me__container`}
            ref={ref}
        >
            <div
                className={`about-me__welcome-message`}
            >
                <h3>¡Hi, I'm Hugo! Thanks for being here.</h3>
                <p>Since I started my journey as a developer I am constantly amazed by the impact of technology around the world, that's one of the reasons why I love my profession and keep learning to develop software that positively impacts other people's lives. I am a frontend developer committed to creating high quality applications, mainly with experience in e-commerce development, focused on results and happy customers.</p>
            </div>
        </div>
    )
});

export default ProfileIntroduction;