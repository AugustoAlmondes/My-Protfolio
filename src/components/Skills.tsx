import { motion } from 'motion/react';
import { skills } from '../data/skills';

export default function Skills() {
    return (
        <motion.section
            className="bg-background p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 relative rounded-2xl border-2 border-background-bright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {/* Seção Cards */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="py-4 sm:py-5 px-3 sm:px-4 border-2 border-background-bright rounded-xl hover:border-border-line/70 transition-all duration-200 ease-in-out"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index/15 }}
                    >
                        <h3 className="text-new-pink text-base sm:text-lg mb-1 sm:mb-2">{skill.name}</h3>
                        <p className="text-white text-xs sm:text-sm">
                            {skill.technologies.join(', ')}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            {/* Divisor - só aparece em desktop */}
            <div className="hidden lg:block h-[80%] w-[3px] absolute bg-new-pink left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]" />

            {/* Seção Ícones */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.h1
                    className="text-xl sm:text-2xl text-new-green mb-6"
                >
                    Minhas Habilidades
                </motion.h1>

                <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
                    {[
                        "html,css,react,tailwind,bootstrap",
                        "figma,photoshop,nodejs,express,nest,prisma",
                        "git,github,vercel,netlify,docker,mysql",
                        "postgresql,mongodb,js,ts,c,python"
                    ].map((icons, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${icons}`}
                                alt="tech icons"
                                className="h-8 sm:h-10 md:h-12"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </motion.section>
    );
}