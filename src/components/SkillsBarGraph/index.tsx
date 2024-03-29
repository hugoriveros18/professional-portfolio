import React, { useEffect, useState, useRef } from "react";
import './styles.css';
import useElementOnScreen from "../../hooks/useElementOnScreen";
import { visibilityOptions } from "../../definitions/profileVariables";

export default function SkillsBarGraph ({ title, skillPercentage }: SkillBarGraphProps) {

    //REFERENCES
    const graphBarsContainerRef = useRef<any>(null);

    //IS VISIBLE ON SCREEN
    const { isVisible: isGraphBarsContainerVisible } = useElementOnScreen(visibilityOptions, graphBarsContainerRef, true);

    //JSX
    return (
        <div
            className={`skills-bar__general-container`}
            ref={graphBarsContainerRef} 
        >
            <div className={`skills-bar__title`}>
                <h4>{title}</h4>
            </div>
            <div className={`skills-bar__bar-graph`}>
                <div style={isGraphBarsContainerVisible ? { width: skillPercentage } : {width: "0%"}}></div>
            </div>
        </div>
    )
}