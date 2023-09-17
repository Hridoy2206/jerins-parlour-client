import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai"
import { fetchPostData } from "../../hook/useCustomFatchingData";
import toast from "react-hot-toast";
import { useState } from "react";
import CustomLoading from "../../components/CustomLoading";
import { useNavigate } from "react-router-dom";
const AdService = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [serviceLoading, setServiceLoading] = useState(false);
    const [image, setImage] = useState('');
    const [uploadImageLoading, setUploadImageLoading] = useState(false);
    const navigate = useNavigate()



    if (serviceLoading || uploadImageLoading) {
        return <CustomLoading />
    }

    const uploadImage = (even) => {
        setUploadImageLoading(true);
        const formData = new FormData();
        formData.append('image', even.target.files[0])
        const image_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`;
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(({ data: imageResponse }) => {
                if (imageResponse.id) {
                    setImage(imageResponse.display_url);
                    setUploadImageLoading(false)
                }
            })

    }
    console.log(image);
    const onSubmit = async (data) => {
        console.log(data);
        await fetchPostData('/service', { ...data, image })
            .then(result => {
                if (result.insertedId) {
                    toast.success('Added a new Item!');
                    navigate("/admin/manage-service")
                    reset()
                }
            })


    }
    return (
        <section>
            {/* <h3 className="text-center m-5">Ad Service</h3> */}
            <form onSubmit={handleSubmit(onSubmit)} className="lg:mr-12 ">
                <div className=" bg-white lg:p-8 p-4 lg:flex gap-12 rounded-lg space-y-3 lg:space-y-0">
                    <div className="lg:w-5/12 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-xl text-gray-600" htmlFor="title">Title</label>
                            <input className="input"
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Service Name"
                                {...register('title', { required: true, message: "Email is required!" })}
                            />
                            {errors?.title && <p className="error">{errors?.title.message}</p>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-xl text-gray-600" htmlFor="price">Price</label>
                            <input className="input"
                                type="number"
                                name="number"
                                id="price"
                                placeholder="Service Price"
                                {...register('price', { required: true, message: "Price is required!" })}
                            />
                            {errors?.price && <p className="error">{errors?.price.message}</p>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-xl text-gray-600" htmlFor="description">Description</label>
                            <textarea className="input"
                                id="description"
                                rows="2"
                                name="description"
                                placeholder="Desciption"
                                {...register('discription', { required: true, message: "Description is required!" })}
                            ></textarea>
                            {errors?.description && <p className="error">{errors?.description.message}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 space-y-2">
                        <label className="text-xl text-gray-600" htmlFor="image">Image</label>

                        {image &&
                            <div className="">
                                <img src={image} alt="" className="w-52 h-52 rounded-full ring-2 ring-offset-8 my-4" />
                            </div>
                        }

                        <label htmlFor="image" className={`${!image && 'disabled:'} input bg-[#FFEAF3] lg:w-2/5 w-4/6 border-red-500 text-primary flex items-center gap-3 cursor-pointer`} >
                            <span className="text-3xl"><AiOutlineCloudUpload /></span>
                            <span className="font-semibold">Upload Image</span>
                        </label>

                        <input
                            onChange={uploadImage}
                            className="hidden"
                            type="file"
                            id="image"
                        />

                    </div>
                </div>
                <div className='lg:flex justify-end mt-5 text-center'>
                    <input type="submit"
                        value='Submit'
                        className={`btn-primary cursor-pointer ${!image && 'bg-gray-400'}`}
                    />
                </div>
            </form>
        </section >
    );
};

export default AdService;