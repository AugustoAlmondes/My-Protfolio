import { motion } from "motion/react";
export default function Tech() {
    const images = [
        "/carousel/html.png",
        "/carousel/css.png",
        "/carousel/js.png",
        "/carousel/ts.png",
        "/carousel/react.png",
        "/carousel/node.png",
        "/carousel/tailwind.png",
    ];

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                }
            }}
            className="border-2 border-background-bright md:col-start-4 md:col-end-6 md:row-start-5 md:row-end-6 col-span-1 row-span-1 h-20 sm:h-24 rounded-2xl bg-background p-3 sm:p-5 overflow-hidden relative"
        >
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-background/0 z-10"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-background/0 z-10"></div>
            <motion.div
                className="flex gap-6 sm:gap-10 items-center h-full animate-carousel relative"
                style={{ minWidth: "max-content" }}
                animate={{ x: ["0%", "-51.5%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {[...images, ...images].map((src, idx) => (
                    <motion.img
                        key={idx}
                        src={src}
                        alt=""
                        className="h-3/4 sm:h-full w-auto object-contain"
                        draggable={false}
                    />
                ))}
            </motion.div>
            <style>{`
                @keyframes carousel {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-51.5%); }
                }
                .animate-carousel {
                    animation: carousel 20s linear infinite;
                }
            `}</style>
        </motion.div>
    );
}