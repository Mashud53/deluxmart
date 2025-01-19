
import { Helmet } from "react-helmet-async";

import CategoryBanner from "./CategoryBanner";
import CarouselBanner from "./CarouselBanner";


const AddBanner = () => {
   




    return (
        <div>
            <Helmet><title>Delux Mart|| Add Banner</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase pt-8 pb-4 border-b-2">Add Banner</h2>
            
            <CarouselBanner/>
            <CategoryBanner />
        </div>
    );
};

export default AddBanner;