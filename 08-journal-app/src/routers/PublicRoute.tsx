import { Navigate } from 'react-router-dom';

interface PublicRoutePropTypes {
    children: JSX.Element;
    isLoggedIn: boolean;
}
export const PublicRoute = ({ children, isLoggedIn }: PublicRoutePropTypes) => {

    return isLoggedIn
        ? <Navigate to='/' />
        : children
}