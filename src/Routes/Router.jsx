import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Providers/PrivateRoute";
import MemberProfile from "../Pages/Dashboard/MerberProfile/MemberProfile";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Announcements from "../Pages/Dashboard/Announcements/Announcements";
import MakePayment from "../Pages/Dashboard/MakePayment/MakePayment";
import Payment from "../Pages/Dashboard/MakePayment/Payment";
import ManageMembers from "../Pages/Dashboard/AdminFacility/ManageMembers/ManageMembers";
import AdminProfile from "../Pages/Dashboard/AdminFacility/AdminProfile/AdminProfile";

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
                element: <PrivateRoute><Apartment></Apartment></PrivateRoute>
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
        element: <Dashboard></Dashboard>,
        children: [
            // member related work
            {
                path: 'memberProfile',
                element: <MemberProfile></MemberProfile>
            },
            {
                path: 'makePayment',
                element: <MakePayment></MakePayment>
            },
            {
                path: 'pay/:id',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'announcements',
                element: <Announcements></Announcements>
            },

            // for admin
            {
                path: 'adminProfile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'manageMembers',
                element: <ManageMembers></ManageMembers>
            }

        ]
    },
])

export default router;