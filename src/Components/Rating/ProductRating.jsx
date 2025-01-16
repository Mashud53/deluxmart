import { Rating, Star } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ProductRating = () => {
    const myStyles = {
        itemShapes: Star,
        boxBorderWidth: 0,
        itemStrokeWidth: 2,

        activeFillColor: '#ff9c00',
        activeStrokeColor: '#ff9c00',

        inactiveFillColor: '#F8DFBB',
        inactiveStrokeColor: '#ff9c00',

    }
    return (
        <div>
            <Rating
                style={{ maxWidth: 80 }}
                value='5'
                readOnly
                itemStyles={myStyles}
            />
        </div>
    );
};

export default ProductRating;