import { useEffect, useMemo, useState } from "react";
import { allProjects } from "../../definitions/projectsVariables";
import closeIcon from "../../assets/close-info-icon.svg";
import githubIcon from "../../assets/github-info-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import infoIcon from "../../assets/info-icon.svg";
import './styles.css';

export default function ProjectList({currentTab}:ProjectListProps) {

    //STATES
    const [projectInfoActive, setProjectInfoActive] = useState<string>('');
    
    //ACTIVE PROJECTS
    const activeProjects = useMemo(() => {
        setProjectInfoActive('');
        if(currentTab === "all") {
            return allProjects;
        }

        return allProjects.filter(project => project.language === currentTab);
    }, [currentTab])

    //JSX
    return (
        <ul className={`projectsList__container`}>
            {
                activeProjects.map((project) => {
                    return (
                        <ProjectListElement
                            key={project.title}
                            project={project}
                            projectInfoActive={projectInfoActive}
                            setProjectInfoActive={setProjectInfoActive}
                        />
                    )
                })
            }
        </ul>
    )
}

function ProjectListElement({project, projectInfoActive, setProjectInfoActive}: ProjectListElementProps) {

    //STATES
    const [isInformationActive, setIsInformationActive] = useState<boolean>(false);

    //EFFECTS
    useEffect(() => {
        if(projectInfoActive === project.title) {
            setIsInformationActive(true);
        } else {
            setIsInformationActive(false);
        }
    }, [projectInfoActive])

    return (
        <li 
            className={`projectsList__element-container`}
            onMouseEnter={() => setProjectInfoActive(project.title)}
            onMouseLeave={() => setProjectInfoActive('')}
        >
            <div 
                className={`projectsList__element`}
                style={{backgroundImage: `url(${project.backgroundImage})`}}
                onClick={() => setProjectInfoActive(project.title)}
            >
                {
                   !isInformationActive &&
                   <img 
                       src={infoIcon}
                       className={`info-icon`}
                   />
                }
            </div>
            <div className={`listElement__information ${isInformationActive ? 'information-active' : undefined}`}>
                <img 
                    src={closeIcon} 
                    className={`close-icon`}
                    onClick={() => setProjectInfoActive('')}
                />
                <header className={`${isInformationActive ? 'header-footer__active' : undefined}`}>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </header>
                <footer className={`${isInformationActive ? 'header-footer__active' : undefined}`}>
                    <a href={project.githubRepository} target="_blank">
                        <img 
                            src={githubIcon}
                        />
                    </a>
                    {
                        project.webSite &&
                        <a href={project.webSite} target="_blank">
                            <img 
                                src={externalLinkIcon}
                                className={`external-link`}
                            />
                        </a>
                    }
                </footer>
            </div>
        </li>
    )
}


