import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useDiscountProduct = () => {
    const {data:discountProduct=[], isLoading, refetch}= useQuery(
        {
            queryKey:['discountProduct'],
            queryFn: async()=>{
                const res = await axiosSecure.get('/discountProduct')
                return res.data
            }
        }
    )
    return [discountProduct, isLoading, refetch]
};

export default useDiscountProduct;