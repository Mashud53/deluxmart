import useFeaturedProduct from "../../Hooks/useFeaturedProduct";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle";


const FeaturedProduct = () => {
    const [featuredProduct, isLoading]= useFeaturedProduct()
    if(isLoading) return <Loader></Loader>

    return (
        <div className="mt-8">
            <SectionTitle title={"Featured Product"}></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 justify-center items-center font-catamaran text-base font-semibold px-4 md:px-0  md:pt-4 mx-auto">
                {featuredProduct?.map(products => <ProductCard key={products._id} products={products}></ProductCard>)}
            </div>

            
        </div>
    );
};

export default FeaturedProduct;