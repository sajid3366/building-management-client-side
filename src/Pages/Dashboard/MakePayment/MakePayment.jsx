import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Button from "../../../Shared/Button/Button";

const MakePayment = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: apartments = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agreement/${user.email}`)
            return res.data;
        }
    })

    console.log(apartments);
    return (
        <div>
            <SectionTitle heading="Pay for comfort"></SectionTitle>
            <div className="grid grid-cols-2 gap-8">
                {
                    apartments.map(apartment => <div key={apartment._id} className="rounded-md bg-gray-100 ">
                        <div className="card-body">
                            {/* <h2 className="font-semibold">Full Name</h2>
                            <h2 className="text-xl">{user?.displayName}</h2> */}
                            <h2 className="font-semibold mt-2">Email Address</h2>
                            <h2 className="text-xl mb-2">{user?.email}</h2>
                            <h2 className="text-2xl font-bold">{apartment.blockName}</h2>
                            <p className="text-lg font-medium">Floor no - {apartment.floorNo}</p>
                            <p className="text-lg font-medium">Apartment no - {apartment.apartmentNo}</p>
                            <hr className="my-2 border-2" />
                            <div className="card-actions justify-between ">
                                <p className="text-xl text-[#A1A1A1] font-semibold">${apartment.rent}</p>
                                <div>
                                    <Button title="Pay" ></Button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MakePayment;