import Banner from "../../Components/Banner/Banner";
import { Helmet } from 'react-helmet-async';
import Trand from "../../Components/Trand/Trand";

import PopularProduct from "../../Components/PopularProduct/PopularProduct";
import Whatsapp from "../../Components/Shared/Whatsapp/Whatsapp";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import JustForYou from "../../Components/JustForYou/JustForYou";
import ProductBanner from "../../Components/ProductBanner/ProductBanner";
import Perfume from "../../Components/Perfume/Perfume";
import CategoryShoping from "../../Components/CategoryShoping/CategoryShoping";
import Offer from "../../Components/Offer/Offer";



const Home = () => {

    return (
        <div className="min-h-[100vh] bg-[#f8f9fa] pt-20 md:pt-10 max-w-screen-xl pb-10">
            <Helmet><title>Delux Mart | Home</title></Helmet>
            <div className="banner-section hidden md:block mt-20">
                <Banner></Banner>

            </div>
            <Offer />
            <div className="md:px-4">
                <FeaturedProduct></FeaturedProduct>
                <CategoryShoping></CategoryShoping>
                <PopularProduct></PopularProduct>
                <ProductBanner />
                <JustForYou></JustForYou>
                <Perfume />
                <Trand></Trand>

            </div>



            <Whatsapp></Whatsapp>
        </div>
    );
};

export default Home;