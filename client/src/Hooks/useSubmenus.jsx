import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../api"


const useSubmenus = () => {
    const {data:subMenus =[], isLoading, refetch} = useQuery({
        queryKey:['subMenus'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/submenu`)
            return res.data
        }
    
        })
       
       return[subMenus, isLoading, refetch]
}

export default useSubmenus;