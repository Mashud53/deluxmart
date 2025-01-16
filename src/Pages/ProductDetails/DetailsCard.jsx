import { Link} from "react-router-dom";

import { useState } from "react";
import { updateViews } from "../../api/product";



const DetailsCard = ({products}) => {
    const { _id, image1, name, price1, currentPrice1, imageURL1 } = products;
   
    const [view, setView] = useState(0)

    const priceless = parseFloat(price1)-parseFloat(currentPrice1)
    const discount = priceless / parseFloat(price1) * 100
    

    const handleView = async (id) => {
        const currentView = (view + 1)
        setView(currentView)
        
        await updateViews(id, { views: currentView })

      

    }

    



    return (

        <div onClick={() => handleView(_id)} className="card w-[140px] md:w-[150px] card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-2 md:mx-auto group">
            <Link to={`/product/${_id}`}>
                <figure className="relative pt-2">
                    <img className="h-[80px] " src={image1 || imageURL1} alt={name} />
                    {
                        currentPrice1 && currentPrice1 >0 && <p className="absolute top-0 right-0 bg-rose-500 px-2 rounded-tr-lg rounded-bl-lg text-white">{discount.toFixed(2)}%</p>
                    }
                </figure>
                <div className=" card-body relative text-center md:text-left ">
                    <h2 className="hidden md:block card-title md:text-left text-sm md:text-base ">{name.length > 15 ? <>{name.slice(0, 15) + '...'}</> : <>{name}</>}</h2>
                    <h2 className="md:hidden card-title text-center text-sm md:text-base ">{name.length > 15 ? <p className="text-center">{name.slice(0, 15) + '...'}</p> : <p className="text-center">{name}</p>}</h2>
                    <div className="flex items-center justify-center md:justify-start">
                        <div className=" rating rating-xs">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    
                    {
                        currentPrice1 && currentPrice1 > 0 ?
                            <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
                                <p className="md:text-left  text-sm text-cyan-500"><span className="ml-1">&#x62f;&#x2e;&#x625;</span> {currentPrice1}</p>
                                <p className="md:text-left lg:text-xs text-xs "><span className="ml-1">&#x62f;&#x2e;&#x625;</span> <span className="line-through">{price1}</span> </p>
                                
                            </div> :
                            <p className="md:text-left lg:text-lg text-sm"><span className="ml-1">&#x62f;&#x2e;&#x625;</span> {price1}</p>
                            
                    }

                </div>
            </Link>
            
        </div>
    )
};

export default DetailsCard;