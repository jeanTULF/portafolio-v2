import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="py-8 dark:bg-primaryDark flex justify-around border-b border-primaryDark shadow-md">
            <img src="/src/assets/img/logo.svg" alt="logo" className=" w-36"/>
            <div className="flex items-center space-x-4 text-sm">
                <NavLink>Proyectos</NavLink>
                <NavLink>Acerca de mí</NavLink>
            </div>
            
            <div className="flex space-x-5 items-center ">
            <button className="bg-secondaryDark rounded-full px-7 py-4 text-xs font-bold">Descargar CV</button>
                <NavLink>
                    <img src="/src/assets/img/light-theme.svg" alt="light theme" />
                </NavLink>
                <NavLink>
                    <img src="/src/assets/img/dark-theme.svg" alt="dark theme" />
                </NavLink>
            </div>
        </nav>
    )
}