import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useOrder = () => {
    const {data:getOrder =[], isLoading, refetch} = useQuery({
        queryKey:['getOrder'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/orders`)
            return res.data
        }
    
        })
       
       return[getOrder, isLoading, refetch]
};

export default useOrder;