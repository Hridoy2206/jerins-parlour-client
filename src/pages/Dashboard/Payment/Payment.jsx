import { Elements } from "@stripe/react-stripe-js";
import PaymentInputDesign from "./PaymentInputDesign";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK)
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentInputDesign />
            </Elements>
        </div>
    );
};

export default Payment;