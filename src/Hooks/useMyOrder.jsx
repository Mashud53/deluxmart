import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";
import useAuth from "./useAuth";


const useMyOrder = () => {
    const {user}= useAuth()
    const {data:getOrder =[], isLoading, refetch:orderRefetch} = useQuery({
        queryKey:['getOrder', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/myorders?email=${ user?.email}`)
            return res.data
        }
    
        })
       
       return[getOrder, isLoading, orderRefetch]
};

export default useMyOrder;