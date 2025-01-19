import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useProductBySell = () => {
    const {data:trand =[], isLoading, refetch} = useQuery({
        queryKey:['trand'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/trand`)
            return res.data
        }
    
        })
       
       return[trand, isLoading, refetch]
};

export default useProductBySell;