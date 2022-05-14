import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import { firebase } from '../firebase/firabaseConfig';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../action-creators/notes';

export const AppRouter: React.FC = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid && user?.displayName) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                
                dispatch(startLoadingNotes(user.uid));
               

            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/*'
                    element={
                        <PublicRoute isLoggedIn={isLoggedIn}>
                            <AuthRouter />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/"
                    element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <JournalScreen />
                        </PrivateRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    )
}
