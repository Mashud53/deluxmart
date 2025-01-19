import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const {user, loading}= useAuth();
        
    const {data:userRole, isLoading, refetch}= useQuery({
        enabled: !loading && !!user?.email,
        queryKey:['userRole', user?.email],
        queryFn: async ()=> {
            return await getRole(user?.email)}
    })
    return [userRole, isLoading, refetch]

        
    ;
};

export default useRole;