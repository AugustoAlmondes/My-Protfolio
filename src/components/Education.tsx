import { EducationSection } from './EducationSection';
import { CertificationsSection } from './CertificationsSection';

type EducationItem = {
    year: string;
    course: string;
    institution: string;
    description: string;
};

type CertificationItem = {
    id: string;
    name: string;
    issuer: string;
    date: string;
};


export default function Education() {
    const formations: EducationItem[] = [
        {
            year: '2021-2025',
            course: 'Sistemas de Informação',
            institution: 'Universidade Federal do Piauí (UFPI)',
            description: 'Atualmente curso Sistemas de Informação na Universidade Federal do Piauí, onde venho desenvolvendo uma base sólida em desenvolvimento de software, lógica computacional e estruturação de sistemas.'
        },
        {
            year: '2018-2019',
            course: 'Técnico em Administração',
            institution: 'SENAI - SESI',
            description: 'Desenvolvimento de Atividades voltadas à área da Administração de Negócios, atividades em equipes a fim de melhorar comunicação com membros da equipe, realizações de pesquisas e apresentações de trabalhos sobre conteúdos voltados à Administração.'
        }
    ];

    const certifications: CertificationItem[] = [];
    
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <EducationSection title="Educação" items={formations} />
            <CertificationsSection certifications={certifications} />
        </div>
    );
};