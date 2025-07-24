import { cooperationItems } from "../data/cooperations";

export default function About() {

    return (
        <div className={` w-full bg-background h-auto rounded-2xl grid grid-cols-[1fr_max-content_1fr] p-10`}>

            <div className={`text-white`}>
                <h3 className={`text-new-green text-2xl mt-5`}>Cooperação</h3>
                <ul className={`grid grid-cols-2 grid-rows-2 gap-2 mt-5 `}>

                    {
                        cooperationItems.map(item => (
                            <li key={item.id} className={`flex flex-col gap-2 border border-border-color p-3 rounded-xl`}>
                                {item.icon}
                                <h4 className={`text-md`}>{item.title}</h4>
                                <p className={`text-font-color text-justify text-sm/4`}>
                                    {item.description.split('$0').map((part, index) => (
                                        <span key={index}>
                                            {part}
                                            {index < item.highlights.length ? (
                                                <span className={`text-new-pink ${item.highlights[index].className || ''}`}>
                                                    {item.highlights[index].text}
                                                </span>
                                            ) : null}
                                        </span>
                                    ))}
                                </p>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div className={`w-[3px] h-[90%] bg-new-pink mx-5 my-auto`} />

            <div className={`text-white`}>
                <h1 className={`text-[3rem] mb-5`}>Sobre mim</h1>
                <p className={`text-justify my-10`}>
                    <span className={`text-new-pink`}>
                        {`<p> `}
                    </span>
                    Desenvolvedor Front-End com formação técnica em Administração e graduação em Sistemas  de Informação em andamento. Tenho experiência em projetos práticos com React.js, consumo de  APIs RESTful e desenvolvimento de interfaces responsivas. Domínio de ferramentas como  Figma, Git/GitHub e Vite, além de conhecimentos em Back-End (Node.js e NestJS) e bancos  de dados (MySQL e PostgreSQL). Comprometido, colaborativo e em constante busca por  aprendizado em tecnologias modernas.
                    <span className={`text-new-pink`}>
                        {` </p>`}
                    </span>
                </p>
            </div>
        </div>
    );
}