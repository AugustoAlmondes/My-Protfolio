import { images } from "../data/carousel";

export default function Tech() {

    return (
        <div
            className={`
                md:col-start-4 md:col-end-6 md:row-start-5 md:row-end-6
                col-span-1 row-span-1 h-24 rounded-2xl bg-background
                p-5 overflow-hidden relative
            `}
        >
            <div className = {`absolute top-0 left-0 w-30 h-full bg-gradient-to-r from-background to-background/0 z-10`}></div>
            <div className = {`absolute top-0 right-0 w-30 h-full bg-gradient-to-l from-background to-background/0 z-10`}></div>
            <div
                className="flex gap-10 items-center h-full animate-carousel relative"
                style={{ minWidth: "max-content" }}
            >
                {/* Duplicando as imagens para efeito de loop */}
                {[...images, ...images].map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt=""
                        className="h-full w-13 object-contain"
                        draggable={false}
                    />
                ))}
            </div>
            <style>{`
                @keyframes carousel {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-51.5%); }
                }
                .animate-carousel {
                    animation: carousel 20s linear infinite;
                }
            `}</style>
        </div>
    );
}