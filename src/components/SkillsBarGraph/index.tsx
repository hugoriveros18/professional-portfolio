import React from "react";
import './styles.css';

const SkillsBarGraph = ({ title, skillPercentage, isGraphBarsContainerVisible }: SkillBarGraphProps) => {


    //JSX
    return (
        <div className={`skills-bar__general-container`}>
            <div className={`skills-bar__title`}>
                <h4>{title}</h4>
            </div>
            <div className={`skills-bar__bar-graph`}>
                <div style={isGraphBarsContainerVisible ? { width: skillPercentage } : {width: "0%"}}></div>
            </div>
        </div>
    )
}

export default SkillsBarGraph;