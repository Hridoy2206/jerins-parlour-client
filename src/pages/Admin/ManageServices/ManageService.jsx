import { Outlet, useLocation } from "react-router-dom";
import CustomLoading from "../../../components/CustomLoading";
import ServiceCart from "../../../components/ServiceCart";
import { useGetServices } from "../../../hook/useCustomFatchingData";



const ManageService = () => {
    const { isLoading, isError, data, refetch } = useGetServices('service', 'http://localhost:5000/service?allService=true');
    const location = useLocation()
    const isEditService = location.pathname.includes('edit-service')
    if (isLoading) {
        return <CustomLoading />
    }
    return (
        <div className={`${!isEditService && "grid lg:grid-cols-3 gap-5"}`}>
            {!isEditService ?
                data?.map(service => <ServiceCart
                    service={service}
                    key={service._id}
                    refetch={refetch}
                />)
                :
                <Outlet />
            }
        </div>
    );
};

export default ManageService;