import { FaCode, FaPager, FaPen, FaServer } from "react-icons/fa";
import type { CooperationItem } from "../types/cooperation";

export const cooperationItems: CooperationItem[] = [
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