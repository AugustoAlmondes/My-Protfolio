import { skills } from '../data/skills';
export default function Skills() {
    return (
        <section className={`bg-background p-10 grid grid-cols-1 md:grid-cols-2 gap-10 relative`}>
            <div className={`h-90 w-[3px] absolute bg-new-pink left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]`} />

            <div>
                <h1 className={`text-2xl text-new-green`}>Minhas Habilidades</h1>
                <div className={`w-full h-full flex justify-center items-center flex-col gap-5`}>
                    <img src="https://skillicons.dev/icons?i=html,css,react,tailwind,bootstrap" height="30" />
                    <img src="https://skillicons.dev/icons?i=figma,photoshop,nodejs,express,nest,prisma" height="35" />
                    <img src="https://skillicons.dev/icons?i=git,github,vercel,netlify,docker,mysql" height="35" />
                    <img src="https://skillicons.dev/icons?i=postgresql,mongodb,js,ts,c,python" height="35" />
                </div>
            </div>
            <div className={`grid grid-cols-2 grid-rows-3 gap-5`}>
                {
                    skills.map((skill, index) => {
                        return (
                            <div key={index} className={`py-7 px-3 border-2 border-background-bright rounded-xl hover:border-border-line/70 transition-all duration-200 ease-in-out`}>
                                <h3 className={`text-new-pink text-lg mb-2`}>{skill.name}</h3>
                                <p className={`text-white text-sm`}>
                                    {skill.technologies.join(', ')}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}