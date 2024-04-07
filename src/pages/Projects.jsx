import { NavBar } from "@/components/NavBar/NavBar";
import { Cards } from "../components/ProjectsCard/Card";

export const Projects = () => {
    return(
        <> 
            <div className="bg-primaryDark text-white w-full">
                <NavBar />
                <div className="mt-16 flex justify-center">
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
                </div>
            </div>
        </>
    );
};