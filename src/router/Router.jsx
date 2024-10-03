import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HealthForm from "../pages/HealthForm";
import Home from "../pages/Home";
import Login from "../pages/LogIn";

export const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path:'createfile',
            element: <HealthForm />
        },
        {
            path:'login',
            element: <Login />
        }
]
}])