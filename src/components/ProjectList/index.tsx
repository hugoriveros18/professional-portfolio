import { useMemo } from "react";
import { allProjects } from "../../definitions/projectsVariables";
import './styles.css';

export default function ProjectList({currentTab}:ProjectListProps) {

    //ACTIVE PROJECTS
    const activeProjects = useMemo(() => {
        if(currentTab === "all") {
            return allProjects;
        }

        return allProjects.filter(project => project.language === currentTab)
    }, [currentTab])


    //JSX
    return (
        <ul className={`projectsList__container`}>
            {
                activeProjects.map((project) => {
                    return (
                        <li 
                            key={project.title}
                            className={`projectsList__element`}
                            style={{backgroundImage: `url(${project.backgroundImage})`}}
                        >
                            {/* <img src={project.backgroundImage}/> */}
                        </li>
                    )
                })
            }
        </ul>
    )
}


