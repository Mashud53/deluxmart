
import axiosSecure from "."

export const addToCart = async cartItem =>{
    const {data} = await axiosSecure.post('/carts', cartItem)
    return data
}


