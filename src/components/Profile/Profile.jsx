import "@/styles.css"
export const Profile = () => {

return (
        <>
        <div className="flex flex-col items-center lg:w-[50%] gap-16 lg:flex-row">
                <div className="flex flex-col items-center gap-6 min-w-[320px] lg:min-w-[500px] lg:items-start">
                    <h1 className="font-extralight text-textLight textSize">{"<Hola Mundo/>"}</h1>
                    <h3 className="text-textLight">
                        <span className="text-textAccent">Soy </span> 
                        Jean Polo, desarrollador Front-
                        <span className="text-textAccent">End</span> 
                        </h3>
                    <p className="text-textLight text-center text-sm lg:text-base lg:text-left max-w-[80%] lg:max-w-full">
                        Panameño  apasionado con la tecnología, 
                        crear experiencias digitales impactantes y soluciones innovadoras que marquen la diferencia. 
                        Disfruto cada etapa del proceso de desarrollo, 
                        desde la concepción y el diseño hasta la resolución de desafíos del mundo real 
                        a través de código creativo y eficiente. 
                        <span className="text-textAccent"> ¡Bienvenido a mi mundo digital!</span>   
                    </p>
                </div>
                <img src="/assets/images/profile.png" alt="profile" className="max-w-64 h-[319px] rounded-3xl drop-shadow-xl"/>
            </div>
        </>
     );
};