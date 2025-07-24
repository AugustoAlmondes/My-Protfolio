import { useState, useEffect, useCallback } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Projects = {
    name: string;
    description: string;
    imageurl: string;
    role: string;
    technologies: string;
    deploy: string;
    github: string;
}

const projects: Projects[] = [
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

export default function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToNextProject = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProjectIndex(prev =>
                prev === projects.length - 1 ? 0 : prev + 1
            );
            setIsTransitioning(false);
        }, 300);
    }, []);

    const goToPrevProject = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProjectIndex(prev =>
                prev === 0 ? projects.length - 1 : prev - 1
            );
            setIsTransitioning(false);
        }, 300);
    }, []);

    useEffect(() => {
        const interval = setInterval(goToNextProject, 7000);
        return () => clearInterval(interval);
    }, [goToNextProject]);

    const project = projects[currentProjectIndex];

    return (
        <div className="bg-background text-white rounded-2xl p-10 projects-container">
            <h2 className="text-[3rem] mb-6">Projects</h2>

            <div className={`w-full bg-background-dark p-10 relative rounded-2xl grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 border-background-bright border-2 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                <FaArrowAltCircleRight
                    onClick={goToNextProject}
                    className={`absolute top-1/2 translate-y-[-50%] right-[-20px] text-3xl cursor-pointer hover:text-new-green transition-all duration-300 ease-in-out z-10`}
                    size={40}
                />
                <FaArrowAltCircleLeft
                    onClick={goToPrevProject}
                    className={`absolute top-1/2 translate-y-[-50%] left-[-20px] text-3xl cursor-pointer hover:text-new-green transition-all duration-300 ease-in-out z-10`}
                    size={40}
                />

                <img
                    className={`w-full h-[300px] md:h-full my-auto rounded-lg object-cover transition-transform duration-500 ${isTransitioning ? 'scale-95' : 'scale-100'}`}
                    src={project.imageurl}
                    alt={project.name}
                />

                <div className="flex flex-col gap-2 bg-background p-[20px_10px] transition-transform duration-500">
                    <h3 className="text-2xl mt-4 text-new-green">{project.name}</h3>
                    <p className="text-sm text-justify font-light h-[160px] overflow-y-auto bg-background-dark p-4 rounded-lg">
                        {project.description}
                    </p>

                    <ul>
                        <li>
                            <h5 className={`text-new-pink text-md`}>Cargo</h5>
                            <p className={`ml-4 font-light text-sm h-10`}>{project.role}</p>
                        </li>
                        <li>
                            <h5 className={`text-new-pink text-md`}>Tecnologia</h5>
                            <p className={`ml-4 font-light text-sm h-10`}>{project.technologies}</p>
                        </li>
                        <li>
                            <div className={`flex gap-4 ml-4 text-sm mt-3 text-[#455a81]`}>
                                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className={`flex justify-center items-center gap-2 hover:text-new-green transition-all duration-200 ease-in-out font-light`}>
                                    <FaExternalLinkAlt /> Deploy
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex justify-center items-center gap-2 hover:text-new-green transition-all duration-200 ease-in-out font-light`}>
                                    <FaGithub /> Repositório
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 gap-2">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsTransitioning(true);
                            setTimeout(() => {
                                setCurrentProjectIndex(index);
                                setIsTransitioning(false);
                            }, 300);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentProjectIndex === index ? 'bg-new-green w-6' : 'bg-[#455a81]'}`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}