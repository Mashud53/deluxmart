import { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";
import Loader from "../Loader/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
// import { Pagination } from 'swiper/modules';
// import required modules
import { Navigation } from 'swiper/modules';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { updateViews } from "../../api/product";
import { addToCart } from "../../api/cart";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import useLoclaCart from "../../Hooks/useLoclaCart";
import { setLocalCart } from "../../api/localCart";



const Perfume = () => {
    const [allProducts, isLoading,] = useProducts();
    const [, , refetch] = useCart();
    const [, , localRefetch] = useLoclaCart()
    const { user } = useAuth()

    const [perfumeProduct, setPerfumeProduct] = useState([]);
    const [view, setView] = useState(0)
    const [slidePreview, setSlidePreview] = useState(3);
    const percent = 100;

    useEffect(() => {
        if (allProducts.length > 0) {
            const perfume = allProducts.filter(item => item.category == "Perfume")
            setPerfumeProduct(perfume)
        }
    }, [allProducts])


    useEffect(() => {
        const updateSlidePreview = () => {
            if (window.innerWidth < 640) {
                setSlidePreview(2)

            } else if (window.innerWidth < 1280) {
                setSlidePreview(2)
            }
            else {
                setSlidePreview(3)
            }
        };

        updateSlidePreview();
        window.addEventListener('resize', updateSlidePreview);
    }, [])

    const handleView = async (id) => {
        const currentView = (view + 1)
        setView(currentView)

        await updateViews(id, { views: currentView })
    }


    const handleAddtoCart = async item => {
        const cartItem = {
            productId: item._id,
            name: item.name,
            image: item.image1 ? item?.image1 : item?.imageURL1,
            price: item?.currentPrice1 > 0 ? parseFloat(item.currentPrice1) : parseFloat(item.price1),
            quantity: 1,
            selectedColor: item?.color1,
            storage: item.storage1,
            userEmail: user?.email,

        }
        if (user && user.email) {

            // send data to cart database            
            const data = await addToCart(cartItem)

            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();

            }
        }
        else {
            setLocalCart(cartItem)
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

    if (isLoading) return <Loader></Loader>
    return (
        <div className="md:h-[508px] overflow-hidden flex flex-col md:flex-row items-center w-full md:gap-2 bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-400 py-8">
            <div className="md:w-2/6">

                <div className="relative md:h-[500px]">
                    <img className="border-t-8 border-r-8 border-white h-[500px] md:h-full w-full " src="https://i.ibb.co.com/VptbyMc/silhouette-young-girl-who-is-perfuming-front-window-darkness-1.jpg" alt="" />
                    <div className="absolute bottom-0  w-full">
                        <div className="flex flex-col justify-center items-center bg-black bg-opacity-50  h-full w-full py-10">
                            <h2 className="text-white text-xl font-Krona font-bold px-2 py-4">Enhance Your Charm with...</h2>
                            <Link to={'/perfume'}>
                                <button className="text-white font-Krona font-bold hover:bg-cyan-500 px-2 py-1 border-2 border-cyan-500">Shop Now</button>
                            </Link>
                        </div>

                    </div>

                </div>


            </div>
            <div className="md:w-2/3 w-full">
                <Swiper watchSlidesProgress={true}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide",
                    }}
                    modules={[Navigation]}
                    slidesPerView={slidePreview}

                    className="mySwiper">
                    {
                        perfumeProduct.map(item => <SwiperSlide className='py-4' key={item._id}>
                            <div
                                onClick={() => handleView(item._id)}
                                className="md:w-[250px] lg:w-[280px]  card card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-2 md:mx-auto group">
                                <Link to={`/product/${item._id}`}>
                                    <figure className=" relative pt-2">
                                        <img className="h-[120px] md:h-[200px]" src={item.image1 || item.imageURL1} alt={item.name} />
                                        {
                                            item.currentPrice1 && item.currentPrice1 > 0 && <p className="absolute top-0 right-0 bg-rose-500 px-2 rounded-tr-lg rounded-bl-lg text-white">{(((parseFloat(item.price1) - parseFloat(item.currentPrice1)) / parseFloat(item.price1)) * percent).toFixed(2)}%</p>
                                        }
                                    </figure>
                                    <div className=" card-body relative text-center md:text-left ">
                                        <h2 className="hidden md:block card-title md:text-left text-sm md:text-base lg:text-lg">{item.name?.length > 20 ? <>{item.name?.slice(0, 20) + '...'}</> : <>{item.name}</>}</h2>
                                        <h2 className="md:hidden card-title text-center text-sm md:text-base lg:text-lg">{item.name?.length > 15 ? <p className="text-center">{item.name?.slice(0, 15) + '...'}</p> : <p className='text-center'>{item.name}</p>}</h2>
                                        <div className="hidden md:block rating rating-xs">
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        {/* <p className="md:text-left lg:text-lg text-sm">Price: <span className="ml-1">&#x62f;&#x2e;&#x625;</span> {item.price1}</p> */}
                                        {
                                            item.currentPrice1 && item.currentPrice1 > 0 ?
                                                <div className="flex justify-around items-center">
                                                    <p className="md:text-left lg:text-lg text-sm text-cyan-500"><span className="ml-1">&#x62f;&#x2e;&#x625;</span> {item.currentPrice1}</p>
                                                    <p className="md:text-left lg:text-xs text-xs "><span className="ml-1">&#x62f;&#x2e;&#x625;</span> <span className="line-through">{item.price1}</span> </p>

                                                </div> :
                                                <p className="md:text-left lg:text-lg text-sm"><span className="ml-1">&#x62f;&#x2e;&#x625;</span> {item.price1}</p>

                                        }

                                    </div>
                                </Link>
                                <div className=" card-actions mt-4 justify-end">
                                    <button onClick={() => handleAddtoCart(item)} className="hidden w-full md:flex justify-center items-center px-3 py-2  border-cyan-500 bg-cyan-400 group-hover:border-0 group-hover:text-white">Add to Cart <FaCartArrowDown className="ml-2"></FaCartArrowDown></button>
                                    <button onClick={() => handleAddtoCart(item)} className="w-full md:hidden flex justify-center items-center px-3 py-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white"><FaCartArrowDown className=""></FaCartArrowDown></button>
                                    {/* <button onClick={() => handleAddtoCart(item)} className="w-full md:hidden flex justify-center items-center px-3 py-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white">Buy Now</button> */}

                                </div>
                            </div>

                        </SwiperSlide>)
                    }
                    <div className='flex justify-between md:justify-end items-center px-2 '>
                        <div className='flex items-center justify-end gap-2'>
                            <button className='button-prev-slide p-2 shadow-lg rounded-md bg-white'><MdKeyboardDoubleArrowLeft className='text-cyan-400 text-lg' /></button>
                            <button className='button-next-slide p-2 shadow-lg rounded-md bg-white'><MdKeyboardDoubleArrowRight className='text-cyan-400  text-lg' /></button>
                        </div>
                        <Link className="md:hidden" to={'/perfume'}>
                            <button className='flex items-center border-cyan-400 border-2 px-2 py-1 uppercase text-sm bg-white text-cyan-400'>Show all< MdKeyboardArrowRight className='text-lg' /></button>
                        </Link>

                    </div>

                </Swiper>

            </div>

        </div>
    );
};

export default Perfume;