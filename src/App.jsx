import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Shared/Navbar"
import Footer from "./Shared/Footer"
import { AiOutlineArrowUp } from "react-icons/ai"
import { GlobalState } from "./ContextAPI/GlobalStateManagment"
import { useState } from "react"

function App() {
  {/*//* ---Track location and hide footer when exist dashboard route */ }
  const location = useLocation()
  // const hideFooter = location.pathname.includes('/dashboard');

  {/*//* ---Globally usable dashboard sidebar state with Context API---*/ }
  const [sidebarToogle, setSidebarToogle] = useState(false);

  {/*//* ---Hasing Route fucntion---- */ }
  const handleHashRoute = (e) => {
    e.preventDefault()
    const goTop = document.getElementById('home')
    if (goTop) {
      goTop.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <GlobalState.Provider value={{ sidebarToogle, setSidebarToogle }}>
      <div className="max-w-[1400px] overflow-x-hidden lg:px-0">
        <a onClick={handleHashRoute} href="#home" className="bg-primary p-2 rounded-xl text-white fixed lg:bottom-10 lg:right-8 bottom-4 right-2 active:scale-95 duration-300 text-3xl"><AiOutlineArrowUp /></a>
        <Navbar />
        <main>
          <Outlet />
        </main>
        {/* {hideFooter || <Footer />} */}
      </div>
    </GlobalState.Provider>
  )
}

export default App
