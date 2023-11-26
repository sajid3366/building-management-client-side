import { FaTrash, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageMembers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/users/${'member'}`)
            return result.data
        }
    })

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are You Sure!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove "
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}`)
                    .then(result => {
                        if (result.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Removed",
                                text: "Member has Removed",
                                icon: "success"
                            });
                            refetch();
                        }
                    })


            }
        });
    }
    return (
        <div>
            <SectionTitle heading={"Manage Members"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table rounded-md">
                    {/* head */}
                    <thead>
                        <tr className=" text-xl text-white bg-neutral-600">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id} className="bg-base-200">
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="font-bold btn text-2xl  text-red-600"><FaTrash/></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMembers;