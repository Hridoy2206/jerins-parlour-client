import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

export const Menu = createContext();


const GlobalStateManagment = ({ children }) => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isRefetch, setIsRefetch] = useState(false);
    const [databaseUser, setDatabaseuser] = useState(null);
    const [databaseLoading, setDatabaseLoading] = useState(true);
    const [user, isLoading] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/user/?email=${user?.email}`)
            .then(res => res.json())
            .then(({ isAdmin, user }) => {
                setIsAdmin(isAdmin);
                setDatabaseuser(user);
                setDatabaseLoading(false)
            })
    }, [user])



    return (
        <Menu.Provider value={{ sidebarToggle, setSidebarToggle, toggleMenu, setToggleMenu, isAdmin, databaseLoading, databaseUser, setDatabaseuser, isLoading, isRefetch, setIsRefetch }}>
            {children}
        </Menu.Provider>
    );
};

export default GlobalStateManagment;