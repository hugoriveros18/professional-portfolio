const profileSkills: SkillBarGraphProps[] = [
    {
        title: "HTML",
        skillPercentage: "70%"
    },
    {
        title: "CSS",
        skillPercentage: "70%"
    },
    {
        title: "Javascript",
        skillPercentage: "65%"
    },
    {
        title: "Typescript",
        skillPercentage: "60%"
    },
    {
        title: "React",
        skillPercentage: "60%"
    },
    {
        title: "VTEX SF",
        skillPercentage: "60%"
    },
    {
        title: "SASS",
        skillPercentage: "40%"
    }
];

const visibilityOptions = {
    root: null, //Define el elemento padre que sera utilizado como referencia para deternminar si el objeto es visible o no. Si se desea que se realiza con base al 'viewport' se define con null
    rootMargin: "0px", //añade un margen al elemento 'root' antes de computar las intersecciones
    threshold: 0 //define el procentaje del elemento hijo que debe ser visible para que se ejecute la funcion callback
}

const jobFunctions = [
    "Design, plan and implement solutions that guarantee the success of assigned projects, making the necessary translation of the definitions of project design in code.",
    "Build the graphical interface of the websites and structure the contents in a semantic way controlling the fonts, templates, design forms, user experience, information maps, accessibility and interactivity.",
    "Interpret the business logic and needs of the client and/or consumer, developing all the components necessary and functional dynamics to integrate the graphical interface."
]

export { profileSkills, visibilityOptions, jobFunctions };