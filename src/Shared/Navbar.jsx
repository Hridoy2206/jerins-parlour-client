import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt1 } from "react-icons/hi"
import { useContext } from "react";
import { Menu } from "../ContextAPI/GlobalStateManagment";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { AiOutlineLogout } from "react-icons/ai"
import CustomLoading from "../components/CustomLoading";
const Navbar = () => {
    const { toggleMenu, setToggleMenu } = useContext(Menu);
    {/*//* ---Globally usable dashboard sidebar state with context API---*/ }
    const { sidebarToggle, setSidebarToggle, isAdmin, databaseUser } = useContext(Menu);
    const [signOut, signOutLoading] = useSignOut(auth);
    const [user, userLoading] = useAuthState(auth);

    if (signOutLoading || userLoading) {
        return <CustomLoading />
    }

    {/*//* Handle open menubar to close sidebar*/ }
    const handleMenuToggle = () => {
        setToggleMenu(pre => !pre);
        setSidebarToggle(false); // Close the sidebar menu
    };

    {/*//*--=== Handle open sidebar to close menubar*/ }
    const handleSidebarToggle = () => {
        setSidebarToggle(pre => !pre);
        setToggleMenu(false); // Close the menuList 
    };


    {/*//* ----====Location tract to Daynamiccally navbar background change ====----*/ }
    const location = useLocation();
    const isLocation = location.pathname;
    const isDashboard = isLocation.includes('/dashboard');
    const AdminRoute = isLocation.includes('/admin')
    const isNavbarBgNone = isLocation.includes('/login') || isLocation.includes('/register')


    //*======--- Handle hashing route when click Contact up item
    const contactHashingRoute = e => {
        e.preventDefault()
        const contactSection = document.getElementById('contact-us');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    //*====---- Handle hashing route when click Service item
    const serviceHashingRoute = e => {
        e.preventDefault()
        const serviceSection = document.getElementById('services');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
    }



    //*=======--- Menu lists ----=========*\\
    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><a onClick={serviceHashingRoute} href="#services">Services</a></li>
        {
            databaseUser && isAdmin && <li><NavLink to='/admin/order-list'>Admin</NavLink></li> ||
            databaseUser && !isAdmin && <li><NavLink to='/dashboard/cart'>Dashboard</NavLink></li>
        }
        <li><a onClick={contactHashingRoute} href="#contact-us">Contact Us</a></li>
        {user ?
            <button onClick={() => signOut()}
                className=" mx-auto flex gap-2 items-center border border-[#F63E7B] rounded-md px-6 py-2 active:scale-95 duration-300 hover:bg-primary hover:outline-none hover:text-white">
                <span className="font-semibold">Logout</span><span ><AiOutlineLogout className="text-2xl" /></span>
            </button> :
            <li><Link to='/login' className="btn-primary">Login</Link></li>}
    </>

    return (
        <nav className={`flex  justify-between ${isNavbarBgNone || isDashboard || AdminRoute ? 'lg:p-10 bg-white' : 'lg:padding bg-[#FFF8F5] '}  lg:py-8 lg:pt-12 py-4 px-4 text[#878787]`} id="home">

            {/*//*----======= Dashboard menu in Mobile device ========-------*/}
            {isDashboard &&
                <div className="lg:hidden block relative ">
                    <div
                        onClick={handleSidebarToggle}
                        className="text-4xl cursor-pointer block lg:hidden">
                        {sidebarToggle ? <AiOutlineClose /> : <HiMenuAlt1 />}
                    </div>
                </div>
            }
            {AdminRoute &&
                <div className="lg:hidden block relative ">
                    <div
                        onClick={handleSidebarToggle}
                        className="text-4xl cursor-pointer block lg:hidden">
                        {sidebarToggle ? <AiOutlineClose /> : <HiMenuAlt1 />}
                    </div>
                </div>
            }
            {/*//* Navbar Logo image*/}
            <div className="w-32">
                <Link to='/'><img src={logoImg} alt="" /></Link>
            </div>

            {/*//*----===== Desktop ======-----*/}
            <div className="hidden lg:block ">
                <ul className="flex items-center space-x-10 font-semibold text-gray-500">
                    {menuItems}
                </ul>
            </div>
            {/*//*---======== Mobile ===========------*/}
            <div id="menu-bar" className="lg:hidden block relative" >
                <div onClick={handleMenuToggle} className="text-4xl cursor-pointer mb-2">
                    {toggleMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
                <div className={`block lg:hidden  bg-white w-64  p-5 mt-5 pb-8 text-center absolute ${toggleMenu ? '-right-4' : '-right-72'} duration-300 rounded-md shadow-lg`}>
                    <ul className="space-y-3">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

