import React, { useEffect, useState, useRef } from "react";
import './styles.css';

const SkillsBarGraph = ({ title, skillPercentage, isGraphBarsContainerVisible }: SkillBarGraphProps) => {

    //STATES
    const [firstRender, setFirstRender] = useState<boolean>(false);

    //EFFECTS
    useEffect(() => {
        setFirstRender(true);
    }, [])

    //JSX
    return (
        <div
            className={`skills-bar__general-container`} 
        >
            <div className={`skills-bar__title`}>
                <h4>{title}</h4>
            </div>
            <div className={`skills-bar__bar-graph`}>
                <div style={isGraphBarsContainerVisible ? { translate: skillPercentage } : {}}></div>
            </div>
        </div>
    )
}

export default SkillsBarGraph;