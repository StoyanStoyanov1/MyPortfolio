import 'flag-icons/css/flag-icons.min.css';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom'

//context and utils
import paths from '../../utils/paths';
import translateButtons from '../../utils/translator/translateButtons';

export default function Navigation() {
    const [language, setLanguage] = useLanguage();

    return (
        <header>
            <nav>
                <div className='flags'>
                    <span className="fi fi-de" onClick={() => setLanguage('de')} > </span>
                    <span className="fi fi-gb" onClick={() => setLanguage('en')}> </span>
                    <span className="fi fi-bg" onClick={() => setLanguage('bg')}> </span>  
                </div>
                <div className='nav-buttons'>
                    <Link to={paths.aboutMe}>{translateButtons.aboutMe[language]}</Link>
                    <Link to={paths.certificates}>{translateButtons.certificates[language]}</Link>
                    <Link to={paths.projects}>{translateButtons.projects[language]}</Link>
                </div>
            
            </nav>
        </header>
    )
}