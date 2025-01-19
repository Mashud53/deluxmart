import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useBlogs = () => {
    const { data: blogs = [], isLoading, refetch } = useQuery(
        {
            queryKey: ['blogs'],
            queryFn: async () => {
                const res = await axiosSecure.get('blogs')
                return res.data
            }
        }
    )
    return [blogs, isLoading, refetch];
};

export default useBlogs;