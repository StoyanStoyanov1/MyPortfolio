import projectsInfo from "./projectsInfo";
import Details from "../details/Details";

export default function Projects() {
    return (
        <div className="detailsContainer" >
            {projectsInfo.map((project, index) => (
                <Details key={index} info={project} />
            ))
            
            }
        </div>
    )
}