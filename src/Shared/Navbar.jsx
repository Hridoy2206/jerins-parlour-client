import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt1 } from "react-icons/hi"
import { useContext, useEffect, useState } from "react";
import { Menu } from "../ContextAPI/GlobalStateManagment";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { AiOutlineLogout } from "react-icons/ai"
import CustomLoading from "../components/CustomLoading";
import { hashRoute } from "../hook/useCustomFatchingData";
const Navbar = () => {
    const { toggleMenu, setToggleMenu, sidebarToggle, setSidebarToggle } = useContext(Menu);
    {/*//* ---Globally usable dashboard sidebar state with context API---*/ }
    const [signOut, signOutLoading] = useSignOut(auth);
    const [isAdmin, setIsAdmin] = useState(false);
    const [databaseUser, setDatabaseuser] = useState(null);
    const [databaseLoading, setDatabaseLoading] = useState(true);
    const [user, userLoading] = useAuthState(auth);
    const navigate = useNavigate()
    const location = useLocation();


    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(({ isAdmin, user }) => {
                setIsAdmin(isAdmin);
                setDatabaseuser(user);
                setDatabaseLoading(false)
            })
    }, [user])

    {/*//*----=====Loading hadnle====----*/ }
    if (signOutLoading || userLoading) {
        return <CustomLoading />
    }

    {/*//*-----====== Handle open menubar to close sidebar=====------*/ }
    const handleMenuToggle = () => {
        setToggleMenu(pre => !pre);
        setSidebarToggle(false); // Close the sidebar menu
    };

    {/*//*--=== Handle open sidebar to close menubar===-----*/ }
    const handleSidebarToggle = () => {
        setSidebarToggle(pre => !pre);
        setToggleMenu(false); // Close the menuList 
    };


    {/*//* ----====Location tract to Daynamiccally navbar background change ====----*/ }
    const isLocation = location.pathname;
    const isDashboard = isLocation.includes('/dashboard');
    const AdminRoute = isLocation.includes('/admin')
    const isNavbarBgNone = isLocation.includes('/login') || isLocation.includes('/register')

    const handleSignOut = () => {
        signOut()
        navigate('/')
    }


    //*----======= Menu lists ======-----*\\
    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><Link onClick={() => hashRoute('services')}>Services</Link></li>
        <li><Link onClick={() => hashRoute("contact-us")} >Contact Us</Link></li>
        {
            databaseUser && isAdmin && <li><NavLink to='/admin/order-list'>Admin</NavLink></li> ||
            databaseUser && !isAdmin && <li><NavLink to='/dashboard/cart'>Dashboard</NavLink></li>
        }
        {/* {
            databaseUser && isAdmin ? <li><NavLink to='/admin/order-list'>Admin</NavLink></li> :
                <li><NavLink to='/dashboard/cart'>Dashboard</NavLink></li>
        } */}
        {user ?
            <button onClick={handleSignOut}
                className=" mx-auto flex gap-2 items-center border border-[#F63E7B] rounded-md px-6 py-2 active:scale-95 duration-300 hover:bg-primary hover:outline-none hover:text-white">
                <span className="font-semibold">Logout</span><span ><AiOutlineLogout className="text-2xl" /></span>
            </button> :
            <li><Link to='/login' className="btn-primary">Login</Link></li>}
    </>

    return (
        <nav className={` flex justify-between sticky top-0 ${isNavbarBgNone || isDashboard || AdminRoute ? 'lg:p-10 bg-white' : 'lg:padding bg-[#FFF8F5] '}  lg:py-8 lg:pt-12 py-4 px-4 text[#878787] `} id="top">

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

            {/*//*----======= Admin menu in Mobile device ========-------*/}
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
            <div className="w-32" >
                <Link to='/'><img src={logoImg} alt="" /></Link>
                {/* <h3 className="font-bold flex gap-3"><span className="text-primary">Sinha</span> BeautiParlour</h3> */}
            </div>

            {/*//*----===== Desktop ======-----*/}
            <div className="hidden lg:block ">
                <ul className="flex items-center space-x-10 font-semibold text-gray-500">
                    {menuItems}
                </ul>
            </div>
            {/*//*---======== Mobile ===========------*/}
            <div id="menu-bar" className="lg:hidden block relative" data-aos='fade-left'>
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

