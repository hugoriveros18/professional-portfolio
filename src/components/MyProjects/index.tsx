import React, { useRef, useState, useMemo, useEffect } from "react";
import './styles.css';
import useActiveProjectTab from "../../hooks/useActiveProjectTab";

export default function MyProjects() {

    //REFERENCES
    const allRef = useRef<any>(null);
    const reactRef = useRef<any>(null);
    const vtexRef = useRef<any>(null);
    const vueRef = useRef<any>(null);
    
    //PROJECT TABS STATE
    const {
        activeTab,
        borderPosition,
        borderwidth,
        handleTabChange
    } = useActiveProjectTab({allRef, reactRef, vtexRef, vueRef})

    //JSX
    return(
        <div className={`myprojects__global-container`}>

            <header className={`myprojects__header-container`}>
                <h4>My Projects</h4>
                <p>These are some of the personal projects I have worked on</p>
            </header>

            <ul className={`myprojects__menu-container`}>
                <li 
                    ref={allRef} 
                    onClick={() => handleTabChange('all')}
                    className={`${activeTab === 'all' ? 'myprojects__menu-item--active' : undefined}`}
                >
                    All
                </li>
                <li 
                    ref={reactRef} 
                    onClick={() => handleTabChange('react')}
                    className={`${activeTab === 'react' ? 'myprojects__menu-item--active' : undefined}`}
                >
                    REACT
                </li>
                <li 
                    ref={vtexRef} 
                    onClick={() => handleTabChange('vtex')}
                    className={`${activeTab === 'vtex' ? 'myprojects__menu-item--active' : undefined}`}
                >
                    VTEX COMPONENTS
                </li>
                <li 
                    ref={vueRef} 
                    onClick={() => handleTabChange('vue')}
                    className={`${activeTab === 'vue' ? 'myprojects__menu-item--active' : undefined}`}
                >
                    VUE
                </li>
                <div 
                    className="myprojects__menu-container--animation"
                    style={{left: borderPosition, width: borderwidth}}
                ></div>
                <div
                    className="myprojects__menu-background--animation"
                    style={{left: borderPosition, width: borderwidth}}
                ></div>
            </ul>

        </div>
    )
}
