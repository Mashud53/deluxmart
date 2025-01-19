import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useRating = (id) => {
    const {data:getRating =[], isLoading, refetch:reviewRefetch} = useQuery   ({
        queryKey: ['getRating', id],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/review/${id}`)
            
            return res.data
        }
    
        })
       
       return[getRating, isLoading, reviewRefetch]
};

export default useRating;