import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Shared/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AgreementManagement = () => {
    const axiosSecure = useAxiosSecure();
    const { data: agreements = [], refetch } = useQuery({
        queryKey: ['agreements'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agreement/${'pending'}`);
            return res.data;
        }
    })

    const handleAcceptButton = (id) => {
        // console.log('hello id', id);
        axiosSecure.patch(`agreement/admin/${id}`)
            .then(result => {
                if (result.data.modifiedCount > 0) {
                    // axiosSecure.
                    Swal.fire({
                        title: "Accepted",
                        text: "Agreement Accepted",
                        icon: "success"
                    });
                    refetch();
                }
            })
    }

    const handleRejectButton = (id) => {
        axiosSecure.patch(`agreement/admin/${id}`)
            .then(result => {
                if (result.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Rejected",
                        text: "Agreement Rejected",
                        icon: "success"
                    });
                    refetch();
                }
            })
    }



    return (
        <div>
            <SectionTitle heading={"agreement requests"}></SectionTitle>
            <h2>length: {agreements.length}</h2>

            <div className=''>
                {
                    agreements.map(agreement => <div key={agreement._id} className="card mb-5  bg-base-100 shadow-xl">
                        <div className=" flex justify-between py-5 px-12">
                            <div>
                                <h2 className="font-light mt-2">User Name</h2>
                                <h2 className="card-title">{agreement.name}</h2>
                                <h2 className="font-light mt-2">Email Address</h2>
                                <h2 className="text-xl mb-2">{agreement.email}</h2>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{agreement.blockName}</h2>
                                <p className="text-lg font-medium">Floor no - {agreement.floorNo}</p>
                                <p className="text-lg font-medium ">Apartment no - {agreement.apartmentNo}</p>
                                <p>Rent - ${agreement.rent}</p>
                                <p>Agreement request date - {agreement.agreementReqDate}</p>
                            </div>
                            <div className="card-actions mt-24">

                                <button onClick={() => handleAcceptButton(agreement._id)} className='py-2 px-4 rounded-sm text-white cursor-pointer  bg-[#12486B]'>Accept</button>
                                <button onClick={() => handleRejectButton(agreement._id)} className='py-2 px-4 rounded-sm text-white cursor-pointer  bg-red-700'>Reject</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AgreementManagement;