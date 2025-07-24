import type { Projects } from "../types/projects";

export const projects: Projects[] = [
    {
        name: "Dashboard COVID-19",
        description: "Dashboard interativo para visualização de dados relacionados à COVID-19, utilizando React.js e CSS modules. Desenvolvi o design visual com Figma e Photoshop. O projeto consome dados de uma API externa para exibir estatísticas atualizadas, como casos confirmados, recuperados e óbitos, em gráficos dinâmicos e responsivos. Implementei filtros por país e data, além de um design intuitivo e adaptável para diferentes telas. O deploy foi realizado no Netlify.",
        imageurl: '/projects/Dashboard.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "React, JavaScript, CSS modules",
        deploy: "https://dashboard-augustoalmondes.vercel.app/",
        github: "https://github.com/AugustoAlmondes/dashboard"
    },
    {
        name: "Workfinder - Busca de Empregos",
        description: "Plataforma web para cadastro e busca de empregos. No front-end, criei interfaces responsivas com React.js e design visual no Figma. No backend, utilizei Node.js, NestJS e Prisma ORM para gerenciar dados em MySQL. Realizei a integração total entre front-end e backend, com deploy via Netlify (front-end) e Railway (Banco de dados e API).",
        imageurl: '/projects/workfinder.jpg',
        role: "Desenvolvedor FullStack & Design UI/UX",
        technologies: "React, CSS modules, Prisma ORM, NestJS, MySQL, Node.js, Figma, Photoshop",
        deploy: "https://workfinder-job.netlify.app/",
        github: "https://github.com/AugustoAlmondes/WorkFinder-Site/tree/responsive"
    },
    {
        name: "Boost Video - Hackathon Klike.ai",
        description: "Projeto desenvolvido durante hackathon promovido pela Klike.ai. Fui responsável pelo design visual (Figma e Photoshop), implementação das interfaces responsivas com React.js e CSS modules, além de produzir edições de vídeo usados na plataforma final (Vegas PRO).",
        imageurl: '/projects/boostvideo.jpg',
        role: "Desenvolvedor FullStack & Design UI/UX",
        technologies: "React, CSS modules, Vegas PRO, Figma, Photoshop",
        deploy: "https://boost-ads.netlify.app/",
        github: "https://github.com/AugustoAlmondes/Boost-video"
    },
    {
        name: "Landing Page Donut",
        description: "Página promocional de donuts desenvolvida com React.js, destacando animações suaves, responsividade e design atrativo. Implementei um menu interativo para mobile e deploy no Netlify.",
        imageurl: '/projects/donut.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "React, CSS, JavaScript",
        deploy: "https://donut-page.netlify.app/",
        github: "https://github.com/AugustoAlmondes/Landing-Page-React"
    },
]