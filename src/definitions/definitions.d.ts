type StartingScreenProps = {
    reference: any
    scrollToRef: (sectionReference:any) => void
}

type SkillBarGraphProps = {
    title: string
    skillPercentage: string
    isGraphBarsContainerVisible?: boolean
}

type UseActiveProjectTabProps = {
    allRef: any
    reactRef: any
    vueRef: any
    javascriptRef: any
}

type programmingLanguage = {
    id: number
    name: string
    refTerm: string
}

type Project = {
    title: string
    description: string
    webSite?: string
    backgroundImage: string
    githubRepository: string
    language: string
}

type ProjectListProps = {
    currentTab: string
}

type ProjectListElementProps = {
    project: Project
    projectInfoActive: string
    setProjectInfoActive: React.Dispatch<React.SetStateAction<string>>
}

type IconProps = {
    activeButton: string
}

type MenuNavProps = {
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

type MenuBarProps = {
    isMenuActive: boolean
    profileRef: React.MutableRefObject<any>
    skillsRef: React.MutableRefObject<any>
    jobRef: React.MutableRefObject<any>
    projectsRef: React.MutableRefObject<any>
    contactRef: React.MutableRefObject<any>
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>
    scrollToRef: (sectionReference: any) => void
    scrollToRefEnd: (sectionReference: any) => void
}

