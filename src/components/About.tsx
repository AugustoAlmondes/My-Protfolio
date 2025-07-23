import { FaCode, FaPager, FaPen, FaServer } from "react-icons/fa";

type CooperationItem = {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    highlights: {
        text: string;
        className?: string;
    }[];
};

const cooperationItems: CooperationItem[] = [
    {
        id: '1',
        icon: <FaPager className="text-white text-xl" />,
        title: 'Desenvolvimento Web',
        description: 'Criação de interfaces visualmente atraentes e fáceis de usar usando estruturas $0 e modernas como $0.',
        highlights: [
            { text: 'HTML, CSS, JavaScript' },
            { text: 'React' }
        ]
    },
    {
        id: '2',
        icon: <FaServer className="text-white text-xl" />,
        title: 'Gerenciamento de banco de dados',
        description: 'Projetando e gerenciando bancos de dados com tecnologias SQL e NoSQL, como $0, $0 e $0.',
        highlights: [
            { text: 'MySQL' },
            { text: 'PostgreSQL' },
            { text: 'MongoDB' }
        ]
    },
    {
        id: '3',
        icon: <FaPen className="text-white text-xl" />,
        title: 'UX/UI',
        description: 'Prototipação de interfaces modernas e atraentes utilizando técnicas de $0 e desenvolvendo com softwares de linha como $0 e $0.',
        highlights: [
            { text: 'UX/UI' },
            { text: 'Figma' },
            { text: 'Photoshop' }
        ]
    },
    {
        id: '4',
        icon: <FaCode className="text-white text-xl" />,
        title: 'Desenvolvimento de APIs',
        description: 'Criando e integrando $0 para permitir a comunicação suave entre os sistemas front-end e back-end. Utilizando $0.',
        highlights: [
            { text: 'APIs RESTful' },
            { text: 'Node.js' }
        ]
    }
];

export default function About() {

    return (
        <div className={` w-full bg-background h-auto rounded-2xl grid grid-cols-[1fr_max-content_1fr] p-10`}>

            <div className={`text-white`}>
                <h3 className={`text-new-green text-2xl mt-5`}>Cooperação</h3>
                <ul className={`grid grid-cols-2 grid-rows-2 gap-2 mt-5 `}>

                    {
                        cooperationItems.map(item => (
                            <li key={item.id} className={`flex flex-col gap-2 border border-border-color p-3`}>
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