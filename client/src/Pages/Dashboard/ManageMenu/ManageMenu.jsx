import { Helmet } from "react-helmet-async";
import useMenus from "../../../Hooks/useMenus";
import Loader from "../../../Components/Loader/Loader";

import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import useSubmenus from "../../../Hooks/useSubmenus";
import MenuLoader from "../../../Components/Loader/MenuLoader";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";





const ManageMenu = () => {
    const [allMenus, isLoading, refetch] = useMenus();
    const [subMenus, subloading, subrefetch] = useSubmenus();
   
    const handleDeletemenu = (id) => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Menu has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch()
                        }
                    })

            }

        });

    }

    const handleDeleteSubmenu = (id) => {
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
                axiosSecure.delete(`/submenu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Submenu has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            subrefetch()
                        }
                    })

            }

        });

    }
    return (
        <div>
            <Helmet><title>Manage || Menu</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase pt-8 pb-4 border-b-2">Manage Menus & Submenus</h2>
            <div className="py-6">
                <h2 className="font-catamaran font-semibold text-lg pb-4">Manage Menu</h2>
                {
                    isLoading ? <>
                        <Loader></Loader>
                    </> : <div className="flex flex-wrap items-center gap-2">
                        {
                            allMenus && allMenus.map(item =>
                                <div key={item._id}
                                    className="relative"
                                ><h2 className="border-2 bg-cyan-500 text-white rounded-md px-6 py-3">{item.menu}</h2>
                                    <div className=" flex items-center justify-between absolute top-0 right-0 cursor-pointer">
                                        {/* <Link to={`/dashboard/updateMenu/${item._id}`}><p className="text-white font-bold"><FaEdit /></p></Link> */}
                                        <p onClick={() => handleDeletemenu(item._id)} className="btn text-rose-500 hover:text-white bg-cyan-500 hover:bg-rose-500 btn-xs"><FaXmark className="" /></p>
                                    </div>
                                </div>)
                        }
                    </div>
                }
            </div>
            <div>
                <h2 className="font-catamaran font-semibold text-lg pb-4">Manage Submenu</h2>
                {
                    subloading ? <><MenuLoader /></> :
                        <div className="flex flex-wrap gap-2 items-center">
                            {
                                subMenus && subMenus.map(item =>
                                    <div key={item._id}
                                        className="">
                                        <div className="relative bg-cyan-400 px-4 py-5 rounded-md">
                                            <p className="font-bold text-white">Submenu: {item.name}</p>
                                            <p> Menu: {item.menu}</p>
                                            <div className="absolute top-0 flex items-center gap-2">
                                                <Link to={`/dashboard/updateMenu/${item._id}`}><button className="btn text-white hover:text-cyan-400 bg-cyan-400 hover:bg-white btn-xs"><FaEdit /></button></Link>
                                                <button onClick={() => handleDeleteSubmenu(item._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><FaXmark className="" /></button>

                                            </div>

                                        </div>
                                    </div>)
                            }
                        </div>
                }

            </div>


        </div>
    );
};

export default ManageMenu;