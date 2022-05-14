import { Navigate } from 'react-router-dom';

interface PrivateRoutePropTypes {
    children: JSX.Element;
    isLoggedIn: boolean;
}

export const PrivateRoute = ({ children, isLoggedIn }: PrivateRoutePropTypes) => {

    return isLoggedIn
        ? children
        : <Navigate to='/auth/login' />
}
