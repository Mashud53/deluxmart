import StarRating from "./Star";



const Coments = ({ coments }) => {
    

    return (
        <div className="mt-2">
            <h2 className="text-base text-stone-500">What people says</h2>
            {
                coments.map(item => <div key={item._id}
                    className="border-t-2 py-3">
                    <div className="flex items-center gap-2">
                        <StarRating starRating={item.rating}></StarRating>
                        <p className="text-xs text-gray-400 ">{item?.userName || item?.email}</p>
                    </div>
                    <p className="text-sm mt-2 text-gray-500">{item.comment}</p>

                </div>)
            }

        </div>
    );
};

export default Coments;