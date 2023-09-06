import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import { BiMessageDetail } from "react-icons/bi"
import Drower from "../../../components/Drower";
import { Link } from "react-router-dom";
const Dashboard = () => {
    const menuList = <>
        <li><Link to='/dashboard/cart' className="flex text-xl gap-3 items-center"><AiOutlineShoppingCart /> Cart</Link></li>
        <li><Link to='/dashboard/bookings' className="flex text-xl gap-3 items-center"><BsHandbag /> Bookings</Link></li>
        <li><Link to='/dashboard/review' className="flex text-xl gap-3 items-center"><BiMessageDetail /> Review</Link></li>
    </>
    return (
        <div >
            <Drower menuList={menuList} />
        </div>
    );
};

export default Dashboard;