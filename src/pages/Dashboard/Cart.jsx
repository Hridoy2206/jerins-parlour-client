import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGetServices } from "../../hook/useCustomFatchingData";
import ServiceCart from "../../components/ServiceCart";

const Cart = () => {
    const [user] = useAuthState(auth)
    const { isLoading, isError, data, refetch } = useGetServices('cart', `http://localhost:5000/cart?email=${user?.email}`);

    return (
        <div className="grid lg:grid-cols-3 gap-5">
            {
                data?.map(service => <ServiceCart key={service._id} service={service} refetch={refetch} />)
            }
        </div>
    );
};

export default Cart;