import { Link, Outlet, useLocation } from "react-router-dom"
import Navbar from "./Shared/Navbar"
import Footer from "./Shared/Footer"
import { AiOutlineArrowUp } from "react-icons/ai"
import { useContext, useEffect, useState } from "react"
import { Menu } from "./ContextAPI/GlobalStateManagment"
import { Toaster } from "react-hot-toast"
import CustomLoading from "./components/CustomLoading"
import { hashRoute } from "./hook/useCustomFatchingData"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "./firebase.init"
import Aos from "aos"
import 'aos/dist/aos.css'

function App() {
  {/*//* ---===Track location and hide footer when exist dashboard route ===---*/ }
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [showButton, setShowButton] = useState(false);
  const hideFooter = location.pathname.includes('/dashboard') || location.pathname.includes('/admin') || location.pathname.includes('login')

  const { setToggleMenu, databaseLoading, isLoading, serviceHashingRoute } = useContext(Menu);


  const handleCloseMenu = () => {
    setToggleMenu(false)
  }


  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust the scroll position as needed
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, container: '.absolute' })
  }, [])


  {/*//* ---Initially showing Loading from user Login---- */ }
  if (isLoading && databaseLoading) {
    return <CustomLoading />
  }
  return (
    <div className=" max-w-[1500px] mx-auto overflow-x-hidden lg:px-0 relative">
      {/*//* -- Hash route button ---*/}
      {showButton && <div className=" z-50 absolute" >
        <p onClick={() => hashRoute("top")} data-aos="zoom-in"
          className=" bg-primary p-2 rounded-xl fixed text-white lg:bottom-10 lg:right-8 bottom-4 right-2 active:scale-95 duration-300 text-3xl cursor-pointer">
          <AiOutlineArrowUp />
        </p>
      </div>}


      <Navbar serviceHashingRoute={serviceHashingRoute} />
      <main onClick={handleCloseMenu}>
        <Outlet />
      </main>
      <Toaster />
      {hideFooter || <Footer />}
    </div>
  )
}

export default App
