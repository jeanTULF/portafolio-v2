import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar className="w-full sticky top-0 z-50" theme={{root: {base: 'bg-bgGradient-primary backdrop-filter backdrop-blur-sm bg-opacity-5 drop-shadow-md px-2 py-2.5 sm:px-4'}}} fluid>
            <Navbar.Brand as={NavLink} to="/" className="w-2/12 max-w-48 min-w-28">
                <img src={"/assets/images/logo.svg"} alt="log" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link as={NavLink} to="/proyectos" className="text-titleAccent hover:text-slate-300 ">Proyectos</Navbar.Link>
                <Navbar.Link as={NavLink} to="/About" className="text-titleAccent">Acerca de mi</Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Collapse>
                <Button as={Link} href="#" className="bg-gradient-to-b from-buttonbgGradient-primary to-buttonbgGradient-secondary text-titleAccent transform transition duration-300 hover:scale-110" pill>Descargar CV</Button>
                <Button className="bg-transparent hover:bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                    </svg>
                </Button>
            </Navbar.Collapse>
           
        </Navbar>
    )
}