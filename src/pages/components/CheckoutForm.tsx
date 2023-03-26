import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe("your-publishable-key");

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card, 
        });

        if (!error) { 
            const response = await fetch("/api/create-checkout-session", {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({ paymentMethodId: paymentMethod.id}),
            }); 

            const data = await response.json();

            if (data.error) {
                console.error("Error processing paytment:", data.error);
            } else {
                stripe.redirectToCheckout({ sessionId: data.sessionId });
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
             Pay Now    
            </button>
        </form>
    );
};

const WrappedCheckoutForm = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default WrappedCheckoutForm; 
