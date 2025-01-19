import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useCategoryShop = () => {
    const {data:categoryItems =[], isLoading, refetch} = useQuery({
        queryKey:['categoryItems'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/shopbycategory`)
            return res.data
        }
    
        })
       
       return[categoryItems, isLoading, refetch]
};

export default useCategoryShop;