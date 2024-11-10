import translateCertifictes from "../../utils/translator/translateCertificates";

const certificateInfo = [
    {title: 'Python Advanced',
        certificateImage: 'Python-Advanced.jfif',
        zoomImage: 'Python-Advanced-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateCertifictes.country[language]}`,
        date: '06.2023 - 08.2023',
        info: (language) => translateCertifictes.pythonAdvancedInfo[language],
        grade: (language) => `${translateCertifictes.grade[language]}: ${translateCertifictes.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/Python-Advanced'
       }, 
    {title: 'Python Fundamentals',
        certificateImage: 'Python-Fundamentals.jfif',
        zoomImage: 'Python-Fundamentals-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateCertifictes.country[language]}`,
        date: '03.2023 - 06.2023',
        info: (language) => translateCertifictes.pythonFundamentalsInfo[language],
        grade: (language) => `${translateCertifictes.grade[language]}: ${translateCertifictes.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/Python-Fundamental'
       },   
    {title: 'Python Basic',
     certificateImage: 'Python-Basic.jfif',
     zoomImage: 'Python-Basic-More.jpeg',
     kurs: (language) => `Soft Uni - ${translateCertifictes.country[language]}`,
     date: '01.2023 - 03.2023',
     info: (language) => translateCertifictes.pythonBasicInfo[language],
     grade: (language) => `${translateCertifictes.grade[language]}: ${translateCertifictes.excelent[language]}`,
     gitHub: 'https://github.com/StoyanStoyanov1/SoftUni-Fundamental-Exercises'
    },   
]

export default certificateInfo;