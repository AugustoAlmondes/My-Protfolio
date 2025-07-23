import { useState } from "react";
import { RiFileList2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

export default function Resume() {

    const [displayText, setDisplayedText] = useState(1);
    const styleButton = `text-white py-1 text-sm rounded-t-md w-30 cursor-pointer flex items-center justify-center gap-1 transition-all duration-100`

    return (
        <>
            <div className={`
                md:col-start-1 md:col-end-4 md:row-start-4 md:row-end-6
                col-span-1 row-span-1 h-64 md:h-auto flex flex-col
            `}>
                <div className={` h-[10%] flex gap-2`}>
                    <button
                        className={`${styleButton} ${displayText === 1 ? "bg-background" : "bg-background/30 text-white/50 hover:bg-background-bright"}`}
                        onClick={() => setDisplayedText(1)}
                    >
                        {displayText === 1 ? <RiFileList2Fill color="#3F6AC7" /> : <RiFileList2Fill />}
                        Resumo
                    </button>
                    <button
                        className={`${styleButton} ${displayText === 0 ? "bg-background" : "bg-background/30 text-white/50 hover:bg-background-bright"}`}
                        onClick={() => setDisplayedText(0)}
                    >
                        {displayText === 0 ? <TbWorld color="#3F6AC7" /> : <TbWorld />}
                        Redes
                    </button>
                </div>

                <div className={` bg-background h-[90%] rounded-r-2xl rounded-b-2xl grid grid-cols-[max-content_2fr]`}>
                    <div className={`text-line-number px-5 py-2 flex items-center`}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            {
                                displayText === 0 &&
                                <li>6</li>
                            }
                        </ul>
                    </div>
                    {
                        displayText === 1 &&

                        <div className={`text-white px-5 py-2 flex flex-col text-justify justify-center`}>
                            <p className={`text-new-pink text-start`}>
                                import
                                <span className={`text-[#F2604D]`}>{' * '}</span>
                                from
                                <span className={`text-new-green`}>{" 'me'"}</span>
                            </p>
                            <p>
                                <span className={`text-new-pink`}>{'<p> '}</span>
                                Experiência prática em React.js, Node.js e design de interfaces. Atuo no desenvolvimento Front-End e integração FullStack, entrego aplicações web que aliam performance, usabilidade e visual atrativo.
                                <span className={`text-new-pink`}>{` </p>`}</span>
                            </p>
                        </div>
                    }
                    {
                        displayText === 0 &&

                        <div className={`text-white px-5 py-2 flex flex-col text-justify justify-center`}>
                            <p className={`text-new-pink text-start`}>
                                import
                                <span className={`text-[#F2604D]`}>{' * '}</span>
                                from
                                <span className={`text-new-green`}>{" 'redes'"}</span>
                            </p>
                            <p>
                                <span className={`text-new-pink`}>{'<ul> '}</span>
                                <p>
                                    <span className={`text-new-pink`}>{'<li> '} </span>
                                    <a href="https://www.linkedin.com/in/augusto-almondes/" target="_blank" className={`hover:text-new-green transition-all duration-200`}>
                                        Linkedin
                                    </a>
                                    <span className={`text-new-pink`}>{' </li>'}</span>
                                </p>
                                <p>
                                    <span className={`text-new-pink`}>{'<li> '} </span>
                                    <a href="https://github.com/AugustoAlmondes" target="_blank" className={`hover:text-new-green transition-all duration-200`}>
                                        Github
                                    </a>
                                    <span className={`text-new-pink`}>{' </li>'}</span>
                                </p>
                                <p>
                                    <span className={`text-new-pink`}>{'<li> '} </span>
                                    <a href="https://github.com/AugustoAlmondes" target="_blank" className={`hover:text-new-green transition-all duration-200`}>
                                        Instagram
                                    </a>
                                    <span className={`text-new-pink`}>{' </li>'}</span>
                                </p>
                                <span className={`text-new-pink`}>{` </ul>`}</span>
                            </p>
                        </div>
                    }
                </div>

            </div>
        </>
    );
}

