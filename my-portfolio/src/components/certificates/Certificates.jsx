import Details from "../details/Details";
import certificateInfo from "./certificateInfo";
import translateButtons from "../../utils/translator/translateButtons"
import { useLanguage } from "../../context/LanguageContext";

export default function Certificates () {
    const [ language ] = useLanguage();

    console.log(language)

    return (
        <div className="detailsContainer" >
            <h1>{translateButtons.certificates[language]}</h1>
            {certificateInfo.map((certificate, index) => (
                <Details key={index} info={certificate} />
            ))
            
            }
        </div>
    )
}