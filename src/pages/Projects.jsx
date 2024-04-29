import { NavBar, Cards, ExpCard, Contact } from "@/components";
import { Footer } from "../components/Footer/Footer";

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
                <section className="mt-[100px]">
                    <Contact />
                </section>
                <section className="mt-[100px] flex flex-col items-center pb-[100px]">
                    <hr className="border border-titleAccent my-6 w-[80%]" />
                    <Footer />
                </section>
            </div>
        </>
    );
};