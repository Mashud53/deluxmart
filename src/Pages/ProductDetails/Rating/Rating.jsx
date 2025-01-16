import { useEffect, useState } from "react";
import useRating from "../../../Hooks/useRating";
import StarRating from "./Star";
import Loader from "../../../Components/Loader/Loader";
import Coments from "./Coments";


const Rating = ({ id }) => {

    const [getRating, isLoading,] = useRating(id);
    const [star5, setStar5] = useState({});
    const [star4, setStar4] = useState({});
    const [star3, setStar3] = useState({});
    const [star2, setStar2] = useState({});


    useEffect(() => {
        if (getRating && getRating.length) {
            const fiveStar = getRating.filter(item => item.rating == '5')
            setStar5(fiveStar)
            const fourStar = getRating.filter(item => item.rating == '4')
            setStar4(fourStar)
            const threeStar = getRating.filter(item => item.rating == '3')
            setStar3(threeStar)
            const twoStar = getRating.filter(item => item.rating == '')
            setStar2(twoStar)
        }

    }, [getRating])

    
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="pt-3">
            <div className="flex items-center gap-4">
                <StarRating starRating={"5"} />
                <h2 className="text-sm">{star5?.length}</h2>
            </div>
            <div className="flex items-center gap-4">
                <StarRating starRating={"4"} />
                <h2 className="text-sm">{star4?.length}</h2>
            </div>
            <div className="flex items-center gap-4">
                <StarRating starRating={"3"} />
                <h2 className="text-sm">{star3?.length}</h2>
            </div>
            <div className="flex items-center gap-4">
                <StarRating starRating={"2"} />
                <h2 className="text-sm">{star2?.length}</h2>
            </div>

            <Coments coments={getRating}></Coments>

        </div>
    );
};

export default Rating;