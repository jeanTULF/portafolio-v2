import { NavLink, useParams } from "react-router-dom";
import dataCard from "@/data/card.json";
import { Button } from "flowbite-react";

export const ViewProject = () => {

    const { id } = useParams();
    const selectedProject = dataCard.find((item) => item.id === parseInt(id));
    const { alt, img, title, extDescription, deploy, repo, highlight } = selectedProject;

return (
        <>
            <nav className="fixed p-6 md:p-10 z-50">
                <NavLink 
                to="/"
                className="flex gap-4 border-transparent px-5 py-3 md:p-3 rounded-xl items-center text-textAccent dark:text-textDark text-sm font-semibold bg-gradient-to-b from-cardGradient-secondary to-buttonbgGradient-secondary dark:bg-gradient-to-b dark:from-darkCardGradient-primary dark:to-darkCardGradient-secondary dark:border dark:border-borderDark transform transition duration-300 hover:scale-110 ">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7 3.093l-5 5V8.8l5 5 .707-.707-4.146-4.147H14v-1H3.56L7.708 3.8 7 3.093z"></path>
                    </svg>
                    <span className="hidden md:block">Volver atrás</span>
                </NavLink>
            </nav>
            <div className="bg-gradient-to-b from-bgGradient-primary to-bgGradient-secondary 
                w-full h-full dark:bg-gradient-to-b dark:from-primaryDark dark:to-primaryDark flex flex-col items-center">
                    <section className="flex flex-col items-center gap-6 py-[200px]">
                        <h1 className="text-titleAccent font-semibold text-3xl lg:text-5xl dark:text-textDark">{title}</h1>
                        <img src={img} alt={alt} className="w-[90vw] max-w-[50rem] drop-shadow-md"/>
                            <div className="flex mt-24 gap-x-20">
                                <Button href={deploy} target="_blank">
                                    Ver Demo 
                                </Button>
                                <Button href={repo} target="_blank">
                                    Repositorio 
                                </Button>
                            </div>
                    </section>
                    <section className="max-w-4xl mx-auto w-[90vw] grid lg:grid-cols-2 gap-8 px">
                        <div className="p-4 border border-transparent rounded-lg shadow-sm">
                            <h2 className="text-xl text-titleAccent font-bold mb-2 dark:text-textDark">Mi rol</h2>
                            <p className="text-textAccent font-normal dark:text-textDark">FrontEnd</p>
                        </div>
                        <div className="p-4 border border-transparent rounded-lg shadow-sm">
                            <h2 className="text-xl text-titleAccent font-bold mb-2 dark:text-textDark">Resumen</h2>
                            <p className="text-sm text-textAccent dark:text-textDark">{extDescription}</p>
                        </div>
                        <div className="p-4 border border-transparent rounded-lg shadow-sm">
                            <h2 className="text-xl text-titleAccent font-bold mb-2 dark:text-textDark">Equipo</h2>
                            <p></p>
                        </div>
                        <div className="p-4 border border-transparent rounded-lg shadow-sm">
                            <h2 className="text-xl text-titleAccent font-bold mb-2 dark:text-textDark">Tecnologías utilizadas</h2>
                            {selectedProject.tecnologies.map((tecno, index) => {
                                return(
                                <ul key={index} className="flex flex-col">
                                    <li className="text-sm text-textAccent my-1 dark:text-textDark">{tecno}</li>
                                </ul>
                                )
                            })}
                        </div>
                    </section>
                    <section className="flex flex-col items-center gap-6 my-[200px] rounded-xl bg-gradient-to-b from-cardGradient-primary to-cardGradient-secondary dark:bg-gradient-to-b dark:from-darkCardGradient-primary dark:to-darkCardGradient-secondary dark:border-borderDark max-w-[864px] w-[90vw] p-12">
                        <h2 className="text-titleAccent font-semibold text-2xl dark:text-textDark">Puntos destacados</h2>
                        <p className="text-textAccent text-sm md:text-base dark:text-textDark">{highlight}</p>
                            <h3 className="text-titleAccent font-semibold text-2xl dark:text-textDark">Capturas</h3>
                            <ul className="flex flex-col gap-5 drop-shadow-md list-none">
                                    {selectedProject.screenshots.map((img, index) => {
                                        return(
                                            <li key={index}>
                                                <img src={img} alt="captura" className="w-[37.5rem] rounded-lg object-contain"/>
                                            </li>
                                        )
                                    })}
                            </ul>
                    </section>
            </div>
        </>
     );
};