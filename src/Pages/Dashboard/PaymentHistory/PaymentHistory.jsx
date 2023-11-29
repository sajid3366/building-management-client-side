import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    console.log(user);
    const { data: payments = [] } = useQuery({
        queryKey: ['payments-history'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    console.log(payments);
    return (
        <div>
            <SectionTitle heading="Payment History"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Rent</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, idx) => <tr key={payment._id} className="bg-base-200">
                                <th>{idx + 1}</th>
                                <td>{payment.email}</td>
                                <td>${payment.rent}</td>
                                <td>{payment.paymentDate}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;