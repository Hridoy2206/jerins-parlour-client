import { Link, useLocation } from "react-router-dom";
import { fetchPostData, useDeleteData } from "../hook/useCustomFatchingData";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Menu } from "../ContextAPI/GlobalStateManagment";
import Swal from "sweetalert2";

const ServiceCart = ({ service, index, refetch }) => {
    const { _id, image, title, price, discription } = service;
    const location = useLocation()
    const manageService = location.pathname.includes('/manage-service');
    const cart = location.pathname.includes('/cart');
    const { databaseUser, setDatabaseuser } = useContext(Menu);

    const handleAddToCart = () => {
        fetchPostData("/cart", {
            image,
            title,
            price,
            discription,
            email: databaseUser?.email
        })
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                } else {
                    toast.error(result.message)
                }
            })
    }

    const handleDeleteCart = () => {
        fetch(`http://localhost:5000/cart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    toast.success(result.message)
                    refetch()
                }
            })
    }
    return (
        <div className={` ${manageService && "shadow-lg bg-white"} ${cart && "shadow-lg bg-white"} px-4 py-6 text-center space-y-2 hover:shadow-lg duration-300 rounded-md ${index === 1 && "shadow-lg"}`}>
            <img className="w-20 mx-auto duration-300" src={image} alt="" />
            <h5 className="font-semibold text-gray-600">{title}</h5>
            <p className="text-primary font-semibold text-xl">$ {price}</p>
            <p className="text-[#555] p-4">{discription}</p>
            <div className="flex lg:justify-between justify-center lg:gap-4 gap-8 text-sm font-semibold">
                {manageService ? <>
                    <button className="btn-primary bg-[#ffc815] w-1/2">Delete</button>
                    <button className="btn-primary bg-[#99a6b4] w-1/2"><Link>Edit </Link></button>
                </> : cart ? <>
                    <button onClick={handleDeleteCart} className="btn-primary  bg-[#ffc815]">Delete</button>
                    <button className="btn-primary bg-[#8E9BB9]"><Link>Book Now</Link></button>
                </> :
                    <>
                        <button onClick={handleAddToCart} className="btn-primary w-1/2">Ad to Cart</button>
                        <button className="btn-primary w-1/2 bg-[#8E9BB9]"><Link>Book Now</Link></button>
                    </>}
            </div>
        </div>
    );
};

export default ServiceCart;