import { Link} from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import Loader from "../../Components/Loader/Loader";
import LocalCartBuyModal from "../../Components/Modal/LocalCartBuyModal";
import useLoclaCart from "../../Hooks/useLoclaCart";


const LocalStoreCart = () => {

    
    const [localCarts,isLoading , localRefetch] = useLoclaCart();

    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const totalPrice =   (localCarts || []).reduce((total, item) => total + parseFloat(item.price * item?.quantity), 0).toFixed(2)  
    console.log(typeof localCarts, localCarts)


    const handleMinus = (i) => {
        if (localCarts[i]) {
            const filter = localCarts[i];
            if (filter.quantity > 1) {
                const updatedQuantity = filter.quantity - 1;

                const updatedCartItem = {
                    ...filter,
                    quantity: updatedQuantity
                }
                const updatedCart = [
                    ...localCarts.slice(0, i),
                    updatedCartItem,
                    ...localCarts.slice(i + 1),
                ];

                localStorage.setItem("deluxCart", JSON.stringify(updatedCart))
                localRefetch()
            }

        }


    }

    const handlePlus = (i) => {
        if (localCarts[i]) {
            const filter = localCarts[i]
            const updatedQuantity = filter.quantity + 1
            const updatedCartItem = {
                ...filter,
                quantity: updatedQuantity,
            }

            const updatedCart = [
                ...localCarts.slice(0, i),
                updatedCartItem,
                ...localCarts.slice(i + 1)
            ]

            localStorage.setItem("deluxCart", JSON.stringify(updatedCart))
            localRefetch()
        }

    }

    const handleDelete = async (i) => {
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
                const filterItem = [...localCarts.slice(0, i), ...localCarts.slice(i + 1)]

                localStorage.setItem("deluxCart", JSON.stringify(filterItem))
                localRefetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Item has been deleted.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
    const handlebuy = async () => {

        setIsOpen(true);
    }


    if (isLoading) { return <Loader></Loader> }
    return (
        <div className="font-catamaran mt-24 pb-10">
            <Helmet><title>Delux mart | Cart</title></Helmet>
            <h2 className="text-3xl py-8 font-bold text-center">My Cart</h2>

            <div>
                {localCarts?.length > 0 ?
                    <div className="flex flex-col md:flex-row justify-between items-start">

                        <div className="overflow-x-auto w-full md:w-[63%] md:pt-10 shadow-md">

                            <div className="overflow-x-auto">

                                <table className="table">

                                    <thead>
                                        <tr>
                                            <th>

                                            </th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            localCarts?.map((item, index) => <tr key={index}>
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <Link to={`/product/${item.productId}`}>
                                                                <div className="mask mask-square w-12 h-12">
                                                                    <img src={item.image} alt="Product Photo" />
                                                                </div>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                                                </td>
                                                <td>{item.price} <span className="ml-1">&#x62f;&#x2e;&#x625;</span></td>
                                                <td>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex flex-col justify-center items-start">

                                                            <div className="flex justify-center items-center">
                                                                <div onClick={() => handleMinus(index)} className="bg-cyan-300 hover:bg-cyan-500 text-base h-[20px] w-[30px] rounded-l-lg flex justify-center items-center"><FaMinus className=" text-xs text-white" /></div>
                                                                <div className="border-2 w-[30px] h-[20px] flex justify-center items-center">{item?.quantity ? item?.quantity : <p>1</p>}</div>
                                                                <div onClick={() => handlePlus(index)} className="bg-cyan-300 hover:bg-cyan-500 text-base h-[20px] w-[30px] rounded-r-lg flex justify-center items-center"><FaPlus className="text-white text-xs" /></div>
                                                            </div>

                                                        </div>

                                                        {
                                                            item.storage &&
                                                            <div>
                                                                <p className="text-xs">{item.storage}</p>
                                                            </div>
                                                        }

                                                        {
                                                            item.selectedColor &&
                                                            <div>
                                                                <p>{item.selectedColor}</p>
                                                            </div>
                                                        }

                                                    </div>
                                                </td>

                                                <th>
                                                    <button onClick={() => handleDelete(index)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><MdOutlineDelete className=""></MdOutlineDelete></button>
                                                </th>
                                            </tr>)
                                        }


                                    </tbody>


                                </table>
                            </div>
                        </div>

                        <div className="mt-10 w-full md:mt-0 md:w-2/6 shadow-md px-4 py-8 rounded-md">

                            <div className="flex justify-between gap-6">
                                <p>Sub total:</p>
                                <p className="font-bold"> {totalPrice} <span className="ml-1">&#x62f;&#x2e;&#x625;</span></p>
                            </div>
                            <div className="flex justify-between gap-6">
                                <p>Shipping Fee:  </p>
                                <p className="font-bold">0.00 <span className="ml-1">&#x62f;&#x2e;&#x625;</span></p>
                            </div>
                            <div className="flex justify-between gap-6">
                                <p>Total: </p>
                                <p className="font-bold"> {totalPrice} <span className="ml-1">&#x62f;&#x2e;&#x625;</span></p>

                            </div>
                            <div className="w-full bg-gray-300 pb-1 rounded-lg my-4"></div>




                            <button onClick={() => handlebuy(localCarts)} className="btn w-full hover:text-white bg-cyan-400 hover:bg-cyan-500 btn-md uppercase">proceed to checkout</button>
                        </div>
                    </div> :
                    <div className="w-full flex flex-col justify-center items-center min-h-[500px]">
                        <Heading title={"This Cart is empty"} center={true} ></Heading>
                        <Link to={'/'}><button className="hover:text-white bg-cyan-400 hover:bg-cyan-500 py-2 px-3 rounded-lg font-semibold">Continue Shopping</button></Link>
                    </div>
                }
            </div>
            <LocalCartBuyModal
                isOpen={isOpen}
                closeModal={closeModal}
                localCarts={localCarts}
                totalPrice={totalPrice}
                localRefetch={localRefetch}
            ></LocalCartBuyModal>

        </div>
    );
};

export default LocalStoreCart;