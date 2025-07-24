import { formations } from "../data/educations";

export const EducationSection = () => {
    return (
        <div className="bg-background rounded-2xl p-6 md:p-8 relative
        before:absolute before:content-[''] before:w-full before:h-[50%] before:rounded-2xl before:bg-gradient-to-t before:from-background/60 before:to-transparent before:bottom-0 before:left-0 before:z-10
        ">
            <h1 className="text-new-green text-2xl font-bold mb-6">Educação</h1>
            <div className="relative">
                <div className="h-full w-0.5 bg-font-data-color/50 absolute left-4 -translate-x-1/2" />

                <div className="space-y-6 pl-8">
                    {formations.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Bullet point */}
                            <div className="absolute -left-8 top-0 w-4 h-4 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-font-data-color/50" />
                            </div>

                            {/* Data */}
                            <div className="text-font-data-color/50 text-md mb-1">
                                {item.year}
                            </div>

                            {/* Conteúdo */}
                            <div className="ml-2">
                                <h2 className="text-new-pink text-lg font-medium">{item.course}</h2>
                                <h3 className="text-white text-sm">{item.institution}</h3>
                                <p className="text-font-color text-sm mt-2 text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};