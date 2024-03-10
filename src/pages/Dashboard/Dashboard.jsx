import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import { BiMessageDetail } from "react-icons/bi"
import { NavLink } from "react-router-dom";
import Drower from "../../components/Drower";

const Dashboard = () => {
    const menuList = <>
        <li><NavLink to='/dashboard/cart' className="flex text-xl gap-3 items-center"><AiOutlineShoppingCart /> Cart</NavLink></li>
        <li><NavLink to='/dashboard/bookings' className="flex text-xl gap-3 items-center"><BsHandbag /> Bookings</NavLink></li>
        <li><NavLink to='/dashboard/review' className="flex text-xl gap-3 items-center"><BiMessageDetail /> Review</NavLink></li>
    </>
    return (
        <div >
            <Drower menuList={menuList} />
        </div>
    );
};

export default Dashboard;