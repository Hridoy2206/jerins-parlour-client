import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Home/Contact/Contact";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RequireAuth from "../pages/Auth/RequireAuth";
import Admin from "../pages/Admin/Admin";
import AdService from "../pages/Admin/AdService";
import OrderList from "../pages/Admin/OrderList";
import RequireAdmin from "../pages/Auth/RequireAdmin";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import Bookings from "../pages/Dashboard/Bookings";
import Review from "../pages/Dashboard/Review";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageService from "../pages/Admin/ManageServices/ManageService";
import EditService from "../pages/Admin/ManageServices/EditService";

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
                    {
                        path: 'payment/:id',
                        element: <Payment />
                    },
                ]
            },
            {
                path: '/admin',
                element: <RequireAdmin><Admin /></RequireAdmin>,
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
                        element: <ManageService />,
                        children: [
                            {
                                path: 'edit-service/:id',
                                element: <EditService />
                            }
                        ]
                    },
                    // {
                    //     path: 'edit-service',
                    //     element: <EditService />
                    // }
                ]
            }
        ]
    }
])