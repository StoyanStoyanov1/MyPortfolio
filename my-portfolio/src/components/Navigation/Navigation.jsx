import 'flag-icons/css/flag-icons.min.css';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom'

import translateButtons from '../../utils/translator/translateButtons';

export default function Navigation() {
    const [language, setLanguage] = useLanguage();

    return (
        <header>
            <button className='flags'>
                 
            </button>
            <nav>
               
                <div className='flags'>
                    <span class="fi fi-de" onClick={() => setLanguage('de')} > </span>
                    <span class="fi fi-gb" onClick={() => setLanguage('en')}> </span>
                    <span class="fi fi-bg" onClick={() => setLanguage('bg')}> </span>  
                </div>
                <div className='nav-buttons'>
                    <Link to='/'>{translateButtons.aboutMe[language]}</Link>
                    <Link to='/'>{translateButtons.certificates[language]}</Link>
                    <Link to='/'>{translateButtons.projects[language]}</Link>
                </div>
            
            </nav>
        </header>
    )
}