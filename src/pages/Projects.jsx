import { NavBar } from "@/components/NavBar/NavBar";
import { Cards } from "../components/ProjectsCard/Card";
import { ExpCard } from "../components/ExpCard/ExperienceCard";

export const Projects = () => {
    return(
        <> 
            <div className="bg-primaryDark text-white w-full">
                <NavBar />
                <section className="mt-[100px] flex justify-center">
                    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
                        <Cards 
                            img={"/assets/images/minuatura-hiupy.png"}
                            alt="hiupy"
                            title="Hiupy"
                            description="Hiupy es una aplicación de inventario y planificación alimentaria."
                            rute="/id"
                        />

                        <Cards 
                            img={"/assets/images/miniatura-org.png"}
                            alt="org project"
                            title="Org"
                            description="Hiupy es una aplicación de inventario y planificación alimentaria."
                        />

                        <Cards 
                            img={"/assets/images/miniatura-alurageek.png"} 
                            alt="alurageek"
                            title="AluraGeek"
                            description="Hiupy es una aplicación de inventario y planificación alimentaria."
                        />

                        <Cards 
                            img={"/assets/images/miniatura-portafolio.png"} 
                            alt="portafolio" 
                            title="Portafolio V1"
                            description="Hiupy es una aplicación de inventario y planificación alimentaria."
                        />

                        <Cards 
                            img={"/assets/images/miniatura-encriptador.png"} 
                            alt="encriptador"
                            title="Encriptador"
                            description="Hiupy es una aplicación de inventario y planificación alimentaria."
                        />
                    </div>
                </section>
                <section className="mt-[100px] flex flex-col items-center">
                    <h3 className="font-semibold text-2xl">Formación y experiencias</h3>
                    <ExpCard logo="/assets/images/nclogo.png" description="A traves de No Country, pude tomar una experiencia enriquecedora y gratificante. Trabajar en un equipo multidisciplinario para desarrollar una aplicación integral como Hiupy, un inventario de comida me permitió aplicar y mejorar mis habilidades de desarrollo de software, así como mi capacidad para colaborar de manera efectiva con otros profesionales. Actualmente me encuentro desarrollando un segundo projecto que tiene por nombre: Libralia"/>
                    <ExpCard logo="/assets/images/aluralogo.png" description="Después de estudiar Front-End en Alura, experimenté un aprendizaje práctico y profundo. Los videos de alta calidad y los ejercicios prácticos me permitieron dominar los fundamentos del desarrollo web. La comunidad activa en la plataforma brindó apoyo y colaboración. Al completar el curso, obtuve un certificado y la oportunidad de demostrar mis habilidades en un proyecto final evaluado, preparándome para desafíos reales en mi carrera como desarrollador web."/>
                </section>
            </div>
        </>
    );
};