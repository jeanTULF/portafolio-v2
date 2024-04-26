import { NavBar } from "@/components/NavBar/NavBar";
import { Cards } from "../components/ProjectsCard/Card";
import { ExpCard } from "../components/ExpCard/ExperienceCard";
export const Projects = () => {
    return(
        <> 
            <div className="bg-gradient-to-b from-bgGradient-primary to-bgGradient-secondary w-full">
                <NavBar />
                <section className="mt-[100px] flex justify-center">
                    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
                        <Cards />
                    </div>
                </section>
                <section className="mt-[100px] flex flex-col items-center">
                    <h3 className="font-semibold text-2xl text-titleAccent">Formación y experiencias</h3>
                    <ExpCard />
                </section>
            </div>
        </>
    );
};