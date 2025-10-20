import type { Projects } from "../types/project";

export const projects: Projects[] = [
    {
        name: "AI ApCard",
        description: "Ainda em desenvolvimendo, essa plataforma auxiliará o usuário a gerar cartas de apresentação de acordo com o tema escolhido, tudo de forma dinâmica e intuitiva utilizando Inteligência Artificial.",
        imageurl: '/projects/aiapcard.jpg',
        role: "Desenvolvedor FullStack & Design UI/UX",
        technologies: "React, Tailwind CSS, TypeScript, API, Adobe Photoshop, Vegas PRO, Figma",
        deploy: "#",
        github: "https://github.com/AugustoAlmondes/AI-ApCard"
    },
    {
        name: "Marvel Comics Store",
        description: "A Marvel Comics Store é uma aplicação React + TypeScript que simula uma loja virtual de HQs da Marvel. O projeto foi pensado mobile-first, com UI autoral desenvolvida no Figma e finalizada com recursos de estilização no Tailwind CSS e Framer Motion.",
        imageurl: '/projects/marvel.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "React, Tailwind CSS, TypeScript, API, Adobe Photoshop, Figma",
        deploy: "https://marvel-comic-store.netlify.app",
        github: "https://github.com/AugustoAlmondes/Marvel-Comics-Store"
    },
    {
        name: "Dashboard COVID-19",
        description: "Dashboard interativo para visualização de dados relacionados à COVID-19, utilizando React.js e CSS modules. Desenvolvi o design visual com Figma e Photoshop. O projeto consome dados de uma API externa para exibir estatísticas atualizadas, como casos confirmados, recuperados e óbitos, em gráficos dinâmicos e responsivos. Implementei filtros por país e data, além de um design intuitivo e adaptável para diferentes telas. O deploy foi realizado no Netlify.",
        imageurl: '/projects/Dashboard.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "React, JavaScript, CSS modules, API, Figma, Photoshop",
        deploy: "https://dashboard-cvd.netlify.app/",
        github: "https://github.com/AugustoAlmondes/Dashboard-on-covid19"
    },
    {
        name: "Workfinder - Busca de Empregos",
        description: "Plataforma web para cadastro e busca de empregos. No front-end, criei interfaces responsivas com React.js e design visual no Figma. No backend, utilizei Node.js, NestJS e Prisma ORM para gerenciar dados em MySQL. Realizei a integração total entre front-end e backend, com deploy via Netlify (front-end) e Railway (Banco de dados e API).",
        imageurl: '/projects/workfinder.jpg',
        role: "Desenvolvedor FullStack & Design UI/UX",
        technologies: "React, CSS modules, Prisma ORM, NestJS, MySQL, Node.js, API, Figma, Photoshop",
        deploy: "https://workfinder-job.netlify.app/",
        github: "https://github.com/AugustoAlmondes/WorkFinder-Site/tree/responsive"
    },
    {
        name: "Boost Video - Hackathon Klike.ai",
        description: "Projeto desenvolvido durante hackathon promovido pela Klike.ai. Fui responsável pelo design visual (Figma e Photoshop), implementação das interfaces responsivas com React.js e CSS modules, além de produzir edições de vídeo usados na plataforma final (Vegas PRO).",
        imageurl: '/projects/boostvideo.jpg',
        role: "Desenvolvedor FullStack & Design UI/UX",
        technologies: "React, CSS modules, JavaScript, Vegas PRO, Figma, Photoshop",
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
    {
        name: "Currency Converter React",
        description: "Aplicação web desenvolvida com React.js para conversão de moedas em tempo real. O projeto consome dados de uma API externa para obter as taxas de câmbio atualizadas, permitindo ao usuário converter valores entre diversas moedas de forma prática e intuitiva.",
        imageurl: '/projects/moeda.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "React, CSS, JavaScript, API",
        deploy: "https://benevolent-buttercream-ef8d7d.netlify.app",
        github: "https://github.com/AugustoAlmondes/Currency-Converter-React"
    },
    {
        name: "Search Github User",
        description: "Aplicação web construída com React.js que consome a API pública do GitHub para buscar e exibir informações de perfis de usuários. A interface permite inserir um nome de usuário e visualizar dados como avatar e seguidores.",
        imageurl: '/projects/github.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "React, CSS modules, TypeScript, API",
        deploy: "https://user-github-search.netlify.app",
        github: "https://github.com/AugustoAlmondes/Search-Github-User"
    },
    {
        name: "WikiSearch",
        description: "WikiSearch é um buscador moderno e intuitivo que utiliza a API da Wikipedia para trazer resultados de artigos em tempo real. Com um design clean e responsivo.",
        imageurl: '/projects/wiki.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "HTML, CSS, JavaScript, API",
        deploy: "https://fastsearchwiki.netlify.app",
        github: "https://github.com/AugustoAlmondes/Fast-Search-Wiki"
    },
    {
        name: "CEP Search React",
        description: "Um buscador de CEP sofisticado com tema dark moderno, combinando elegância e funcionalidade. Desenvolvido em React, consome a API ViaCEP para fornecer informações precisas de endereços em tempo real.",
        imageurl: '/projects/cep.jpg',
        role: "Desenvolvedor Front-end & Design UI/UX",
        technologies: "React, CSS, JavaScript, API",
        deploy: "https://cep-search-react.netlify.app",
        github: "https://github.com/AugustoAlmondes/CEP-Search-React"
    }
]