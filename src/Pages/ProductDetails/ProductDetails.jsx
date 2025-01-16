

import {useLoaderData } from "react-router-dom";
import DetailsPagePhoto from "../../Components/DetailsPagePhoto/DetailsPagePhoto";
import ProductRating from "../../Components/Rating/ProductRating";
import ProductStorage from "../../Components/ProductStorage/ProductStorage";
import { useState } from "react";
import DescDevice from "../../Components/DescDevice/DescDevice";
import ProductColor from "../../Components/ProductColor/ProductColor";
import useAuth from "../../Hooks/useAuth";
import BuyNowModal from "../../Components/Modal/BuyNowModal";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { GiDuration } from "react-icons/gi";
import Swal from "sweetalert2";
import { addToCart } from "../../api/cart";
import useCart from "../../Hooks/useCart";
import Rating from "./Rating/Rating";
import YouMayLike from "./YouMayLike";
import useOrder from "../../Hooks/useOrder";
import {setLocalCart } from "../../api/localCart";
import useLoclaCart from "../../Hooks/useLoclaCart";


const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, image1, image2, image3, image4, image5, imageURL1, imageURL2, imageURL3, imageURL4, imageURL5, name, brand, price1, currentPrice1, currentPrice2, currentPrice3, price2, price3, storage1, storage2, storage3, storage_Type, operating_system, network, color1, color2, color3, screen, screenSize, wireless_network, desc, desc1, desc2, desc3, desc4, desc5, category, type } = product;

    const { user } = useAuth();
    const [, , refetch] = useCart()
    const [, , orderRefetch] = useOrder();
    const [, , localRefetch] = useLoclaCart()  

    
    const [price, setPrice] = useState(currentPrice1 > 0 ? currentPrice1 : price1);
    const [color, setColor] = useState(color1);
    const [storage, setStorage] = useState(storage1);
    const [qt, setQt] = useState(1)
    const [previousPrice, setPreviousPrice] = useState(price1)
    const previousPrice1 = price1;
    const previousPrice2 = price2;
    const previousPrice3 = price3;

    const [orderInfo, setOrderInfo] = useState({})

    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const handleMinus = () => {
        qt > 1 ? setQt(qt - 1) : setQt(qt)
    }
    const handlePlus = () => {
        setQt(qt + 1)
    }

    const buyHandle = async () => {
        const quantity = qt;
        const totalPrice = quantity * price;
        const selectedColor = color;
        const email = user?.email;
        const productId = _id;
        const productName = name;
        const productInfo = {
            quantity, totalPrice, selectedColor, email, productId, storage, title: productName
        }
        console.log(productInfo)
        setOrderInfo(productInfo)
        setIsOpen(true)
        orderRefetch();

    }
    const handleAddtoCart = async () => {
        const cartItem = {
            productId: _id,
            name,
            image: image1 ? image1 : imageURL1,
            quantity: 1,
            selectedColor: color,
            storage,
            price,
            userEmail: user?.email,
        }
        if (user && user?.email) {

            const data = await addToCart(cartItem)

            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${product.name} added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        }
        else {
            setLocalCart(cartItem)
            console.log(cartItem)
            localRefetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Added Success`,
                showConfirmButton: false,
                timer: 1500
            });
          
         
        }
    }




    return (
        <div className="pt-28 md:pt-32 px-10 ">
            <div className=" grid grid-rows grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-4 lg:gap-6 font-catamaran  lg:pb-10 pb-10 border-b-2 ">
                <div className=" md:col-span-1 mb-8">
                    <DetailsPagePhoto image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} imageURL4={imageURL4} imageURL5={imageURL5}></DetailsPagePhoto>
                </div>
                <div className=" md:col-span-1">
                    <div className="text-xl font-bold">{name}</div>
                    {/* rating  */}
                    <div className="mt-4">
                        <ProductRating />
                    </div>
                    {/* price  */}
                    <div className="flex justify-start gap-6 items-center mt-4">
                        <h2 className="font-semibold text-xl">Price: <span className="ml-1">&#x62f;&#x2e;&#x625;</span> {price}</h2>
                        {currentPrice1 > 0 && <p>Price: <span className="ml-1">&#x62f;&#x2e;&#x625;</span> <span className="line-through">{previousPrice}</span></p>}


                    </div>
                    {/* Color  */}
                    <ProductColor color1={color1} color2={color2} color3={color3} color={color} setColor={setColor} />

                    {/* storage  */}
                    <ProductStorage storage1={storage1}
                        storage2={storage2}
                        storage3={storage3}
                        price1={price1}
                        price2={price2}
                        price3={price3}
                        currentPrice1={currentPrice1}
                        currentPrice2={currentPrice2}
                        currentPrice3={currentPrice3}
                        setPrice={setPrice}
                        previousPrice1={previousPrice1}
                        previousPrice2={previousPrice2}
                        previousPrice3={previousPrice3}
                        setPreviousPrice={setPreviousPrice}

                        storage={storage}
                        setStorage={setStorage}></ProductStorage>
                    {
                        storage_Type?.length > 0 && <h2 className="mt-2 w-36 border-2 border-neutral-300 font-semibold p-1 rounded-lg">Storage Type: {storage_Type}</h2>
                    }
                    <div className=" py-8 flex justify-start items-start gap-10">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="w-[50px] h-[50px] border-2 rounded-full flex items-center justify-center"><TbTruckDelivery className="text-2xl font-bold" /></h2>
                            <h2 className="text-center text-sm">Free Shipping</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="w-[50px] h-[50px] border-2 rounded-full flex items-center justify-center"><GiDuration className="text-2xl font-bold" /></h2>
                            <h2 className="text-center text-sm">Delivery in 3 Days</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="w-[50px] h-[50px] border-2 rounded-full flex items-center justify-center"><TbReplace className="text-2xl font-bold" /></h2>
                            <h2 className="text-center text-sm">7 days replacement</h2>
                        </div>



                    </div>

                    {
                        brand?.length > 0 && <h2 className="mt-2 font-semibold">Brand: {brand}</h2>
                    }

                    <div className="flex flex-col justify-center items-start">
                        <label >Quantity</label>
                        <div className="flex justify-center items-center">
                            <div onClick={handleMinus} className="bg-cyan-300 hover:bg-cyan-500 text-base h-[30px] w-[40px] rounded-l-lg flex justify-center items-center"><FaMinus className=" text-white" /></div>
                            <div className="border-2 w-[40px] h-[30px] flex justify-center items-center">{qt}</div>
                            <div onClick={handlePlus} className="bg-cyan-300 hover:bg-cyan-500 text-base h-[30px] w-[40px] rounded-r-lg flex justify-center items-center"><FaPlus className="text-white" /></div>
                        </div>

                    </div>


                    <div className="flex justify-start items-center gap-4 mt-4 w-full">
                        <button onClick={buyHandle} className="border-2 px-3 py-2 font-semibold rounded-lg hover:text-white hover:bg-cyan-500 hover:border-cyan-500">Buy Now</button>


                        <button onClick={handleAddtoCart} className="border-2 px-3 py-2 font-semibold rounded-lg hover:text-white hover:bg-cyan-500 hover:border-cyan-500">Add to Cart</button>
                    </div>

                </div>

            </div>
            {/* description  */}
            <div className="mt-10">

                <h2 className="mt-8 font-bold text-xl">About This Item</h2>
                <DescDevice operating_system={operating_system} screen={screen} screenSize={screenSize} wireless_network={wireless_network} network={network} />
                {/* normal product desc  */}
                {
                    desc ? <h2 className="mt-2">{desc}</h2> :
                        desc?.length > 0 && <div className="flex flex-col gap-1 mt-2 border-b-2 pb-6">
                            {desc?.map((item, index) => <div key={index}><h2>{item}</h2></div>)}
                        </div>
                }
                {
                    desc1 ? <h2 className="mt-3">{desc1}</h2> :
                        desc1?.length > 0 && <div className="flex flex-col gap-1 mt-2 border-b-2 pb-6">
                            {desc1?.map((item, index) => <div key={index}><h2>{item}</h2></div>)}
                        </div>
                }
                {
                    desc2 ? <h2 className="mt-3">{desc2}</h2> :
                        desc2?.length > 0 && <div className="flex flex-col gap-1 mt-2 border-b-2 pb-6">
                            {desc2?.map((item, index) => <div key={index}><h2>{item}</h2></div>)}
                        </div>
                }
                {
                    desc3 ? <h2 className="mt-3">{desc3}</h2> :
                        desc3?.length > 0 && <div className="flex flex-col gap-1 mt-2 border-b-2 pb-6">
                            {desc3?.map((item, index) => <div key={index}><h2>{item}</h2></div>)}
                        </div>
                }
                {
                    desc4 ? <h2 className="mt-3">{desc4}</h2> :
                        desc4?.length > 0 && <div className="flex flex-col gap-1 mt-2 border-b-2 pb-6">
                            {desc4?.map((item, index) => <div key={index}><h2>{item}</h2></div>)}
                        </div>
                }
                {
                    desc5 ? <h2 className="mt-3">{desc5}</h2> :
                        desc5?.length > 0 && <div className="flex flex-col gap-1 mt-2 border-b-2 pb-6">
                            {desc5?.map((item, index) => <div key={index}><h2>{item}</h2></div>)}
                        </div>
                }

            </div>
            <div className="flex flex-col md:flex-row mt-8 items-start justify-between gap-4 pb-10">
                {/* display rating  */}
                <div className="font-bold text-3xl border-t-2 py-4 w-full md:w-3/12 ">
                    <h2 className="text-stone-500 text-base">Rating & Reviews</h2>
                    <Rating id={_id}></Rating>
                </div>
                {/* add you may like product */}
                <div className="w-full md:w-[70%]">
                    <h2 className="text-base font-bold font-catamaran pb-4">You May Like</h2>
                    <YouMayLike type={type} category={category}></YouMayLike>
                </div>

            </div>

            <BuyNowModal
                isOpen={isOpen}
                closeModal={closeModal}
                orderInfo={orderInfo}
                qt={qt}
                _id={_id}
                customerName={user?.displayName}>
            </BuyNowModal>

        </div>
    );
};

export default ProductDetails;