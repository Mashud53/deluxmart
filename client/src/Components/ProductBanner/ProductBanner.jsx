import { Link } from "react-router-dom";


const ProductBanner = () => {
    return (
        <div className="hero h-[250px] md:h-[500px] w-full" style={{ backgroundImage: 'url(https://i.ibb.co.com/VBCMks3/beige-minimalist-beauty-skincare-twitter-header.png)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content w-full flex justify-start items-center text-white pl-10">
                <div className="font-Krona">
                    <h1 className="mb-5 text-xl md:text-5xl font-bold uppercase text-cyan-400">Stay with Style</h1>
                    <p className="mb-5  text-sm md:text-xl md:py-6 ">Upgrade yourself! Level Up Your Life!</p>
                    <Link to={'/'}>
                        <button className="hover:bg-cyan-500 border-cyan-500 border-2 px-2 py-1 text-white rounded-md">Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;