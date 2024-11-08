import { useState } from 'react';

export default function CertificateDetails ({data}){
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className='certificateDetails' >
            <div className='certificateTitle' onClick={() => setShowInfo(!showInfo)}> 
                <h1>Python Basic</h1>
            </div>

            
            <div className={`certificateInfo ${showInfo ? 'showInfo': ''}`} > 
               <div className='certificateFoto'>

               </div>
               <p>Info</p>
            </div>
            
           
        </div>
    )
}