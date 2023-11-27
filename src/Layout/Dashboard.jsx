// import { Helmet } from "react-helmet";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import { RiCoupon4Fill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { GrAnnounce } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useMember from "../hooks/useMember";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();
    // console.log(isAdmin);
    // console.log(isMember);
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
                            <li><NavLink to="/dashboard/adminProfile"><FaHome></FaHome>Admin Profile</NavLink></li>
                            <li><NavLink to="/dashboard/manageMembers"><FaUsers></FaUsers>Manage Members</NavLink></li>
                            <li><NavLink to="/dashboard/agreementManagement"><FaAd></FaAd>Agreement Management</NavLink></li>
                            <li><NavLink to="/dashboard/makeAnnouncement"><GrAnnounce></GrAnnounce>Announcement</NavLink></li>
                            <li><NavLink to="/dashboard/coupon"><RiCoupon4Fill></RiCoupon4Fill>Coupon</NavLink></li>
                        </div> : isMember ? <div>
                            <li><NavLink to="/dashboard/memberProfile"><ImProfile></ImProfile>My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/makePayment"><FaCalendar></FaCalendar>Make Payment</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><FaList></FaList>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/announcements"><GrAnnounce></GrAnnounce>Announcements</NavLink></li>
                        </div> : <div>
                            <li><NavLink to="/dashboard/userProfile"><ImProfile></ImProfile>My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/announcements"><GrAnnounce></GrAnnounce>Announcements</NavLink></li>
                        </div>

                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/apartment"><FaAlignJustify></FaAlignJustify>Apartment</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 p-8 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;