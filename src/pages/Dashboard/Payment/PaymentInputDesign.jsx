import paypal from "../../../assets/icons/paypal.png"
import craditCard from "../../../assets/icons/credit-card 1.png"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useLocation, useParams } from "react-router-dom";
const PaymentInputDesign = () => {
    const location = useLocation()
    const { id } = useParams();
    const { service, email, name } = location.state
    const { title, price, email: cartEmail } = service;
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log(card);

        // Get the values from your input fields
        // const cardNumber = document.querySelector('input[placeholder="Card Number"]').value;
        // const expiry = document.querySelector('input[placeholder="MM/ YY"]').value;
        // const cvc = document.querySelector('input[placeholder="CVC"]').value;
        // const zipCode = document.querySelector('input[placeholder="ZIP Code"]').value;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("Error", error);
        } else {
            console.log("Payment Methods", paymentMethod);
        }
    }
    return (
        <section className="lg:p-6">
            <form onSubmit={handleSubmit} className="lg:w-1/2 w-full">

                {/*//* --====User information field===---*/}
                <div className="flex flex-col gap-4">
                    <p className="w-full px-2 py-4 rounded-lg bg-white outline-none text-gray-600 font-semibold">{name}</p>
                    <p className="w-full px-2 py-4 rounded-lg bg-white outline-none text-gray-600 font-semibold">{email || cartEmail}</p>
                    <p className="w-full px-2 py-4 rounded-lg bg-white outline-none text-gray-600 font-semibold">{title}</p>
                </div>
                {/*//* --====Payment methods field===---*/}
                <div className="space-y-4 mt-7">
                    <p className="font-semibold text-xl text-gray-400">Pay with</p>

                    {/*//* --====input:Radio field===---*/}
                    <div className="flex gap-4 lg:gap-8">
                        <div className="flex gap-2 items-center">
                            <input className=" h-5 w-5 cursor-pointer" type="radio" defaultChecked name="payment-type" id="" />
                            <label className="text-xl font-semibold text-gray-600 flex items-center gap-2" htmlFor="Paypal"><span><img className="w-6" src={craditCard} alt="" /></span><span>Cradit Cart</span></label>
                        </div>

                        <div className="flex gap-2 items-center">
                            <input className=" h-5 w-5 cursor-pointer" type="radio" name="payment-type" id="" />
                            <label className="text-xl font-semibold text-gray-600 flex items-center gap-2" htmlFor="Cradit Card"><span><img className="w-5" src={paypal} alt="" /></span><span>Paypal</span></label>
                        </div>
                    </div>

                    {/*//* --====Payment Card information field===---*/}
                    <div className="space-y-4">
                        {/* <CardElement
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
                        /> */}
                        <input type="text" className="input border-none w-full placeholder:text-gray-400" placeholder="Card Number" />
                        <div className="w-full flex justify-between gap-3">
                            <input className="input border-none w-full placeholder:text-gray-400" type="text" pattern="\d{2}/\d{2}" placeholder="MM/ YY" />
                            <input className="input border-none w-full no-spinner" type="number" placeholder="CVC" />
                            <input
                                type="number"
                                className="input border-none w-full placeholder:text-gray-400 no-spinner"
                                placeholder="ZIP Code"
                            />
                        </div>
                    </div>
                </div>
                {/*//* --====Submit button===---*/}
                <div className="flex justify-between items-center mt-5">
                    <p className="text-gray-500 font-semibold text-xl">Yout Service charge will be <span className="font-bold text-primary">${price}</span></p>
                    <input disabled={!stripe} type="submit" className="btn-primary px-14 cursor-pointer" value={"PAY"} />
                    {/* <button className="font-bold text-primary" type="submit" disabled={!stripe}>
                        Pay
                    </button> */}
                </div>
            </form>
        </section>
    );
};

export default PaymentInputDesign;