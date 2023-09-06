
import CustomBtn from "../../../components/CustomBtn/CustomBtn";
import CustomLoading from "../../../components/CustomBtn/CustomLoading";
import { useGetServices } from "../../../hook/useCustomFatchingData";
const OurServices = () => {

    const { isLoading, data } = useGetServices('services', 'http://localhost:5000/services')

    if (isLoading) {
        return <CustomLoading />
    }

    return (
        <section className="my-20" id="services">
            <h2 className='text-center font-medium'>Our Awasome <span className='text-primary'>Services</span></h2>

            <div className="lg:padding grid lg:grid-cols-3 gap-5 mt-16 mb-10 px-4">
                {
                    data?.map((service, index) => <div
                        key={service._id}
                        className={index === 1 ? 'shadow-xl rounded-md' : ''}
                    >
                        <div className=" p-8 text-center space-y-2">
                            <img className="w-16 mx-auto" src={service.image} alt="" />
                            <h5 className="font-medium">{service.title}</h5>
                            <p className="text-primary font-medium">$ {service.price}</p>
                            <p className="text-[#555]">{service.discription}</p>
                        </div>
                    </div>
                    )

                }
            </div>
            <div className="text-center">
                <CustomBtn>Explore More</CustomBtn>
            </div>
        </section>
    );
};

export default OurServices;