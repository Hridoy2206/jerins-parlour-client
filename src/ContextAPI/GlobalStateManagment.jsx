import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

export const Menu = createContext();


const GlobalStateManagment = ({ children }) => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [databaseUser, setDatabaseuser] = useState(null);
    const [databaseLoading, setDatabaseLoading] = useState(true);
    const [user, isLoading] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/user/?email=${user?.email}`)
            .then(res => res.json())
            .then(({ isAdmin, user }) => {
                setDatabaseLoading(false)
                setIsAdmin(isAdmin);
                setDatabaseuser(user);
            })
    }, [user, databaseUser])
    return (
        <Menu.Provider value={{ sidebarToggle, setSidebarToggle, toggleMenu, setToggleMenu, isAdmin, databaseLoading, databaseUser, setDatabaseuser, isLoading }}>
            {children}
        </Menu.Provider>
    );
};

export default GlobalStateManagment;