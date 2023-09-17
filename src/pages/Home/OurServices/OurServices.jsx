
import CustomLoading from "../../../components/CustomLoading";
import { useGetServices } from "../../../hook/useCustomFatchingData";
import ServiceCart from "../../../components/ServiceCart";
import { useState } from "react";
const OurServices = () => {

    const { isLoading, isError, data } = useGetServices('services', 'http://localhost:5000/service');
    const [moreService, setMoreService] = useState([]);
    const [moreServiceLoading, setMoreServiceLoading] = useState(false)

    if (isLoading || moreServiceLoading) {
        return <CustomLoading />
    }
    if (isError) {
        console.log(isError);
    }
    const handleMoreServices = () => {
        setMoreServiceLoading(true)
        fetch('http://localhost:5000/service?moreService=true')
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    setMoreService(result.moreService);
                    setMoreServiceLoading(false)
                }
            })
    }

    return (
        <section className="my-20" id="services">
            <h2 className='text-center font-medium'>Our Awasome <span className='text-primary'>Services</span></h2>

            <div className="lg:padding grid lg:grid-cols-3 gap-5 mt-16 mb-10 px-4 ">
                {
                    data?.map((service, index) => <ServiceCart key={service._id} service={service} index={index} />)
                }
                {
                    moreService.map((service) => <ServiceCart key={service._id} service={service} />)
                }
            </div>
            <div className="text-center">
                <button onClick={handleMoreServices} className="btn-primary">Explore More</button>
            </div>
        </section>
    );
};

export default OurServices;