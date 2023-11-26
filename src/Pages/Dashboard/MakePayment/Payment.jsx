import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)


const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;