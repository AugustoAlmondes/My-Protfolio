import { useEffect, useState } from 'react';

export default function Title() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Desenvolvedor {Front-end} & Web {Design}";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    const renderText = () => {
        const parts = [];
        let currentPart = { text: '', color: 'text-white' };

        for (let i = 0; i < displayedText.length; i++) {
            const char = displayedText[i];
            
            if (char === '{') {
                if (currentPart.text.length > 0) {
                    parts.push(currentPart);
                }
                currentPart = { text: '{', color: 'text-new-green' };
            } else if (char === '}') {
                currentPart.text += '}';
                parts.push(currentPart);
                currentPart = { text: '', color: 'text-white' };
            } else {
                currentPart.text += char;
            }
        }

        // Adiciona o último part se tiver conteúdo
        if (currentPart.text.length > 0) {
            parts.push(currentPart);
        }

        return parts.map((part, index) => (
            <span key={index} className={part.color}>
                {part.text}
            </span>
        ));
    };

    return (
        <div className={`md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-4 col-span-1 row-span-1 bg-[#1C2535] rounded-2xl h-64 md:h-auto p-15`}>
            <div className={`text-white text-[1.2rem]`}>
                <p> <span className={`text-new-pink`}>{"<span> "}</span>
                    Olá, me chamo Augusto Almondes
                    <span className={`text-new-pink`} >{" </span>"}</span></p>
            </div>

            <div className={`text-white text-[3rem] font-medium w-[90%]`}>
                <h1>
                    {renderText()}
                    {showCursor && <span className="inline-block w-1 h-12 bg-white align-middle ml-1"></span>}
                </h1>
            </div>
        </div>
    );
}