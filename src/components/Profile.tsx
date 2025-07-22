import { useWidth } from "../context/useWidth/useWidth";

export default function Profile() {

    const {width} = useWidth();

    return (
        <div className={`
            ${width > 768 ? "bg-[#1C2535] " : "h-96 bg-[#1C2535]"}
            md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-5 md:h-auto
            relative col-span-1 row-span-1 rounded-2xl h-64 overflow-visible
            `}>
            <img src="/eu2.png" alt="eu" className="absolute bottom-0 rounded-2xl md:h-auto h-full w-full object-contain" />
        </div>
    );
}