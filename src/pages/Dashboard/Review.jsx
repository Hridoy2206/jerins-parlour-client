import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <secion>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:mr-12 lg:w-1/2">
                <div className=" bg-white lg:p-8 p-4 lg:flex gap-12 rounded-lg space-y-3 lg:space-y-0">
                    <div className="w-full space-y-4" data-aos="zoom-in">
                        <div className="flex flex-col space-y-2">
                            <label className="text-xl text-gray-600" htmlFor="title">Product Name</label>
                            <input className="input"
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Service Name"
                                {...register('title', { required: true })}
                            />
                            {errors?.title?.type === "required" && <p className="error">Product Name is required!</p>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-xl text-gray-600" htmlFor="number">Reting</label>
                            <input className="input"
                                type="text"
                                name="number"
                                id="price"
                                placeholder="Write your Reting out of five"
                                {...register('retings', { required: true })}
                            />
                            {errors?.retings?.type === "required" && <p className="error">Retings Name is required!</p>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-xl text-gray-600" htmlFor="description">Description</label>
                            <textarea className="input"
                                id="description"
                                rows="2"
                                name="description"
                                placeholder="Desciption"
                                {...register('discription', { required: true })}
                            ></textarea>
                            {errors?.discription?.type === "required" && <p className="error">Discription Name is required!</p>}
                        </div>
                        <div className=' mt-5' data-aos="zoom-out">
                            <input type="submit"
                                value='Submit'
                                className={`btn-primary cursor-pointer`}
                            />
                        </div>
                    </div>

                </div>
            </form>
        </secion>
    );
};

export default Review;