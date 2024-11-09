import { useState } from 'react';

export default function CertificateDetails ({info}){
    const [showInfo, setShowInfo] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

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
               <p>Info</p>
            </div>
            {isZoomed && <div className='overlay' onClick={handleZoomClick} />}
           
        </div>
    )
}