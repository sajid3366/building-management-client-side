import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const axiosSecure = useAxiosSecure();
    // const rent = 
    const navigate = useNavigate()
    const { data: agreements = [] } = useQuery({
        queryKey: ['user-payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agreement/${user.email}`)
            console.log(res.data);
            return res.data
            
        }
    })
    console.log(agreements);

    // useEffect(() => {
    //     if (totalPrice > 0) {
    //         axiosSecure.post('/create-payment-intent', { price: totalPrice })
    //             .then(res => {
    //                 console.log(res.data.clientSecret);
    //                 setClientSecret(res.data.clientSecret)
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             })
    //     }
    // }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
            setError(" ")
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'annanymous',
                    name: user?.displayName || 'annanymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error ', confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.id) {
                setTransactionId(paymentIntent.id)
                console.log('transaction id', paymentIntent.id);

                // save the payment in the database
                const payment = {
                    email: user.email,
                    // price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),

                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment ', res.data);
                // refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate to the payment history page
                    navigate('/dashboard/paymentHistory');
                }
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-secondary mt-5" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-500">Your transaction id is : {transactionId}</p>}

            </form>

        </div>
    );
};

export default CheckOutForm;