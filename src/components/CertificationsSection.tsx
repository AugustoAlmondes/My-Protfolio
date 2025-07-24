type CertificationItem = {
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
        <div className="bg-background rounded-2xl p-6 md:pt-8 md:px-8 relative
        before:absolute before:content-[''] before:w-full before:h-[30%] before:rounded-2xl before:bg-gradient-to-t before:from-background before:to-transparent before:bottom-0 before:left-0 before:z-10
        
        ">
            <h1 className="text-new-green text-2xl font-bold mb-6">Certificações</h1>
            {certifications.length > 0 ? (
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                    {certifications.map((cert, index) => (
                        <div key={index} className="border-l-2 border-font-data-color/50 pl-4 hover:border-new-green transition-colors duration-200 ease-in-out">
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