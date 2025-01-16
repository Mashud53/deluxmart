import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useFeaturedProduct = () => {
    const {data:featuredProduct =[], isLoading, refetch} = useQuery({
        queryKey:['featuredProduct'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/featuredProduct`)
            return res.data
        }
    
        })
       
       return[featuredProduct, isLoading, refetch]
    
};

export default useFeaturedProduct;