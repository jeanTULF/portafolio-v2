import { createBrowserRouter } from "react-router-dom";
import { About, ErrorPage, Projects } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Projects />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />
    }
])