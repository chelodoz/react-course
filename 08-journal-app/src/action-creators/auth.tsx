import firebase from "firebase";
import Swal from "sweetalert2";
import { login, logout } from "../actions/auth";
import { AuthActionType, NotesActionType, UIActionType } from "../action-types/types";
import { uiStartLoading, uiFinishLoading } from "../actions/ui";
import { googleAuthProvider } from "../firebase/firabaseConfig";
import { Dispatch } from "redux";
import { noteLogout } from "../actions/notes";

export const startLoginEmailPasword = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActionType | UIActionType>) => {

        try {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(uiStartLoading());
            if (user?.displayName) {
                dispatch(login(user!.uid, user!.displayName));
            }
            dispatch(uiFinishLoading());
        } catch (err: any) {
            dispatch(uiFinishLoading());
            Swal.fire('Error', err.message, 'error');

        }
    }
}

export const startRegisterWithEmailPasswordName = (email: string, password: string, name: string) => {
    return async (dispatch: any) => {
        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

            await user!.updateProfile({ displayName: name });
            if (user?.displayName) {
                dispatch(login(user!.uid, user!.displayName));
            }
        } catch (err: any) {
            Swal.fire('Error', err.message, 'error');
        }
    }
}


export const startGoogleLogin = () => {
    return async (dispatch: Dispatch<AuthActionType>) => {
        const { user } = await firebase.auth().signInWithPopup(googleAuthProvider)
        if (user?.displayName) {
            dispatch(login(user!.uid, user!.displayName));
        }
    }
}


export const startLogout = () => {
    return async (dispatch: Dispatch<AuthActionType | NotesActionType>) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
}