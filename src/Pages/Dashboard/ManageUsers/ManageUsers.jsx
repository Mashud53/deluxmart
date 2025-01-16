import { Helmet } from "react-helmet-async";
import useGetUser from "../../../Hooks/useGetUser";
import { MdOutlineDelete } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FaIoxhost } from "react-icons/fa";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import Loader from "../../../Components/Loader/Loader";
import { useOutletContext } from "react-router-dom";


const ManageUsers = () => {
    const [getuser, isLoading, refetch] = useGetUser();
    const { setActive } = useOutletContext();
    
    
    const handleAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Make Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin"
          }).then((result) => {
            
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${id}`, {role:'admin'})
                .then(res =>{
                    console.log(res.data)
                    if(res.data.matchedCount > 0){
                        Swal.fire({
                                title: "Done!",
                                text: "Make Admin Successful.",
                                showConfirmButton: false,
                                timer: 1500
                              });
                    }
                    refetch()
                })
            
            }
          });
    }
    const handleHost = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Make Host!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Host!"
          }).then((result) => {
            console.log(result.data)
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${id}`, {role:'host'})
                .then(res =>{
                    
                    if(res.data.matchedCount > 0){
                        Swal.fire({
                                title: "Done!",
                                text: "Make Host.",
                                showConfirmButton: false,
                                timer: 1500
                              });
                    }
                    refetch()
                })
            
            }
          });
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`)
                .then(res =>{
                    
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                              });
                    }
                    refetch()
                })
            
            }
          });
    }

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div onClick={()=>setActive(true)} className="md:pt-10">
            <Helmet><title>Dashboard | Manage User</title></Helmet>
            <div className="text-center py-8 border-b-2 font-bold text-xl"><h2>Manage Users</h2></div>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-cyan-400">
                            <tr>
                                <th>#</th>
                                <th>email</th>
                                <th>Role</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {getuser?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>{user?.role === 'guest' ? <>
                                    <div>
                                        <button onClick={() => handleAdmin(user._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><GrUserAdmin className=""></GrUserAdmin></button>
                                        <button onClick={() => handleHost(user._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><FaIoxhost className=""></FaIoxhost ></button>
                                    </div></> : user?.role == 'host' ? <><button onClick={() => handleAdmin(user._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><GrUserAdmin className=""></GrUserAdmin></button></> : `${user.role} `}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><MdOutlineDelete className=""></MdOutlineDelete></button>
                                </th>
                            </tr>)}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;