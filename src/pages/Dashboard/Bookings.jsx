import serviceImg from "../../assets/icons/Face-icon.png"
const Bookings = () => {
    return (
        <section className="flex lg:flex-row flex-col gap-8">
            <div className="p-6 rounded-2xl bg-white lg:w-4/12" data-aos="zoom-in">
                <div className="flex justify-between" >
                    <img className="w-20" src={serviceImg} alt="" />
                    <div>
                        <button className="btn-primary px-6 py-2 bg-green-200 text-green-600">Pending</button>
                    </div>
                </div>
                <div className="space-y-3 mt-3">
                    <h4 className="text-gray-700 font-semibold text-xl">Anti Age Face Treatment</h4>
                    <p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
            <div className="p-6 rounded-2xl bg-white lg:w-4/12" data-aos="zoom-in">
                <div className="flex justify-between">
                    <img className="w-20" src={serviceImg} alt="" />
                    <div>
                        <button className="btn-primary px-6 py-2 bg-green-200 text-green-600">Pending</button>
                    </div>
                </div>
                <div className="space-y-3 mt-3">
                    <h4 className="text-gray-700 font-semibold text-xl">Anti Age Face Treatment</h4>
                    <p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
            <div className="p-6 rounded-2xl bg-white lg:w-4/12" data-aos="zoom-in">
                <div className="flex justify-between">
                    <img className="w-20" src={serviceImg} alt="" />
                    <div>
                        <button className="btn-primary px-6 py-2 bg-green-200 text-green-600">Pending</button>
                    </div>
                </div>
                <div className="space-y-3 mt-3">
                    <h4 className="text-gray-700 font-semibold text-xl">Anti Age Face Treatment</h4>
                    <p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </section>
    );
};

export default Bookings;