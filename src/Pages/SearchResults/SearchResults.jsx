
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Heading from "../../Components/Heading/Heading";

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}
const SearchResults = () => {
    const [loading, setLoading] = useState(false)
    const [searchItem, setSearchItem] = useState('');
    const [displayProducts, setdisplayProducts] = useState([]);
    const [allProducts, isLoading,] = useProducts();
    console.log(displayProducts)

    const query = useQuery();
    const searchQuery = query.get('query')

    useEffect(() => {
        if (searchQuery) {
            setLoading(true)
            setSearchItem(searchQuery.toLocaleLowerCase())
            setLoading(false)
        }

    }, [searchQuery])

    useEffect(() => {
        if (searchQuery && allProducts) {
            setLoading(true)

            const nameByFilter = allProducts.filter(product => product.name.toLocaleLowerCase().includes(searchItem) ||
                product.brand.toLocaleLowerCase().includes(searchItem) ||
                product.category.toLocaleLowerCase().includes(searchItem) ||
                product.type.toLocaleLowerCase().includes(searchItem))
            setdisplayProducts(nameByFilter)
            setLoading(false)

        }

    }, [searchQuery, allProducts, searchItem,])


    if (isLoading || loading) return <Loader></Loader>
    return (
        <div className="min-h-screen pt-32 pb-10 px-4 md:px-0">

            {displayProducts?.length > 0 ? <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 justify-center items-center font-catamaran text-base font-semibold  mx-auto">
                {
                    displayProducts?.map(products => <ProductCard key={products._id} products={products}></ProductCard>)
                } </div>
                :
                <div className="flex justify-center items-center">
                    <Heading title={"No Search Product found"} center={true} subTitle={"Choose other category"}></Heading>
                </div>}

        </div>
    );
};

export default SearchResults;