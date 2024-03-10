import { NavLink } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { BiUserPlus } from "react-icons/bi"
import { RxDashboard } from "react-icons/rx"
import Drower from '../../components/Drower';

const Admin = () => {
    const adminMenuList = <>
        <li><NavLink to='/admin/order-list' className="flex text-xl gap-3 items-center"><BsHandbag /> Order List</NavLink></li>
        <li><NavLink to='/admin/ad-service' className="flex text-xl gap-3 items-center"><AiOutlinePlus /> Ad Service</NavLink></li>
        <li><NavLink to='/admin/manage-service' className="flex text-xl gap-3 items-center"><RxDashboard /> Manage Service </NavLink></li>
        <li><NavLink to='/admin/manage-user' className="flex text-xl gap-3 items-center"><BiUserPlus /> Manage User </NavLink></li>
    </>
    return (
        <div>
            <Drower adminMenuList={adminMenuList} />
        </div>
    );
};

export default Admin;