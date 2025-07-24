import { useWidth } from "../context/useWidth/useWidth";

export default function Profile() {

    const { width } = useWidth();

    return (
        <>
            {
                width >= 1150 &&
                <div className={`bg-[#1C2535] 
                md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-5 md:h-auto
                relative col-span-1 row-span-1 rounded-2xl h-64 overflow-visible
                
                `}>
                    <img src="/eu3.png" alt="eu" className="absolute bottom-0 rounded-2xl md:h-full h-full w-full object-cover" />
                </div>
            }
        </>
    );
}