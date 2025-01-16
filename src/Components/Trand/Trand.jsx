import useProductBySell from "../../Hooks/useProductBySell";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle";
import TrandsCard from "./TrandsCard";


const Trand = () => {
    const [trand, isLoading, ] = useProductBySell()
    const filter = trand.slice(1, 7)
    
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <SectionTitle title={"we think you'll like it"}/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold px-4 md:px-0  md:pt-10 mx-auto">
                {filter?.map(products => <TrandsCard key={products._id} products={products}></TrandsCard>)}
            </div>

        </div>
    );
};

export default Trand;