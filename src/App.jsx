import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Shared/Navbar"
import Footer from "./Shared/Footer"
import { AiOutlineArrowUp } from "react-icons/ai"
import { useContext } from "react"
import { Menu } from "./ContextAPI/GlobalStateManagment"
import { Toaster } from "react-hot-toast"
import CustomLoading from "./components/CustomLoading"

function App() {
  {/*//* ---===Track location and hide footer when exist dashboard route ===---*/ }
  const location = useLocation()
  const hideFooter = location.pathname.includes('/dashboard') || location.pathname.includes('/admin');

  const { setToggleMenu, databaseLoading, isLoading } = useContext(Menu);

  const handleCloseMenu = () => {
    setToggleMenu(false)
  }


  {/*//* ---Hasing Route fucntion---- */ }
  const handleHashRoute = (e) => {
    e.preventDefault()
    const goTop = document.getElementById('home')
    if (goTop) {
      goTop.scrollIntoView({ behavior: 'smooth' })
    }
  }

  {/*//* ---Initially showing Loading from user Login---- */ }
  if (isLoading && databaseLoading) {
    return <CustomLoading />
  }
  return (
    <div className=" max-w-[1440px] mx-auto overflow-x-hidden lg:px-0 relative">
      {/*//* -- Hash route button ---*/}
      <div className="absolute">
        <a onClick={handleHashRoute}
          href="#home"
          className="bg-primary p-2 rounded-xl text-white fixed lg:bottom-10 lg:right-8 bottom-4 right-2 active:scale-95 duration-300 text-3xl"><AiOutlineArrowUp />
        </a>
      </div>

      <Navbar />
      <main onClick={handleCloseMenu}>
        <Outlet />
      </main>
      <Toaster />
      {hideFooter || <Footer />}
    </div>
  )
}

export default App
