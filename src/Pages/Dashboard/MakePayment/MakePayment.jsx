import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Button from "../../../Shared/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const MakePayment = () => {
    const axiosSecure = useAxiosSecure();
    const [inputValue, setInputValue] = useState('January');
    const { user } = useAuth();
    const { data: apartments = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agreement/member/${user.email}`)
            return res.data;   
        }
        
    })

    const updateAgreement = (e) => {
        const month = e.target.value;
        setInputValue(month)
    }
    const onClickFunction = (id) => {
        console.log(id);
        const month = { month: inputValue }
        axiosSecure.patch(`/agreement/${id}`, month)
            .then(res => {
                console.log(res.data);
            })

    }


    return (
        <div>
            <SectionTitle heading="Pay for comfort"></SectionTitle>
            <div className="grid grid-cols-2 gap-8">
                {
                    apartments.map(apartment => <div key={apartment._id} className="rounded-md bg-gray-100 ">
                        <div className="card-body">

                            <h2 className="font-semibold mt-2">Email Address</h2>
                            <h2 className="text-xl mb-2">{apartment.email}</h2>
                            <h2 className="text-2xl font-bold">{apartment.blockName}</h2>
                            <p className="text-lg font-medium">Floor no - {apartment.floorNo}</p>
                            <p className="text-lg font-medium ">Apartment no - {apartment.apartmentNo}</p>
                            <p className="mt-4 font-semibold text-[#A1A1A1]">Select the month</p>
                            <select onChange={updateAgreement} className="rounded-sm h-10 px-2" name="month" id="">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <hr className="my-2 border-2" />
                            <div className="card-actions justify-between ">
                                <p className="text-xl text-[#A1A1A1] font-semibold">${apartment.rent}</p>
                                <Link to={`/dashboard/pay/${apartment._id}`}>
                                    <div  onClick={() => onClickFunction(apartment._id)}>
                                        <Button title="Pay" ></Button>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MakePayment;