import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import DetailsCard from "./DetailsCard";


const YouMayLike = ({ type, category }) => {
    const [allProducts, isLoading,] = useProducts()
    const [productsType, setProductsType] = useState({})
    

    useEffect(() => {
        if (allProducts.length && type && category) {
            const filterProduct = allProducts.filter(item => item.category==category && item.type == type)
            setProductsType(filterProduct)
        }
    }, [allProducts, type, category])
    

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">

            {
                productsType?.length>0 && productsType.map(products => <DetailsCard key={products._id} products={products}></DetailsCard>)
            }
        </div>
    );
};

export default YouMayLike;