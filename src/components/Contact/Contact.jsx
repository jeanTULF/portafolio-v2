import "@/styles.css"
import { ContactForm } from "./ContactForm";
export const Contact = () => {

return (
        <> 
            <div className="flex flex-col items-center w-full h-full gap-[50px] backgroundContact">
                <div className=" py-12 w-[40%] flex flex-col items-center gap-5 z-10 drop-shadow-md">
                    <h1 className="text-titleAccent font-bold text-5xl">Contactame</h1>
                    <p className="text-textAccent text-regular text-center">
                    Estoy entusiasmado de colaborar contigo y tu equipo en proyectos futuros. ¡Espero con interés nuestra próxima conversación sobre cómo podemos trabajar juntos!
                    </p>
                </div>
                <div className="flex flex-col items-center z-10 drop-shadow-md gap-5">
                    <h1 className="text-titleAccent font-bold text-5xl">Redes</h1>
                    <ul className="flex gap-4 text-white">
                        <li>
                        <a href="#" className="hover:text-titleAccent transform transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
                            </svg>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-titleAccent transform transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </a>
                        </li>
                        <li>
                        <a href="#" className=" hover:text-titleAccent transform transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path>
                            </svg>
                        </a>
                        </li>
                    </ul>
                </div>
                <form className="z-10 w-[50%] py-12"> 
                    <ContactForm />
                </form>
            </div>
        </>
     );
};