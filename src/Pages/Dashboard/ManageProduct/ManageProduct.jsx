import { Helmet } from "react-helmet-async";
import Loader from "../../../Components/Loader/Loader";
import useProducts from "../../../Hooks/useProducts";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";

const ManageProduct = () => {
    const [allProducts, isLoading, refetch] = useProducts();
    const { setActive } = useOutletContext();




    const handleDelete = (id) => {

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
                axiosSecure.delete(`/product/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Product has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch()
                        }
                    })
                
            }

        });



    }

    if (isLoading) return <Loader></Loader>
    return (
        <div onClick={()=>setActive(true)}>
            <Helmet><title>Dashboard | Manage Product</title></Helmet>
            <div className="text-xl text-center font-bold uppercase pt-8 pb-4 border-b-2"><h2>Manage Products</h2></div>
            <div className="mt-8 overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts?.map((product, index) => <tr key={product._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-square w-12 h-12">
                                            <img src={product?.image1 ? product.image1 : product?.imageURL1} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {product.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{product._id}</span>
                            </td>
                            <td>{product.price1}</td>
                            <th>
                                <Link to={`/dashboard/updateProduct/${product._id}`}>
                                    <button className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-cyan-500 btn-xs"><FaEdit className=""></FaEdit></button>
                                </Link>

                                <button onClick={() => handleDelete(product._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><MdOutlineDelete className=""></MdOutlineDelete></button>

                            </th>
                        </tr>)}


                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default ManageProduct;