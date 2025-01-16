import useBanners from "../../Hooks/useBanners";
import Loader from "../Loader/Loader";

import Counter from "./Counter";


const Offer = () => {
    const [banners, isLoading, ] = useBanners();
    const banner = banners.filter(item => item.type === "offers")
   

    if(isLoading){
        return<Loader></Loader>
    }
    return (
        <> {
            banner && banner?.length > 0 ? <>
                <div className="pt-12  md:pt-0 pb-8">
                <div className="flex items-center justify-center gap-2 max-h-36 mt-16">
                    
                    {
                        banner && banner.map(item => <div key={item._id} className="w-full ">
                            <div
                                className="hero"
                                style={{ backgroundImage: `url(${item?.image1 || item?.imageURL1})` }}>
                                <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content grid grid-cols-1 text-neutral-content text-center">
                                    <div>
                                        <Counter item={item} />
                                    </div>
                                    <div className="max-w-md mt-2">
                                        {
                                            item?.title && <h1 className="mb-5 text-white text-2xl  md:text-5xl font-bold">UP To <span className="text-4xl md:text-6xl text-cyan-400 font-bold">{item.title}</span> OFF</h1>
                                        }

                                        <button className="px-3 py-2 border-2 rounded-md border-cyan-400 hover:bg-cyan-400 text-white font-semibold">Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }

                
                
            </div>
                </div>
            </> : <></>
        }

        </>

    );
};

export default Offer;