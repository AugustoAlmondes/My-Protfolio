import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section id="contact" className={`bg-background p-10 rounded-2xl grid grid-cols-[1fr_1fr] gap-10`}>
            <div>
                <div className={`text-base/11`}>
                    <h1 className={`text-white text-[3rem]`}>Se interessou?</h1>
                    <p className={`text-2xl text-new-pink`}>Entre em contato</p>
                </div>

                <ul className={`mt-10 ml-10`}>
                    <li className={`flex items-center gap-4 mb-6`}>
                        <FaWhatsapp size={40} className={`text-new-green`} />
                        <div className={`flex flex-col text-md`}>
                            <span className={`text-new-green`}>
                                WhatsApp
                            </span>
                            <a href="wa.me/+5589988083671" target="_blank" className={`text-white`}>+55 (89) 98808-3671</a>
                        </div>
                    </li>
                    <li className={`flex items-center gap-4 mb-6`}>
                        <FaLinkedin size={40} className={`text-new-green`} />
                        <div className={`flex flex-col text-md`}>
                            <span className={`text-new-green`}>
                                Linkedin
                            </span>
                            <a href="https://linkedin.com/in/augusto-almondes/" target="_blank" className={`text-white`}>linkedin.com/in/augusto-almondes</a>
                        </div>
                    </li>
                    <li className={`flex items-center gap-4 mb-6`}>
                        <MdEmail size={40} className={`text-new-green`} />
                        <div className={`flex flex-col text-md`}>
                            <span className={`text-new-green`}>
                                E-mail
                            </span>
                            <a href="almondesaugusto@gmail.com" target="_blank" className={`text-white`}>almondesaugusto@gmail.com</a>
                        </div>
                    </li>
                    <li className={`flex items-center gap-4 mb-6`}>
                        <FaGithub size={40} className={`text-new-green`} />
                        <div className={`flex flex-col text-md`}>
                            <span className={`text-new-green`}>
                                WhatsApp
                            </span>
                            <a href="https://github.com/AugustoAlmondes" target="_blank" className={`text-white`}>github.com/AugustoAlmondes</a>
                        </div>
                    </li>
                </ul>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className = {`mt-2`}>
                    <label className = {`text-white font-light`}>E-mail</label>
                    <input type="email" className={`mt-2 w-full bg-background-bright border-2 border-border-line rounded-xl py-1 pl-4 outline-none placeholder:text-border-line text-white`} placeholder="exemplo@teste.com"/>
                </div>
                <div className = {`mt-2`}>
                    <label className = {`text-white font-light`}>Assunto</label>
                    <input type="text" className={`mt-2 w-full bg-background-bright border-2 border-border-line rounded-xl py-1 pl-4 outline-none placeholder:text-border-line text-white`} placeholder="Tenho interesse..."/>
                </div>
                <div className = {`mt-2`}>
                    <label className = {`text-white font-light`}>Escreva sua mensagem aqui</label>
                    <textarea style={{height: '200px'}} className={`mt-2 w-full bg-background-bright border-2 border-border-line rounded-xl py-1 pl-4 resize-none outline-none placeholder:text-border-line text-white`} placeholder="Tenho interesse..."></textarea>
                </div>

                <input type="submit" value={"Enviar"} className={`mt-2 w-60 bg-border-line border-2 border-border-line rounded-xl py-1 pl-4 outline-none placeholder:text-border-line cursor-pointer text-white hover:bg-new-blue hover:border-new-blue transition-all duration-200 ease-in-out`}/>
            </form>
        </section>
    );
}