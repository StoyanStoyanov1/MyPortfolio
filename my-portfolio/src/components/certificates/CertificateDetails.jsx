import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function CertificateDetails ({info}){
    const [showInfo, setShowInfo] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [ language ] = useLanguage();

    const backgroundStyle = {
        backgroundImage: `url('/images/${info.certificateImage}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
    };

    const backgroundZoomStyle = {
        backgroundImage: `url('/images/${info.zoomImage}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
    }

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
               <div 
               className={`certificateFoto ${isZoomed ? 'zoomed' : ''}`}
               style={isZoomed ? backgroundZoomStyle : backgroundStyle} 
               onClick={handleZoomClick}
               >

               </div>
               <div className='info'>
                <h2>{info.kurs(language)}</h2>
                <p>{info.date}</p>
                <p>{info.info(language)}</p>
                {info.grade && <p>{info.grade(language)}</p>}
               </div>
            </div>
            {isZoomed && <div className='overlay' onClick={handleZoomClick} />}
           
        </div>
    )
}