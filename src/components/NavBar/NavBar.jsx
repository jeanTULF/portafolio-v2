import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "@/styles.css"


export const NavBar = () => {
    const [theme, setTheme] = useState(() => {
        
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return "dark";
        }
    
        return "light";
      });
    
      useEffect(() => {
        if (theme === "dark") {
          document.querySelector("html").classList.add("dark");
        } else {
          document.querySelector("html").classList.remove("dark");
        }
      }, [theme]);
    
      const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };
    return (
        <Navbar className="w-full sticky top-0 z-50" theme={{root: {base: 'bg-bgGradient-primary backdrop-filter backdrop-blur-sm bg-opacity-5 drop-shadow-md px-2 py-2.5 sm:px-4 dark:bg-primaryDark dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-5'}}} fluid>
            <Navbar.Brand as={NavLink} to="/" className="w-2/12 max-w-48 min-w-28">
                <img src={"/assets/images/logo.svg"} alt="log" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link 
                as={NavLink} 
                to="/" 
                className="buttonUi">Proyectos</Navbar.Link>
                
                <Navbar.Link 
                as={NavLink} 
                to="/about" 
                className="buttonUi">Acerca de mi</Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Collapse theme={{list: 'mt-4 flex flex-col space-y-4 md:space-y-0 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'}}>
                <Button as={Link} href="#" className="bg-gradient-to-b from-buttonbgGradient-primary to-buttonbgGradient-secondary 
                text-titleAccent transform transition duration-300 hover:scale-110 dark:from-buttonDark dark:to-buttonDark 
                dark:text-white" pill>Descargar CV</Button>
                <Button 
                onClick={handleChangeTheme}
                color="teal" 
                theme={{color: {teal: 'bg-gradient-to-b from-buttonbgGradient-primary to-buttonbgGradient-secondary border border-transparent bg-white text-titleAccent transform transition duration-300 hover:scale-110 dark:from-buttonDark dark:to-buttonDark dark:text-white'}}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                    </svg>
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
}