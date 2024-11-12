import projectsInfo from "./projectsInfo";
import Details from "../details/Details";
import translateButtons from "../../utils/translator/translateButtons";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
    const [ language ] = useLanguage();

    return (
        <div className="detailsContainer" >
            <h1>{translateButtons.projects[language]}</h1>
            {projectsInfo.map((project, index) => (
                <Details key={index} info={project} />
            ))
            
            }
        </div>
    )
}