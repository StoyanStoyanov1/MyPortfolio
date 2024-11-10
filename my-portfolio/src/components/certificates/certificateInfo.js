import translateCertifictes from "../../utils/translator/translateCertificates";
import translateDetails from "../../utils/translator/translateDetails";

const certificateInfo = [
    {title: 'Python Advanced',
        certificateImage: 'Python-Advanced.jfif',
        zoomImage: 'Python-Advanced-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '06.2023 - 08.2023',
        info: (language) => translateCertifictes.pythonAdvancedInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/Python-Advanced'
       }, 
    {title: 'Python Fundamentals',
        certificateImage: 'Python-Fundamentals.jfif',
        zoomImage: 'Python-Fundamentals-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '03.2023 - 06.2023',
        info: (language) => translateCertifictes.pythonFundamentalsInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/Python-Fundamental'
       },   
    {title: 'Python Basic',
     certificateImage: 'Python-Basic.jfif',
     zoomImage: 'Python-Basic-More.jpeg',
     kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
     date: '01.2023 - 03.2023',
     info: (language) => translateCertifictes.pythonBasicInfo[language],
     grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
     gitHub: 'https://github.com/StoyanStoyanov1/SoftUni-Fundamental-Exercises'
    },   
]

export default certificateInfo;