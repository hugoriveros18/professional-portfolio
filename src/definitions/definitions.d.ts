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

