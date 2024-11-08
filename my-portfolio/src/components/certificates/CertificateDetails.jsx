import { useState } from 'react';

export default function CertificateDetails ({data}){
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className='certificateDetails' >
            <div className='certificateTitle' onClick={() => setShowInfo(!showInfo)}> 
                <h1>Python Basic</h1>
            </div>

            
            <div className={`certificateInfo ${showInfo ? 'showInfo': ''}`} > 
                <p>Това е информацията, която се показва при натискане на бутона!</p>
            </div>
           
        </div>
    )
}