import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    const contactItems = [
        {
            icon: <FaWhatsapp size={30} className="text-new-green" />,
            platform: "WhatsApp",
            link: "wa.me/+5589988083671",
            text: "+55 (89) 98808-3671"
        },
        {
            icon: <FaLinkedin size={30} className="text-new-green" />,
            platform: "Linkedin",
            link: "https://linkedin.com/in/augusto-almondes/",
            text: "linkedin.com/in/augusto-almondes"
        },
        {
            icon: <MdEmail size={30} className="text-new-green" />,
            platform: "E-mail",
            link: "mailto:almondesaugusto@gmail.com",
            text: "almondesaugusto@gmail.com"
        },
        {
            icon: <FaGithub size={30} className="text-new-green" />,
            platform: "GitHub",
            link: "https://github.com/AugustoAlmondes",
            text: "github.com/AugustoAlmondes"
        }
    ];

    return (
        <motion.section 
            id="contact"
            className="bg-background p-6 sm:p-8 md:p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 border-2 border-background-bright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {/* Seção de Contato */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8">
                    <motion.h1 
                        className="text-white text-3xl sm:text-4xl md:text-[3rem] mb-2"
                        whileHover={{ x: 5 }}
                    >
                        Se interessou?
                    </motion.h1>
                    <motion.p 
                        className="text-xl sm:text-2xl text-new-pink"
                        whileHover={{ x: 5 }}
                    >
                        Entre em contato
                    </motion.p>
                </div>

                <ul className="space-y-4 sm:space-y-6 ml-0 sm:ml-4">
                    {contactItems.map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center gap-3 sm:gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                            whileHover={{ x: 5 }}
                        >
                            <motion.div whileHover={{ scale: 1.1 }}>
                                {item.icon}
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-new-green text-sm sm:text-base">
                                    {item.platform}
                                </span>
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white text-sm sm:text-base hover:text-new-blue transition-colors duration-200"
                                >
                                    {item.text}
                                </a>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Formulário */}
            <motion.form
                onSubmit={(e) => e.preventDefault()}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
            >
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                >
                    <label className="text-white font-light text-sm sm:text-base">E-mail</label>
                    <input 
                        type="email" 
                        className="mt-1 w-full bg-background-bright border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none placeholder:text-border-line/70 text-white text-sm sm:text-base"
                        placeholder="exemplo@teste.com"
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                >
                    <label className="text-white font-light text-sm sm:text-base">Assunto</label>
                    <input 
                        type="text" 
                        className="mt-1 w-full bg-background-bright border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none placeholder:text-border-line/70 text-white text-sm sm:text-base"
                        placeholder="Tenho interesse..."
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                >
                    <label className="text-white font-light text-sm sm:text-base">Mensagem</label>
                    <textarea 
                        className="mt-1 w-full bg-background-bright border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none placeholder:text-border-line/70 text-white text-sm sm:text-base resize-none"
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                    />
                </motion.div>

                <motion.input
                    type="submit"
                    value="Enviar"
                    className="w-full sm:w-60 bg-border-line border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none text-white hover:bg-new-blue hover:border-new-blue transition-all duration-200 ease-in-out cursor-pointer text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />
            </motion.form>
        </motion.section>
    );
}