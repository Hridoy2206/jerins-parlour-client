import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../ContextAPI/GlobalStateManagment';


const Drower = ({ menuList, adminMenuList }) => {
    const { sidebarToggle, setSidebarToggle } = useContext(Menu);
    return (
        <div className='flex px-4 lg:px-0'>
            {/*//* ------Desktop Version-------*/}
            <div className=' lg:block hidden w-72 h-screen lg:ml-10'>
                <ul className='space-y-6 text-gray-500 mt-8'>
                    {menuList}
                    {adminMenuList}
                </ul>
            </div>
            {/*//* ------Mobile Version-------*/}
            <div className={`z-10 block lg:hidden  bg-white w-64 p-5  text-center absolute shadow-lg rounded-md ${sidebarToggle ? 'left-0' : '-left-72'} duration-300 rounded-md`}>
                <ul className="space-y-3 text-gray-500">
                    {menuList}
                    {adminMenuList}
                </ul>
            </div>

            {/*//? ===Page content==*/}
            <div onClick={() => setSidebarToggle(false)} className='flex-1 bg-[#F4F7FC] lg:p-6 p-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Drower;