// import { Helmet } from "react-helmet";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { GrAnnounce } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    const isAdmin = true;
    console.log(isAdmin);
    return (
        <div className="flex max-w-6xl mx-auto ">

            <div className="w-64 py-8 min-h-screen bg-orange-400 ">
                <div className="text-center space-y-1 mb-8">
                <h1 className="text-3xl uppercase  font">Smart Build</h1>
                <h4 className="text-xl">Smart Solution</h4>
                </div>

                <ul className="menu">
                    {
                        isAdmin ? <div>
                            <li><NavLink to="/dashboard/adminProfile"><FaHome></FaHome>My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/manageMembers"><FaUsers></FaUsers>Manage Members</NavLink></li>
                            <li><NavLink to="/dashboard/manageItem"><FaAd></FaAd>Manage Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageBookings"><FaBook></FaBook>Manage Bookings</NavLink></li>
                        </div> : <div>
                            <li><NavLink to="/dashboard/memberProfile"><ImProfile></ImProfile>My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/makePayment"><FaCalendar></FaCalendar>Make Payment</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><FaList></FaList>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/announcements"><GrAnnounce></GrAnnounce>Announcements</NavLink></li>
                        </div>

                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/apartment"><FaAlignJustify></FaAlignJustify>Apartment</NavLink></li>
                    <li><NavLink to="/order/contact"><FaEnvelope></FaEnvelope>Contact</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 p-8 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;