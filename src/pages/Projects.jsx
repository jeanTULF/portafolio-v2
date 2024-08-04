import { NavBar, Cards, ExpCard, Contact, Footer } from "@/components";

export const Projects = () => {
    return(
        <> 
            <div className="w-full h-full bg-gradient-to-b from-primaryDark to-primaryDark">
                <NavBar />
                <section className="mt-[100px] flex justify-center bg-transparent">
                    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
                        <Cards />
                    </div>
                </section>
                <section className="mt-[100px] flex flex-col items-center">
                    <h3 className="font-semibold text-2xl  text-white">Formación y experiencias</h3>
                    <ExpCard />
                </section>
                <section className="mt-[100px]">
                    <Contact />
                </section>
                <section className="mt-[100px] flex flex-col items-center pb-[100px]">
                    <hr className="border  border-white my-6 w-[80%]" />
                    <Footer />
                </section>
            </div>
        </>
    );
};