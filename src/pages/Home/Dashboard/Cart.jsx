import { useContext } from "react";
import ServiceCart from "../../../components/ServiceCart";
import { useGetServices } from "../../../hook/useCustomFatchingData";
import { Menu } from "../../../ContextAPI/GlobalStateManagment";

const Cart = () => {
    const { databaseUser } = useContext(Menu)
    const { isLoading, isError, data, refetch } = useGetServices('cart', `http://localhost:5000/cart?email=${databaseUser?.email}`);

    return (
        <div className="grid lg:grid-cols-3 gap-5">
            {
                data?.map(service => <ServiceCart key={service._id} service={service} refetch={refetch} />)
            }
        </div>
    );
};

export default Cart;