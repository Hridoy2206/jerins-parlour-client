import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai"
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomLoading from "../../../components/CustomLoading";
import { fetchPostData, useGetServices, useUpdateData } from "../../../hook/useCustomFatchingData";
import { Menu } from "../../../ContextAPI/GlobalStateManagment";

const EditService = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [serviceLoading, setServiceLoading] = useState(false);
    const { isRefetch, setIsRefetch } = useContext(Menu)
    const location = useLocation()
    const { id } = useParams();
    const { service } = location.state;
    const { title, image: serviceImg, discription, price } = service;
    const [image, setImage] = useState(serviceImg);
    const [uploadImageLoading, setUploadImageLoading] = useState(false);
    const navigate = useNavigate()


    const { isLoading, isError, data, refetch } = useUpdateData('service', `/service`);

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
    const handleUpdateService = async (updateData) => {

        fetch(`http://localhost:5000/service/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...updateData, image })
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    toast.success("service Updated successfully!");
                    setIsRefetch(true)
                    setTimeout(() => {
                        navigate('/admin/manage-service')
                    }, 3000)
                }
            })

    }
    if (serviceLoading) {
        return <CustomLoading />
    }

    return (
        <section>
            {/* <h3 className="text-center m-5">Ad Service</h3> */}
            <form onSubmit={handleSubmit(handleUpdateService)} className="lg:w-8/12">
                <div className=" bg-white lg:p-8 p-4 lg:flex gap-12 rounded-lg space-y-3 lg:space-y-0 ">
                    <div className="lg:w-7/12 space-y-4" data-aos="zoom-in">
                        <div className="flex flex-col space-y-2">
                            <label className="text-xl text-gray-600" htmlFor="title">Title</label>
                            <input className="input"
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Service Name"
                                defaultValue={title}
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
                                defaultValue={price}
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
                                defaultValue={discription}
                                {...register('discription', { required: true, message: "Description is required!" })}
                            ></textarea>
                            {errors?.description && <p className="error">{errors?.description.message}</p>}
                        </div>
                    </div>

                    <div className={`flex flex-col flex-1 space-y-2 ${(image || serviceImg) && "justify-center items-center"}`} >
                        <label className={`text-xl text-gray-600 `} htmlFor="image">Image</label>

                        {/* {uploadImageLoading && <CustomLoading />} */}
                        {
                            <div className="" data-aos="zoom-in">
                                <img src={!image ? serviceImg : image} alt="" className="lg:w-52 w-44 lg:h-52 h-44 rounded-full ring-2 ring-offset-8 my-4" />
                            </div>
                        }

                        <label data-aos="zoom-in" htmlFor="image" className={`${!image && 'disabled:'} input bg-[#FFEAF3] lg:w-10/12 w-4/6 border-red-500 text-primary flex items-center gap-3 cursor-pointer`} >
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
                <div className='lg:flex justify-end mt-5 text-center' data-aos="zoom-out">
                    <input type="submit"
                        value='Submit'
                        className={`btn-primary cursor-pointer`}
                    />
                </div>
            </form>
        </section >
    );
};

export default EditService;