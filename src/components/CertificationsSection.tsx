type CertificationItem = {
    id: string;
    name: string;
    issuer: string;
    date: string;
};
// Props para o componente CertificationsSection
type CertificationsSectionProps = {
    certifications: CertificationItem[];
};

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
    return (
        <div className="bg-background rounded-2xl p-6 md:p-8">
            <h1 className="text-new-green text-2xl font-bold mb-6">Certificações</h1>
            {certifications.length > 0 ? (
                <div className="space-y-4">
                    {certifications.map(cert => (
                        <div key={cert.id} className="border-l-2 border-new-green pl-4">
                            <h2 className="text-new-pink text-lg font-medium">{cert.name}</h2>
                            <p className="text-white text-sm">{cert.issuer}</p>
                            <p className="text-font-data-color/50 text-xs mt-1">{cert.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-font-color italic">Nenhuma certificação adicionada ainda.</p>
            )}
        </div>
    );
};