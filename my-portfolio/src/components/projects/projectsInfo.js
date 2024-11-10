import translateProjects from "../../utils/translator/translateProjects";
const projectsInfo = [
    {
        title: 'CertifyMe',
        image: 'CertifyMe.png',
        zoomImage: 'CertifyMe.png',
        info: (language) => translateProjects.certifyMe[language],
        gitHub: 'https://github.com/StoyanStoyanov1/React-CertifyMe',
        deploy: 'https://certify-me-3pfh.onrender.com/',
        technologies: [
            {
                type: 'Frontend',
                content: 'React, HTML, CSS, JavaScript',
            },
            {
                type: 'Backend',
                content: 'Node.js, Express',
            },
            {
                type: 'Database',
                content: 'MongoDB, Mongoose',
            },
            {
                type: 'Authentication',
                content: 'JWT'
            },
            {
                type: 'Styling',
                content: 'Bootstrap, CSS modules',
            },
        ]
    },

];

export default projectsInfo;