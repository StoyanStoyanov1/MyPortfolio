import translateAboutMe from "../../utils/translator/translateAboutMe"
import { useLanguage } from "../../context/LanguageContext"

export default function AboutMe () {
    const [ language ] = useLanguage();

    return (
        <div className="aboutMeContainer">
            <div className="aboutMe">

                    <div className='profilPicture'>
                    </div>
                    <h1>Stoyan Stoyanov</h1>
                    <p>{translateAboutMe[language]}</p>
                
                
            </div>
        </div>
    )
}