import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Dashboard from "../Layout/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'apartment',
                element: <Apartment></Apartment>
            },
            
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
    },
])

export default router;