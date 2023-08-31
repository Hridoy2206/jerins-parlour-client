import { Outlet } from "react-router-dom"
import Navbar from "./Shared/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
