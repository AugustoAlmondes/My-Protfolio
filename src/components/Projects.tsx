import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from '../data/projects';

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
        <section id='projects' className="bg-background text-white rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-background-bright">
            <motion.h2
                className="text-2xl sm:text-3xl md:text-[3rem] mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Projetos
            </motion.h2>

            {/* Container Principal */}
            <motion.div
                className={`w-full bg-background-dark p-6 sm:p-8 relative rounded-2xl flex flex-col gap-6 border-background-bright border-2 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Navegação */}
                {/* <div className="flex justify-between items-center absolute top-[-20px] left-0 right-0 px-4 z-10"> */}
                <FaArrowAltCircleLeft
                    onClick={goToPrevProject}
                    className="cursor-pointer hover:text-new-green transition-all bottom-[-25px] translate-y-[50%] duration-300 ease-in-out absolute sm:top-[50%] sm:translate-y-[-50%] left-[-20px]"
                    size={30}
                />
                <FaArrowAltCircleRight
                    onClick={goToNextProject}
                    className="cursor-pointer hover:text-new-green transition-all bottom-[-25px] translate-y-[50%] duration-300 ease-in-out absolute sm:top-[50%] sm:translate-y-[-50%] right-[-20px]"
                    size={30}
                />
                {/* </div> */}

                {/* Imagem do Projeto */}
                <motion.div
                    className="w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={currentProjectIndex}
                >
                    <img
                        className={`w-full h-full object-cover transition-transform duration-500 ${isTransitioning ? 'scale-95' : 'scale-100'}`}
                        src={project.imageurl}
                        alt={project.name}
                    />
                </motion.div>

                {/* Informações do Projeto */}
                <motion.div
                    className="flex flex-col justify-between gap-4 bg-background p-4 sm:p-6 rounded-lg h-100"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-xl sm:text-2xl text-new-green">{project.name}</h3>

                    <p
                        className="text-sm sm:text-base text-justify font-light bg-background-dark p-3 sm:p-4 rounded-lg h-[200px] max-h-[100px] sm:max-h-[100px] overflow-y-auto"
                    >
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        <div>
                            <h5 className="text-new-pink text-sm sm:text-md">Cargo</h5>
                            <p className="ml-2 font-light text-sm sm:text-base">{project.role}</p>
                        </div>
                        <div>
                            <h5 className="text-new-pink text-sm sm:text-md">Tecnologias</h5>
                            <p className="ml-2 font-light text-sm sm:text-base">{project.technologies}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2 text-sm sm:text-base">
                        <motion.a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-new-green hover:text-new-blue transition-all duration-200"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt /> Deploy
                        </motion.a>
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-new-green hover:text-new-blue transition-all duration-200"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub /> Repositório
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Indicadores */}
            <motion.div
                className="flex justify-center mt-4 sm:mt-6 gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
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
            </motion.div>
        </section>
    );
}