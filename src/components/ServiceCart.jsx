import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchPostData } from "../hook/useCustomFatchingData";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Menu } from "../ContextAPI/GlobalStateManagment";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const ServiceCart = ({ service, index, refetch }) => {
    const { _id, image, title, price, discription } = service;
    const location = useLocation()
    const manageService = location.pathname.includes('/manage-service');
    const cart = location.pathname.includes('/cart');
    const { isAdmin, isRefetch, setIsRefetch } = useContext(Menu);
    const [user] = useAuthState(auth);
    console.log(user?.displayName);
    const navigate = useNavigate()

    const handleAddToCart = () => {
        fetchPostData("/cart", {
            image,
            title,
            price,
            discription,
            email: user?.email
        })
            .then(result => {
                console.log(result);
                if (result?.success) {
                    if (isAdmin) {
                        toast.error('Admin not allowed Add to cart!')
                    } else {
                        toast.success(result?.message);
                    }
                } else {
                    toast.error(result.message)
                }
            })
    }

    //* TODO: Do not repeated function. created a custom function to use many palces.
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

    const hadnleDeleteService = () => {
        fetch(`http://localhost:5000/service/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast.success(result.message);
                    refetch()
                }
            })
    }

    if (isRefetch) {
        refetch()
        setIsRefetch(false)
    }
    return (
        <div data-aos="zoom-in" className={` ${manageService && "shadow-lg bg-white"} ${cart && "shadow-lg bg-white"} px-7 py-6 text-center space-y-2 hover:shadow-lg duration-300 rounded-md ${index === 1 && "shadow-lg"}`}>
            <img className="w-24 mx-auto duration-300" src={image} alt="" />
            <h5 className="font-semibold text-gray-600">{title}</h5>
            <p className="text-primary font-semibold text-xl">$ {price}</p>
            <p className="text-[#555] p-4">{discription}</p>
            <div className="flex lg:justify-between justify-center lg:gap-4 gap-8 text-sm font-semibold">
                {manageService ? <>
                    <button onClick={() => navigate(`/admin/manage-service/edit-service/${_id}`, { state: { service } })} className="btn-primary bg-[#aab7c5] w-1/2"><Link>Edit </Link></button>
                    <button onClick={hadnleDeleteService} className="btn-primary bg-[#ffc815] w-1/2">Delete</button>
                </> : cart ? <>
                    <div className="flex gap-4 w-full">
                        <button onClick={handleDeleteCart} className=" btn-primary text-sm bg-primary w-1/2 px-0">Delete</button>
                        <button onClick={() => navigate(`/dashboard/payment/${_id}`, { state: { service, name: user?.displayName } })} className="btn-primary text-sm bg-[#ffc815] px-0 w-1/2">Book Now</button>
                    </div>
                </> :
                    <>
                        <button onClick={handleAddToCart}
                            className={`btn-primary w-1/2 ${(!user || isAdmin) ? "active:scale-100 bg-gray-300" : ""}`}
                            disabled={!user || isAdmin}>Add to Cart</button>

                        <button className={`btn-primary w-1/2 bg-[#000080] ${(!user || isAdmin) ? "active:scale-100 bg-gray-300" : ""}`}
                            disabled={!user || isAdmin}
                            onClick={() => navigate(`/dashboard/payment/${_id}`, { state: { service, email: user.email, name: user?.displayName } })}
                        >Book Now</button>
                    </>}
            </div>
        </div>
    );
};

export default ServiceCart;