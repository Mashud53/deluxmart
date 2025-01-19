import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useMenus = () => {
    const {data:allMenus =[], isLoading, refetch} = useQuery({
        queryKey:['allMenus'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/menu`)
            return res.data
        }
    
        })
       
       return[allMenus, isLoading, refetch]
};

export default useMenus;