import scrollToSection from "../utils/scollToSection";



export default function Header() {
    return (
        <header className={`bg-background-bright/60 w-[80%] h-15 backdrop-blur-2xl flex items-center justify-between px-6 rounded-2xl fixed z-999 top-10 left-1/2 transform -translate-x-1/2 shadow-lg`}>
            <h1 className={`text-white text-xl`}>Augusto Almondes</h1>

            <ul className={`flex items-center gap-10 text-white text-md mr-10`}>
                <li className={`cursor-pointer hover:text-new-green transition-all duration-200 easy-in-out`}
                    onClick={() => { scrollToSection('hero') }}
                >Home</li>
                <li className={`cursor-pointer hover:text-new-green transition-all duration-200 easy-in-out`}
                    onClick={() => { scrollToSection('about') }}
                >Sobre</li>
                <li className={`cursor-pointer hover:text-new-green transition-all duration-200 easy-in-out`}
                    onClick={() => { scrollToSection('projects') }}
                >Projetos</li>
                <li className={`cursor-pointer hover:text-new-green transition-all duration-200 easy-in-out`}
                    onClick={() => { scrollToSection('contact') }}
                >Contato</li>
            </ul>
        </header>
    );
}