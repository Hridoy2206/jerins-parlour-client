import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalState } from '../ContextAPI/GlobalStateManagment';

const Drower = ({ menuList }) => {
    const { sidebarToogle } = useContext(GlobalState)
    return (
        <div className='flex px-4 lg:px-0'>
            {/*//* ------Desktop Version-------*/}
            <div className=' lg:block hidden w-72 h-screen lg:ml-10'>
                <ul className='space-y-4 text[#878787] mt-8'>
                    {menuList}
                </ul>
            </div>
            {/*//* ------Mobile Version-------*/}
            <div className={`block lg:hidden  bg-[#f1f1f1] w-48 p-5  text-center absolute ${sidebarToogle ? 'left-0' : '-left-72'} duration-300 rounded-md`}>
                <ul className="space-y-3">
                    {menuList}
                </ul>
            </div>
            <div className='flex-1 h-screen bg-[#F4F7FC] p-6'>
                <Outlet />
            </div>
        </div>
    );
};

export default Drower;