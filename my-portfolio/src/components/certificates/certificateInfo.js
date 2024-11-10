import translateCertifictes from "../../utils/translator/translateCertificates";

const certificateInfo = [
    {title: 'Python Fundamentals',
        certificateImage: 'Python-Fundamentals.jfif',
        zoomImage: 'Python-Fundamentals-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateCertifictes.country[language]}`,
        date: '03.2023 - 06.2023',
        info: (language) => translateCertifictes.pythonFundamentalsInfo[language],
        grade: (language) => `${translateCertifictes.grade[language]}: ${translateCertifictes.excelent[language]}`
       },   
    {title: 'Python Basic',
     certificateImage: 'Python-Basic.jfif',
     zoomImage: 'Python-Basic-More.jpeg',
     kurs: (language) => `Soft Uni - ${translateCertifictes.country[language]}`,
     date: '01.2023 - 03.2023',
     info: (language) => translateCertifictes.pythonBasicInfo[language],
     grade: (language) => `${translateCertifictes.grade[language]}: ${translateCertifictes.excelent[language]}`
    },   
]

export default certificateInfo;