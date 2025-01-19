

import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import useRole from '../Hooks/useRole';

const AdminRoute = ({children}) => {
    const [userRole, isLoading] =useRole()
        

    if (isLoading) return <Loader></Loader>
    if (userRole === 'admin') return children
    return <Navigate to='/dashboard' />
};

export default AdminRoute;