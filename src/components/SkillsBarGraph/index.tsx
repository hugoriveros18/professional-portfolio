import React, { useEffect, useState } from "react";
import './styles.css';

const SkillsBarGraph = ({title, skillPercentage}:SkillBarGraphProps) => {

    //STATES
    const [firstRender, setFirstRender] = useState<boolean>(false);

    //EFFECTS
    useEffect(() => {
        setFirstRender(true);
    },[])

    //JSX
    return (
        <div className={`skills-bar__general-container`}>
            <div className={`skills-bar__title`}>
                <h4>{title}</h4>
            </div>
            <div className={`skills-bar__bar-graph`}>
                <div style={firstRender ? {translate: skillPercentage} : {}}></div>
            </div>
        </div>
    )
}

export default SkillsBarGraph;