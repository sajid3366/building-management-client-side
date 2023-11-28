import Swal from "sweetalert2";
import Button from "../../Shared/Button/Button";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DateObject from "react-date-object";


const ApartmentCard = ({ apartment }) => {
    const { _id, apartmentImage, blockName, floorNo, apartmentNo, rent } = apartment;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    var date = new DateObject();
    const agreementReqDate = date.format();
    const handleAgreement = () => {

        if (user && user.email) {
            const newAgreement = {
                name: user?.displayName,
                email: user?.email,
                floorNo,
                blockName,
                apartmentNo,
                rent,
                agreementReqDate,
                status: 'pending'
            }
            axiosSecure.post('/agreement', newAgreement)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Apartment Booked",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

        }
    }
    return (
        <div className="rounded-sm">
            <figure><img className="w-full rounded-sm h-[250px]" src={apartmentImage} alt="Apartment Image" /></figure>
            <div className="px-5 my-4 space-y-2">
                <h2 className="text-2xl font-bold">{blockName}</h2>
                <p className="text-lg font-medium">Floor no - {floorNo}</p>
                <p className="text-lg font-medium">Apartment no - {apartmentNo}</p>
                <hr className="my-2 border-2" />
                <div className="card-actions justify-between ">
                    <p className="text-xl text-[#A1A1A1] font-semibold">${rent}</p>
                    <div onClick={() => handleAgreement(_id)}>
                        <Button title={"Agreement"} ></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;