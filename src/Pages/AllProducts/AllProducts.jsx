import { Helmet } from "react-helmet-async";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useProducts from "../../Hooks/useProducts";
import { useState } from "react";


const AllProducts = () => {
    const [allProducts, isLoading,] = useProducts();
    const [visible, setVisible] = useState(16)
    const hide =visible >= allProducts?.length 
    
    const handleVisible=()=>{
        const update= visible + 16;
        setVisible(update)

    }
    console.log('Visible:', visible, "AllProduct:", allProducts.length)
    if (isLoading) return <Loader></Loader>
    return (
        <div className="pt-28 pb-10">
            <Helmet><title>DeluxMart | All Products</title></Helmet>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold px-4 md:px-0  md:pt-10 mx-auto">
                {allProducts?.slice(0, visible).map(products => <ProductCard key={products._id} products={products}></ProductCard>)}
            </div>
            <div className="flex items-center justify-center w-full mt-8">
                <button onClick={handleVisible} className={`px-3 py-2 border-2 border-cyan-400 rounded-md font-catamaran font-semibold hover:bg-cyan-400 hover:text-white ${hide ? 'hidden':''} `}>Show More</button>
                <p className={`${hide ? 'text-cyan-400 text-base':'hidden'}`}>Nothing to show</p>
            </div>


        </div>
    );
};

export default AllProducts;