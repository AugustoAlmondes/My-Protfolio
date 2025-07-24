import { EducationSection } from './EducationSection';
import { CertificationsSection } from './CertificationsSection';

export default function Education() {


    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <EducationSection />
            <CertificationsSection />
        </div>
    );
};