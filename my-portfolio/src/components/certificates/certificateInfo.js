import translateCertifictes from "../../utils/translator/translateCertificates";
import { useLanguage } from "../../context/LanguageContext";

const certificateInfo = [
    {title: 'Python Basic',
     certificateImage: 'Python-Basic.jfif',
     zoomImage: 'Python-Basic-More.jpeg',
     kurs: (language) => `Soft Uni - ${translateCertifictes.country[language]}`,
     date: '01.2023 - 03.2023',
     info: (language) => translateCertifictes.info[language],
     grade: (language) => `${translateCertifictes.grade[language]}: ${translateCertifictes.excelent[language]}`
    },   
]

export default certificateInfo;