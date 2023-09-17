import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Home/Contact/Contact";
import Dashboard from "../pages/Home/Dashboard/Dashboard";
import Bookings from "../pages/Home/Dashboard/Bookings/Bookings";
import Review from "../pages/Home/Dashboard/Review";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RequireAuth from "../pages/Auth/RequireAuth";
import Admin from "../pages/Admin/Admin";
import AdService from "../pages/Admin/AdService";
import OrderList from "../pages/Admin/OrderList";
import ManageUser from "../pages/Admin/ManageUser";
import ManageService from "../pages/Admin/ManageService";
import Cart from "../pages/Home/Dashboard/Cart";

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
                element: <RequireAuth><Dashboard /></RequireAuth>,
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
            {
                path: 'admin',
                element: <Admin />,
                children: [
                    {
                        index: true,
                        path: 'order-list',
                        element: <OrderList />
                    },
                    {
                        path: 'ad-service',
                        element: <AdService />
                    },
                    {
                        path: 'manage-user',
                        element: <ManageUser />
                    },
                    {
                        path: 'manage-service',
                        element: <ManageService />
                    },
                ]
            }
        ]
    }
])