
import axiosSecure from "."

export const reviewInfo = async reviewData =>{
    const {data} = await axiosSecure.post('/review', reviewData)
    return data
}
