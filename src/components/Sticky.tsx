import { BsDownload } from "react-icons/bs";

export default function Sticky() {
    return (
        <>
        <div className = {`fixed w-60 bottom-6 right-6 bg-[#1C2535]/20 backdrop-blur-2xl border-2 border-new-green-dark flex items-center justify-center gap-5 px-4 py-3 rounded-2xl shadow-lg z-999 text-new-green-dark *:hover:bg-new-green-dark hover:text-new-green hover:border-new-green cursor-pointer transition-all duration-300`}>
            <BsDownload size={25}/> Baixar Currículo
        </div>
        </>
    );
}