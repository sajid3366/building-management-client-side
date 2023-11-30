import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";


const AdminProfile = () => {
    const { user } = useAuth();
    const axiosSecure= useAxiosSecure();
    const {data} = useQuery({
        queryKey: ['user-count'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/usersCount')
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle heading={"My profile"}></SectionTitle>
            <div className="bg-[#F9F5F6] py-10 px-10 flex gap-10">
                <img className="rounded-full h-[200px] w-[200px]" src={user?.photoURL} alt="" />
                <div className="mt-10">
                    <h2 className="font-semibold">Full Name</h2>
                    <h2 className="text-xl">{user?.displayName}</h2>
                    <h2 className="font-semibold mt-4">Email Address</h2>
                    <h2 className="text-xl ">{user?.email}</h2>
                </div>

            </div>
            <div className="w-full mt-5">
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <FaUsers></FaUsers>
                        </div>
                        <div className="stat-title">Number Of User</div>
                        <div className="stat-value">{data?.count}</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AdminProfile;