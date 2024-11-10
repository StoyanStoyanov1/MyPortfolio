import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translateCertifictes from '../../utils/translator/translateCertificates';

export default function CertificateDetails ({info}){
    const [showInfo, setShowInfo] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [ language ] = useLanguage();

    const handleZoomClick = () => {
        setIsZoomed(!isZoomed);
    }

    return (
        <div className='certificateDetails' >
            <div className='certificateTitle' 
            onClick={() => setShowInfo(!showInfo)}
            > 
            <div className='titleCertificate'>
                <h1>{info.title} </h1>
                <p>{showInfo ? '➖' : '➕'}</p>
            </div>
                
            </div>

            
            <div className={`certificateInfo ${showInfo ? 'showInfo': ''}`} > 
            <div className={`certificateFoto ${isZoomed ? 'zoomed' : ''}`} onClick={handleZoomClick}>
    {isZoomed ? (
        <img
            src={`/images/${info.zoomImage}`}
            alt="Zoomed certificate"
        />
    ) : (
        <img
            src={`/images/${info.certificateImage}`}
            alt="Certificate"
        />
    )}
</div>
               <div className='info'>
                <h2>{info.kurs(language)}</h2>
                <p>{info.date}</p>
                <p>{info.info(language)}</p>
                <p>{translateCertifictes.exercises[language]}: <a href={info.gitHub}>GitHub</a></p>
                {info.grade && <p>{info.grade(language)}</p>}
               </div>
            </div>
            {isZoomed && <div className='overlay' onClick={handleZoomClick} />}
           
        </div>
    )
}