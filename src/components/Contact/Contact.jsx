import contactbg from "/assets/images/contactbg.png"
export const Contact = () => {

return (
        <> 
            <div className="flex flex-col items-center gap-[50px]">
                <img src={contactbg} alt="background" className="absolute w-full -z-100 opacity-40" />
                <div className=" relative z-10 py-12 w-[40%] flex flex-col items-center gap-5">
                    <h1 className="text-titleAccent font-bold text-5xl">Contactame</h1>
                    <p className="text-textAccent text-regular text-center">
                    Estoy entusiasmado de colaborar contigo y tu equipo en proyectos futuros. ¡Espero con interés nuestra próxima conversación sobre cómo podemos trabajar juntos!
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-titleAccent font-bold text-5xl">Redes</h1>
                    <ul className="flex gap-4">
                        <li>Red</li>
                        <li>Red</li>
                        <li>Red</li>
                    </ul>
                </div>
            </div>
        </>
     );
};