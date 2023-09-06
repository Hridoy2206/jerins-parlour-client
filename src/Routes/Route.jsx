import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Home/Contact/Contact";
import Dashboard from "../pages/Home/Dashboard/Dashboard";
import Cart from "../pages/Home/Dashboard/Cart/Cart";
import Bookings from "../pages/Home/Dashboard/Bookings/Bookings";
import Review from "../pages/Home/Dashboard/Review";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact-us',
                element: <Contact />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                children: [
                    {
                        index: true,
                        path: 'cart',
                        element: <Cart />
                    },
                    {
                        path: 'bookings',
                        element: <Bookings />
                    },
                    {
                        path: 'review',
                        element: <Review />
                    },
                ]
            },
        ]
    }
])