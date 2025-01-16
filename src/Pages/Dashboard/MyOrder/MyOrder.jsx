import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useOutletContext } from "react-router-dom";

import useMyOrder from "../../../Hooks/useMyOrder";
import Loader from "../../../Components/Loader/Loader";
import ReviewModal from "../../../Components/Modal/ReviewModal";
import { deleteOrder } from "../../../api/order";
import Swal from "sweetalert2";


const MyOrder = () => {
    const [getOrder, isLoading, orderRefetch] = useMyOrder();
    const [product, setProduct] = useState({});
    const [displayOrders, setDisplayOrders] = useState([]);
    const { setActive } = useOutletContext();
   

    useEffect(() => {

        const sortData = async (data) => {
            const orders = await data.sort((a, b) => new Date(b.date) - new Date(a.date))
            setDisplayOrders([...orders])

        }
        if (getOrder.length > 0) {
            sortData(getOrder)
        }

    }, [getOrder])

    console.log(displayOrders)

    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const hanndleReview = (title, productId) => {
        setProduct({ productId, title })
        setIsOpen(true)
    }

    const handleDelete =(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const data = await deleteOrder(id)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    orderRefetch();
                }
                
                

            }
        });
        
        

    }


    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div onClick={()=>setActive(true)} className="font-catamaran md:py-10">
            <Helmet><title>Dashboard | My Orders</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase py-8">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-cyan-400">
                        <tr className="font-semibold">
                            <th>#</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {displayOrders.map((order, index) =>
                            <tr key={order._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    {
                                        Array.isArray(order?.productId) ? <>
                                            <div className="overflow-x-auto">
                                                <table className="table">
                                                    {/* head */}
                                                    <thead>
                                                        <tr>

                                                            <th>Name</th>
                                                            <th>Qty</th>
                                                            <th>Storage</th>
                                                            <th>Color</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        
                                                        <tr>

                                                            <td>
                                                                {order?.title?.map((item, i) =>
                                                                    <Link to={`/product/${order.productId[i]}`} className="hover:text-cyan-400 flex flex-row" key={i}>
                                                                        <p className="border-b-2"> {item}</p>
                                                                    </Link>)}
                                                            </td>
                                                            <td>
                                                                {order?.quantity?.map((item, i) => <div key={i} className="border-b-2">{item}</div>)}
                                                            </td>
                                                            <td>
                                                                {order?.storage?.map((item, i) => <div key={i} className="text-sm text-cyan-500 border-b-2"> {item ? item : <p>...</p>}</div>)}
                                                            </td>
                                                            <td>
                                                                {order?.selectedColor?.map((item, i) => <div key={i} className="border-b-2">{item ? item : <p>...</p>}</div>)}
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </> :
                                            <>
                                                <Link to={`/product/${order.productId}`}>
                                                    <div>
                                                        {
                                                            Array.isArray(order?.title) ?
                                                                <div className="flex items-center gap-2">
                                                                    <p>{order?.title?.map((item, i) => <tr key={i}>{item}</tr>)}</p>
                                                                    <p className="font-bold text-red-500">{order?.quantity?.map((item, i) => <tr key={i}>Qty: {item}</tr>)}</p>
                                                                    <p className="font-bold text-red-500">{order?.selectedColor?.map((item, i) => <tr key={i}>Color: {item}</tr>)}</p>
                                                                </div> :
                                                                <p>{order?.title}</p>

                                                        }
                                                        {
                                                            Array.isArray(order?.quantity) ? <></> :
                                                                <p>Qty: {order?.quantity}</p>
                                                        }
                                                        <p>Price: {order?.totalPrice}</p>
                                                        {
                                                            Array.isArray(order?.selectedColor) ?
                                                                <>
                                                                </> :
                                                                <p>Color: {order?.selectedColor}</p>
                                                        }
                                                    </div>
                                                </Link>
                                            </>
                                    }

                                </td>
                                <td>
                                    {order.status}
                                </td>
                                <td>
                                    {
                                        !Array.isArray(order?.productId) && order?.status == "delevered" &&
                                        <p onClick={() => hanndleReview(order.title, order.productId)} className="cursor-pointer text-cyan-400  hover:text-white hover:bg-cyan-400 px-2 py-1 rounded-md text-center">Review</p>
                                    }
                                    {
                                        order?.status == "pending" &&
                                        <p onClick={() => handleDelete(order._id)} className="cursor-pointer text-cyan-400  hover:text-white hover:bg-cyan-400 px-2 py-1 rounded-md text-center">cencel</p>
                                    }
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
            <ReviewModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeModal={closeModal}
                product={product}
            ></ReviewModal>

        </div>
    );
};

export default MyOrder;