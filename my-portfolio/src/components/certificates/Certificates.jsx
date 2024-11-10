import Details from "../details/Details";
import certificateInfo from "./certificateInfo";

export default function Certificates () {
    return (
        <div className="detailsContainer" >
            {certificateInfo.map((certificate, index) => (
                <Details key={index} info={certificate} />
            ))
            
            }
        </div>
    )
}