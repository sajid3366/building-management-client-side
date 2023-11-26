import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdLogin, MdOutlineLogout } from "react-icons/md";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const handleLogout = () => {
        return logOut()
    }
    return (
        <nav className=" lg:flex justify-between py-1 items-center px-4 h-[100%] ">
            <div className="flex justify-center">
                <Link to="/">
                    <img className='w-[250px] lg:w-[200px] h-[80px] py-2 cursor-pointer' src="https://i.ibb.co/5Lc8cBw/smart-home.png" alt="" />
                </Link>
            </div>

            <div className='lg:flex '>
                <ul className="flex flex-wrap gap-y-3 justify-center font-semibold mt-5 lg:mt-0 lg:ml-12 items-center gap-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                            }>
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/apartment" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Apartment
                        </NavLink>
                    </li>


                </ul>
                <div className="mt-5 lg:ml-10 flex justify-center items-center gap-2 lg:mt-0 py-2">

                    <div>
                        {
                            user ? <>

                                <div className="flex gap-2 items-center">

                                    <div className="dropdown dropdown-end">
                                        <img tabIndex={0} src={user?.photoURL} className="w-[40px] h-[40px] rounded-full cursor-pointer" alt="" />
                                        <ul tabIndex={0} className="dropdown-content  py-8  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <div className="flex-col justify-center text-center space-y-3">
                                                <div className="flex justify-center">
                                                    <img src={user?.photoURL} className="w-[40px] h-[40px] rounded-full cursor-pointer" alt="" />
                                                </div>

                                                <h2 className="text-lg font-bold">{user.displayName}</h2>
                                                <div>
                                                    {/* <NavLink className="btn btn-outline" to="/dashboard">Dashboard</NavLink> */}
                                                    {
                                                        user && isAdmin && <li><Link to="/dashboard/adminProfile">Dashboard</Link></li>

                                                    }
                                                    {
                                                        user && !isAdmin && <li><Link to="/dashboard/memberProfile">Dashboard</Link></li>

                                                    }
                                                </div>
                                                <div className="flex justify-center">
                                                    <button onClick={handleLogout} className="flex gap-2 justify-center items-center btn btn-outline">Logout<MdOutlineLogout></MdOutlineLogout></button>
                                                </div>
                                            </div>

                                        </ul>
                                    </div>


                                </div>
                            </>
                                : <div className="w-1/3  items-center">
                                    <NavLink to='/login'><MdLogin className="text-3xl"></MdLogin></NavLink>
                                </div>
                        }
                    </div>



                </div>

            </div>


        </nav>
    );
};

export default Navbar;