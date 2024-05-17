import { useCheckAuthQuery } from '../features/user';
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const { data, error, isLoading } = useCheckAuthQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error('Error fetching user data:', error);
        return <Navigate to="/login"/>;
    }

    if (!data) {
        return <Navigate to="/login"/>;
    }

    return <Outlet/>
}

export default ProtectedRoutes