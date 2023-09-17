import CustomLoading from "../../components/CustomLoading";
import ServiceCart from "../../components/ServiceCart";
import { useGetServices } from "../../hook/useCustomFatchingData";



const ManageService = () => {

    const { isLoading, isError, data } = useGetServices('service', 'http://localhost:5000/service?allService=true');
    console.log(data);
    if (isLoading) {
        return <CustomLoading />
    }
    return (
        <div className="grid lg:grid-cols-3 gap-5">
            {
                data?.map(service => <ServiceCart
                    service={service}
                    key={service._id}
                />)
            }
        </div>
    );
};

export default ManageService;