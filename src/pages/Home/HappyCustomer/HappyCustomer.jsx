import serviceImg from "../../../assets/images/serviceImg.png"
const HappyCustomer = () => {
    return (
        <section className="lg:flex gap-16 space-y-6 lg:space-y-0 lg:padding bg-[#FFF8F5] py-32 px-4">
            <div>
                <img src={serviceImg} alt="" />
            </div>
            <div className="lg:space-y-8 space-y-4 lg:relative text-center lg:text-left">
                <h2 className="font-semibold ">
                    Let us handle your <br className="lg:block hidden" /> screen <span className="text-[#F63E7B]">Professionally</span>.
                </h2>

                <p className="text-[#666] text-xl">
                    With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
                </p>
                <div className="flex justify-evenly lg:justify-start pr-0">
                    <div className="space-y-3 lg:pr-16">
                        <h1 className="text-primary font-bold">500+</h1>
                        <p className="font-semibold text-[#666]">Happy Customer</p>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-primary font-bold">516+</h1>
                        <p className="font-semibold text-[#666]">Total Services</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyCustomer;