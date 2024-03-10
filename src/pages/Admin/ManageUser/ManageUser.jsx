import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useGetServices } from "../../../hook/useCustomFatchingData";
import auth from "../../../firebase.init";
import { useEffect, useState } from "react";
import CustomLoading from "../../../components/CustomLoading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ManageUser = () => {
    const { isLoading, isError, data, refetch } = useGetServices('users', 'http://localhost:5000/user');
    console.log(data);
    const [signOut, loading] = useSignOut(auth);
    const navigate = useNavigate()
    const [user, firebaseLoading] = useAuthState(auth)
    const [updateLoading, setUpdateLoading] = useState(false);

    if (loading || isLoading || updateLoading || firebaseLoading) {
        return <CustomLoading />
    }

    //* ---===Make Admin===------*\\
    const handleUserAdmin = (role, email) => {
        setUpdateLoading(true)
        fetch(`http://localhost:5000/user?email=${email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role }),
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    refetch()
                    setUpdateLoading(false)
                }
            })
    }

    // //* ---===Remove Admin===------*\\
    // const removeAdmin = () => {
    //     setUpdateLoading(true)
    //     fetch(`http://localhost:5000/user`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email: data.email, name: data.name, role: data.role }),
    //     }).then(res => res.json())
    //         .then(result => {
    //             if (result.modifiedCount) {
    //                 refetch()
    //                 toast.success(`${name} is User Now!`)
    //                 setUpdateLoading(false)
    //             }
    //         })
    // }



    return (
        <div>
            <table className="min-w-full text-sm lg:text-xl">
                <thead className="">
                    <tr className=" text-gray-500 ">
                        <th className="p-4 bg-gray-200 hidden rounded-l-xl lg:block">No.</th>
                        <th className="p-4 bg-gray-200">Name</th>
                        <th className="p-4 bg-gray-200">Email</th>
                        <th className="p-4 bg-gray-200">Roll</th>
                        <th className="p-4 bg-gray-200 rounded-r-xl">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center text-gray-700">
                    {
                        data?.map(({ email, name, role }, index) => <tr key={index}>
                            <td className=" lg:p-7 p-2 hidden lg:block">{index + 1}</td>
                            <td className=" lg:p-7 p-2">{name}</td>
                            <td className=" lg:p-7 p-2">{email}</td>
                            <td className=" lg:p-7 p-2">
                                {
                                    role === "admin" ? <button className="btn-primary bg-green-400 px-3 py-2 text-sm">{role}</button> :
                                        <button onClick={() => handleUserAdmin('admin', email)} className="bg-[#000080] btn-primary px-3 py-2 text-sm">{role}</button>
                                }
                            </td>
                            <td >
                                <button onClick={() => handleUserAdmin('user', email)} className={`btn-primary p-2 text-xs lg:text-sm ${role === "admin" ? 'visible' : 'hidden'}`}>Delete Admin</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;