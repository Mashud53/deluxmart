import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import useRole from "../Hooks/useRole";


const HostRoute = ({children}) => {
    const [userRole, isLoading] =useRole()
        

    if (isLoading) return <Loader></Loader>
    if (userRole === 'admin' || userRole ==='host') return children
    return <Navigate to='/dashboard' />
};

export default HostRoute;