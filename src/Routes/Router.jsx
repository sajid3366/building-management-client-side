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
import AdminAnnouncement from "../Pages/Dashboard/AdminFacility/AdminAnnouncement/AdminAnnouncement";
import AgreementManagement from "../Pages/Dashboard/AdminFacility/AgreementManagement/AgreementManagement";
import CouponManagement from "../Pages/Dashboard/AdminFacility/CouponManagement/CouponManagement";
import UserProfile from "../Pages/Dashboard/UserFacility/UserProfile/UserProfile";

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
            // 
            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },
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
            },
            {
                path: 'makeAnnouncement',
                element: <AdminAnnouncement></AdminAnnouncement>
            },
            {
                path: 'agreementManagement',
                element: <AgreementManagement></AgreementManagement>
            },
            {
                path: 'coupon',
                element: <CouponManagement></CouponManagement>
            },

        ]
    },
])

export default router;