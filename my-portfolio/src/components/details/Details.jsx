import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translateDetails from '../../utils/translator/translateDetails';

export default function Details ({info}){
    const [showInfo, setShowInfo] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [ language ] = useLanguage();

    const handleZoomClick = () => {
        setIsZoomed(!isZoomed);
    }

    return (
        <div className='details' >
            <div className='detailsTitle' 
            onClick={() => setShowInfo(!showInfo)}
            > 
            <div className='titleDetails'>
                <h1>{info.title} </h1>
                <p>{showInfo ? '➖' : '➕'}</p>
            </div>
                
            </div>

            
            <div className={`detailsInfo ${showInfo ? 'showInfo': ''}`} > 
            <div className={`detailsFoto ${isZoomed ? 'zoomed' : ''}`} onClick={handleZoomClick}>
            {isZoomed ? (
        <img
            src={`/images/${info.zoomImage}`}
            alt="Zoomed details"
        />
    ) : (
        <img
            src={`/images/${info.image}`}
            alt="Details"
        />
    )}
            </div>
               <div className='info'>
                {info.kurs && 
                <h2>{info.kurs(language)}</h2>}
                {info.date && <p className='detailsDate'>{info.date}</p>}
                <p>{info.info(language)}</p>
                {info.technologies && (
                    <div className='technologies'>
                        {info.technologies.map((technologie, index) => (
                            <p key={index}><span>{technologie.type} -</span> {technologie.content}</p>
                        ))}
                    </div>
                )}
                <p className='detailsView'>{translateDetails.more[language]} {'->'} <a href={info.gitHub}>GitHub</a></p>
                {info.grade && <p className='detailsView'>{info.grade(language)}</p>}
                <a href={info.deploy} style={{fontSize: '18px'}} >{info.deploy}</a>
               </div>
            </div>
            {isZoomed && <div className='overlay' onClick={handleZoomClick} />}
           
        </div>
    )
}