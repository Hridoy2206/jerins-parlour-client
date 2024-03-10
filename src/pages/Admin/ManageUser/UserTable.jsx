import { useState } from "react";
import toast from "react-hot-toast";
import CustomLoading from "../../../components/CustomLoading";

const UserTable = ({ index, user, refetch }) => {
    const { name, email, role } = user;
    const [updateLoading, setUpdateLoading] = useState(false);

    if (updateLoading) {
        return <CustomLoading />
    }

    //* ---===Make Admin===------*\\
    const handleUserAdmin = () => {
        setUpdateLoading(true)
        fetch(`http://localhost:5000/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, role }),
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    refetch()
                    toast.success(`${name} is Admin Now!`)
                    setUpdateLoading(false)
                }
            })
    }

    //* ---===Remove Admin===------*\\
    const removeAdmin = () => {
        setUpdateLoading(true)
        fetch(`http://localhost:5000/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, role }),
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    refetch()
                    toast.success(`${name} is User Now!`)
                    setUpdateLoading(false)
                }
            })
    }
    return (
        <>
            <tr>
                <td className=" lg:p-7 p-2 hidden lg:block">{index + 1}</td>
                <td className=" lg:p-7 p-2">{name}</td>
                <td className=" lg:p-7 p-2">{email}</td>
                <td className=" lg:p-7 p-2">
                    {
                        role === "admin" ? <button className="btn-primary bg-green-400 px-3 py-2 text-sm">{role}</button> :
                            <button onClick={handleUserAdmin} className="bg-[#000080] btn-primary px-3 py-2 text-sm">{role}</button>
                    }
                </td>
                <td >
                    {updateLoading && <CustomLoading />}
                    <button onClick={removeAdmin} className={`btn-primary p-2 text-xs lg:text-sm ${role === "admin" ? 'visible' : 'hidden'}`}>Delete Admin</button>
                </td>
            </tr>
        </>
    );
};

export default UserTable;