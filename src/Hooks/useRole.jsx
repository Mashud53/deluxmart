import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const {user, loading}= useAuth();
        
    const {data:userRole, isLoading}= useQuery({
        enabled: !loading && !!user?.email,
        queryKey:['userRole'],
        queryFn: async ()=> await getRole(user?.email),
    })
    return [userRole, isLoading]
};

export default useRole;