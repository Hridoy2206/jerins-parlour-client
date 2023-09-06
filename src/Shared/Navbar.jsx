import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png"
import CustomBtn from "../components/CustomBtn/CustomBtn";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt1 } from "react-icons/hi"
import { useContext, useState } from "react";
import { GlobalState } from "../ContextAPI/GlobalStateManagment";
const Navbar = ({ menuList }) => {
    const [toggle, setToggle] = useState(false);
    {/*//* ---Globally usable dashboard sidebar state with context API---*/ }
    const { sidebarToogle, setSidebarToogle } = useContext(GlobalState);


    const location = useLocation();
    const isLocation = location.pathname;
    const isDashboard = isLocation.includes('/dashboard')
    const isNavbarBgNone = isLocation.includes('/login') || isLocation.includes('/register')


    //* Handle toggle in Mobile version
    const handleToggle = () => {
        if (toggle === true || sidebarToogle === true) {
            setSidebarToogle(false)
        }
        if (sidebarToogle === true) {
            setToggle(false)
        }
        setToggle(pre => !pre)
    }

    //* Handle hashing route when click Contact up item
    const contactHashingRoute = e => {
        e.preventDefault()
        const contactSection = document.getElementById('contact-us');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    //* Handle hashing route when click Service item
    const serviceHashingRoute = e => {
        e.preventDefault()
        const serviceSection = document.getElementById('services');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
    }



    //* Menu lists
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><a onClick={serviceHashingRoute} href="#services">Services</a></li>
        <li><Link to='/dashboard/cart'>Dashboard</Link></li>
        <li><a onClick={contactHashingRoute} href="#contact-us">Contact Us</a></li>
        <li><Link to='/login'><CustomBtn>Login</CustomBtn></Link></li>
    </>


    return (
        <nav className={`flex  justify-between ${isNavbarBgNone || isDashboard ? 'lg:p-10 bg-white' : 'lg:padding bg-[#FFF8F5] '}  lg:py-6 py-4 px-4`} id="home">

            {isDashboard && <div className="lg:hidden block relative ">
                <div onClick={() => setSidebarToogle((pre) => !pre)} className="text-4xl cursor-pointer block lg:hidden">
                    {sidebarToogle ? <AiOutlineClose /> : <HiMenuAlt1 />}
                </div>
            </div>}

            <div className="w-32">
                <Link to='/'><img src={logoImg} alt="" /></Link>
            </div>

            {/*--------------- Desktop --------------*/}
            <div className="hidden lg:block">
                <ul className="flex items-center space-x-10">
                    {menuItems}
                </ul>
            </div>
            {/*--------------- Mobile --------------*/}
            <div className="lg:hidden block relative ">
                <div onClick={handleToggle} className="text-4xl cursor-pointer ">
                    {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
                <div className={`block lg:hidden  bg-[#f1f1f1] w-48 p-5 mt-5 text-center absolute ${toggle ? 'right-0' : '-right-72'} duration-300 rounded-md`}>
                    <ul className="space-y-3">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;