import { NavBar, Contact, Footer, Profile, ProfileTec } from "@/components";
export const About = () => {

return (
        <>
        <div className="bg-gradient-to-b from-bgGradient-primary to-bgGradient-secondary w-full">
            <NavBar />
                <section className="mt-[100px] flex justify-center">
                <Profile />
                </section>
                <section className="mt-[100px]">
                    <ProfileTec />
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