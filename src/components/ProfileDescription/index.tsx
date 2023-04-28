import React, { useRef } from "react";
import { visibilityOptions } from "../../definitions/profileVariables";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import './styles.css';

type ProfileDescriptionProps = {
    assignment: string
    index: number
}

export default function ProfileDescription({assignment, index}:ProfileDescriptionProps) {

    //REFERENCES
    const descriptionContainerRef = useRef<any>(null);

    //IS VISIBLE ON SCREEN
    const { isVisible: isDescriptionVisible } = useElementOnScreen(visibilityOptions, descriptionContainerRef, true);

    //JSX
    return(
        <li 

            ref={descriptionContainerRef} 
        >
            <p 
                className={`description-text ${(index + 1) % 2 === 0 ? 'description-text-even' : 'description-text-odd'} ${isDescriptionVisible && 'description-visible'}`}
            >
                {assignment}
            </p>
        </li>
    )
}
