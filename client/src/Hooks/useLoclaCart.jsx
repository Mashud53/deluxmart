
import { useQuery } from "@tanstack/react-query";


const useLoclaCart = () => {
   

    const {data:localCarts =[], isLoading, refetch} = useQuery({
        queryKey:['localCarts'],
        queryFn: async()=>{
            const storeData = localStorage.getItem('deluxCart');
            if(storeData){
                const parseData = JSON.parse(storeData)
                return parseData
            }
            return [];
            
        }
    
        })
       
       return[localCarts, isLoading, refetch]
    
};

export default useLoclaCart;