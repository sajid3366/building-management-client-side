import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        return logOut()
    }
    return (
        <nav className=" lg:flex justify-between py-1 items-center px-4 h-[100%] ">
            <div>
                <Link to="/">
                    <img className='w-full lg:w-[200px] cursor-pointer' src="https://i.ibb.co/pfhtbzx/study-corner.png" alt="" />
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
                        <NavLink to="/createassignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Create Assignments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/assignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Assignments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myassignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            My Assignments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/submittedassignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Submitted Assignments
                        </NavLink>
                    </li>

                </ul>
                <div className="mt-5 lg:ml-10 flex justify-center items-center gap-2 lg:mt-0 py-2">

                    <div>
                        {
                            user ? <>

                                <div className="flex gap-2 items-center">

                                    <div className="relative group cursor-pointer">
                                        <img src={user.photoURL} alt="Your Image" className="w-[40px] h-[40px] rounded-full group-hover:opacity-50" />
                                        <div className="absolute w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                            <p className="text-black text-lg ">{user.displayName}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={handleLogout} className="  ml-2 bg-slate-300 rounded-sm  text-black px-4 py-2">Logout</button>
                                    </div>

                                </div>
                            </>
                                : <div className="w-1/3  items-center">
                                    <NavLink to='/login'><button className="bg-slate-300 rounded-sm text-black  px-4 py-2">Login</button></NavLink>
                                </div>
                        }
                    </div>



                </div>

            </div>


        </nav>
    );
};

export default Navbar;