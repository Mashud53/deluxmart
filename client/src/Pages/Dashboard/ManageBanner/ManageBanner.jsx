import { Helmet } from "react-helmet-async";
import useCategoryShop from "../../../Hooks/useCategoryShop";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import Loader from "../../../Components/Loader/Loader";


const ManageBanner = () => {
    const [categoryItems, isLoading , refetch] = useCategoryShop()

    const handleDelCategory=(id)=>{
        console.log(id)
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
                axiosSecure.delete(`/shopbycategory/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: ``,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch()
                        }
                    })

            }

        });

    }

    if(isLoading){
        return<Loader></Loader>
    }
    return (
        <div>
            <Helmet><title>Delux Mart|| Manage Banner</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase pt-8 pb-4 border-b-2">Manage Banner</h2>
            <div>
                <h2 className="font-semibold text-lg">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-2 py-4">
                    {
                        categoryItems && categoryItems.map(item =>
                            <div key={item._id} className="avatar relative py-2">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src={item?.image || item?.imgLink} />
                                    <p>{item.title}</p>
                                    
                                </div>
                                <div className="flex items-center justify-between absolute top-0 cursor-pointer">
                                        {/* <Link to={`/dashboard/updateMenu/${item._id}`}><p className="text-white font-bold"><FaEdit /></p></Link> */}
                                        <p onClick={() => handleDelCategory(item._id)} className=" btn text-rose-500 hover:text-white bg-cyan-500 hover:bg-rose-500 btn-xs"><FaXmark className="" /></p>
                                    </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageBanner;