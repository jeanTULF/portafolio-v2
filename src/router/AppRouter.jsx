import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Projects } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Projects />,
        errorElement: <ErrorPage />
    }
])