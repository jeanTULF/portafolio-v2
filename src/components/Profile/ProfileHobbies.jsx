
export const ProfileHobbies = () => {

return (
        <>
        <div className="flex flex-col items-center gap-[100px] py-[100px]">
            <h1 className="text-titleAccent text-2xl font-semibold dark:text-textDark">Hobbies</h1>
            <div className="flex flex-col items-center gap-8 max-w-[80%] text-sm md:text-base lg:flex-row lg:max-w-[60rem] lg:max-h-[29.4rem] p-5 rounded-lg border 
            border-borderColor border-opacity-20 bg-gradient-to-b from-cardGradient-secondary to-cardGradient-primary 
            dark:bg-gradient-to-b dark:from-darkCardGradient-primary dark:to-darkCardGradient-secondary dark:border-borderDark drop-shadow-sm transition-transform ease-out duration-300 transform hover:scale-105">

                <img src="/assets/images/hobbies.png" alt="hobbies" className="max-w-96 max-h-72 w-full" />
                <p className="text-textAccent dark:text-textDark">
                En mi tiempo libre, me encanta sumergirme en el emocionante mundo del anime y los videojuegos, desafiando mis habilidades. 
                También disfruto de aventurarme con mi cámara, capturando momentos especiales en la ciudad o en algun paisaje 
                que me parece muy lindo dentro de mi país en donde no suelo frecuentarlo. 
                Además, me gusta asistir al gimnasio para mantener la movilidad y estar en forma. 
                Siempre estoy buscando nuevas formas de aprender y crecer, ya sea explorando un nuevo hobby o adquiriendo conocimientos en áreas que me apasionan. 
                Y por supuesto, en cada momento de mi día, la música es mi fiel compañera, inspirándome y elevando mi espíritu en cada paso del camino, sobretodo musicas de concentracion 
                como el Lo-Fi o algunas que tambien te abran la imaginacion como el Drum & Bass.
                </p>
            </div>
        </div>
            
        </>
     );
};