
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import axiosSecure from "../api";


const useProducts = () => {
    
    const {data:allProducts =[], isLoading, refetch} = useQuery({
        queryKey:['allProducts'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/product`)
            return res.data
        }
    
        })
       
       return[allProducts, isLoading, refetch]
    
};

export default useProducts;