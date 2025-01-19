import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useBanners = () => {
    const {data:banners =[], isLoading, refetch} = useQuery({
        queryKey:['banners'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/banners`)
            return res.data
        }
    
        })
       
       return[banners, isLoading, refetch]
};

export default useBanners;