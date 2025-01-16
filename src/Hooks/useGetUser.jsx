import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useGetUser = () => {
    const {data:getuser =[], isLoading, refetch} = useQuery({
        queryKey:['getuser'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    
        })
       
       return[getuser, isLoading, refetch]
};

export default useGetUser;