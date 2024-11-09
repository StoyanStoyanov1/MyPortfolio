import CertificateDetails from "./CertificateDetails"
import certificateInfo from "./certificateInfo"

export default function Certificates () {
    

    return (
        <div className="certificatesContainer" >
            {certificateInfo.map((certificate, index) => (
                <CertificateDetails key={index} info={certificate} />
            ))
            
            }
        </div>
    )
}