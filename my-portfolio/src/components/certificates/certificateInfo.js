import translateCertifictes from "../../utils/translator/translateCertificates";
import translateDetails from "../../utils/translator/translateDetails";

const certificateInfo = [
    {
        title: 'HTML-CSS',
        image: 'HTML-CSS.jfif',
        zoomImage: 'HTML-CSS-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '12.2023 - 02.2024',
        info: (language) => translateCertifictes.htmlCssInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/HTML-CSS'
       }, 
    {
        title: 'PostgreSQL',
        image: 'PostgreSQL.jfif',
        zoomImage: 'PostgreSQL-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '10.2023 - 12.2023',
        info: (language) => translateCertifictes.postgreSQLInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/PostgreSQL'
       }, 
    {
        title: 'Python ORM',
        image: 'Python-ORM.jfif',
        zoomImage: 'Python-ORM-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '10.2023 - 12.2023',
        info: (language) => translateCertifictes.pythonORMInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/ORM-with-Python'
       }, 
    {
        title: 'Python OOP',
        image: 'Python-OOP.jfif',
        zoomImage: 'Python-OOP-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '09.2023 - 12.2023',
        info: (language) => translateCertifictes.pythonOOPInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/OOP-with-Python'
       }, 
    {
        title: 'Python Advanced',
        image: 'Python-Advanced.jfif',
        zoomImage: 'Python-Advanced-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '06.2023 - 08.2023',
        info: (language) => translateCertifictes.pythonAdvancedInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/Python-Advanced'
       }, 
    {
        title: 'Python Fundamentals',
        image: 'Python-Fundamentals.jfif',
        zoomImage: 'Python-Fundamentals-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '03.2023 - 06.2023',
        info: (language) => translateCertifictes.pythonFundamentalsInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/Python-Fundamental'
       },   
    {
        title: 'Python Basic',
        image: 'Python-Basic.jfif',
        zoomImage: 'Python-Basic-More.jpeg',
        kurs: (language) => `Soft Uni - ${translateDetails.country[language]}`,
        date: '01.2023 - 03.2023',
        info: (language) => translateCertifictes.pythonBasicInfo[language],
        grade: (language) => `${translateDetails.grade[language]}: ${translateDetails.excelent[language]}`,
        gitHub: 'https://github.com/StoyanStoyanov1/SoftUni-Fundamental-Exercises'
    },   
]

export default certificateInfo;