import React from "react";
import MenuIcon from '../../assets/menu-icon.svg';
import CloseIcon from '../../assets/close-info-icon.svg';
import ProfileIcon from '../../assets/hugo-menu-icon.svg';
import SkillsIcon from '../../assets/skills-menu-icon.svg';
import JobIcon from '../../assets/work-menu-icon.svg';
import ProjectsIcon from '../../assets/project-menu-icon.svg';
import ContactIcon from '../../assets/contact-menu-icon.svg';
import './styles.css';

export function MenuNav({setIsMenuActive}:MenuNavProps) {

    //METHODS
    const handleMenuOpen = () => {
    setIsMenuActive(true);
    document.body.style.overflow = 'hidden';
    }

    //JSX
    return (
        <nav className={`menu__container`}>
            <h2>Hugo Felipe Riveros Fajardo</h2>
            <img 
                src={MenuIcon}
                onClick={handleMenuOpen}
            />
        </nav>
    )
}

export function MenuBar({
    isMenuActive,
    profileRef,
    skillsRef,
    jobRef,
    projectsRef,
    contactRef,
    setIsMenuActive,
    scrollToRef,
    scrollToRefEnd
}:MenuBarProps) {

    //METHODS
    const handleMenuClose = () => {
        setIsMenuActive(false);
        document.body.style.overflow = 'unset';
    }  
    
    const handleSelectionNormal = (reference:React.MutableRefObject<any>) => {
        handleMenuClose();
        scrollToRef(reference);
    }

    const handleSelectionEnd = (reference:React.MutableRefObject<any>) => {
        handleMenuClose();
        scrollToRefEnd(reference);
    }

    //JSX
    return (
        <div className={`menu-bar__full-container ${isMenuActive ? 'full-menu__active' : 'full-menu__inactive'}`}>
            <div className={`menu-bar__internal-container ${isMenuActive ? 'internal-menu__active' : undefined}`}>
                <img
                    src={CloseIcon}
                    className={`menu-bar__close-icon`}
                    onClick={handleMenuClose}
                />

                <ul className={`menu-bar__items-list`}>
                    <li
                        className={`item-list__menu-element profile`}
                        onClick={() => handleSelectionNormal(profileRef)}
                    >
                        <img src={ProfileIcon}/>
                        <h5>About Me</h5>
                    </li>

                    <li
                        className={`item-list__menu-element skills`}
                        onClick={() => handleSelectionEnd(skillsRef)}
                    >
                        <img src={SkillsIcon}/>
                        <h5>Skills</h5>
                    </li>

                    <li 
                        className={`item-list__menu-element job`}
                        onClick={() => handleSelectionEnd(jobRef)}
                    >
                        <img src={JobIcon}/>
                        <h5>Work</h5>
                    </li>

                    <li 
                        className={`item-list__menu-element projects`}
                        onClick={() => handleSelectionNormal(projectsRef)}
                    >
                        <img src={ProjectsIcon}/>
                        <h5>Projects</h5>
                    </li>

                    <li 
                        className={`item-list__menu-element contact`}
                        onClick={() => handleSelectionNormal(contactRef)}
                    >
                        <img src={ContactIcon}/>
                        <h5>Contact</h5>
                    </li>

                </ul>
            </div>
        </div>
    )
}

