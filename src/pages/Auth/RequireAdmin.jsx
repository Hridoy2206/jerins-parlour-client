import { useContext, useEffect, useState } from "react";
import { Menu } from "../../ContextAPI/GlobalStateManagment";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import CustomLoading from "../../components/CustomLoading";

const RequireAdmin = ({ children }) => {
    const { isAdmin } = useContext(Menu);
    const [signOut, loading] = useSignOut(auth);
    const navigate = useNavigate();

    const [databaseAdmin, setDatabaseAdmin] = useState(false);
    const [databaseUser, setDatabaseuser] = useState(null);
    const [databaseLoading, setDatabaseLoading] = useState(true);
    const [user, isLoading] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/user/?email=${databaseUser?.email}`)
            .then(res => res.json())
            .then(({ isAdmin, user }) => {
                setDatabaseAdmin(isAdmin);
                setDatabaseuser(user);
                setDatabaseLoading(false);
            })
    }, [databaseUser])

    if (databaseLoading || isLoading) {
        return <CustomLoading />
    }


    if (!isAdmin) {
        signOut()
        navigate('/')
    }
    return children;
};

export default RequireAdmin;