import { ActionTypes } from '../action-types/types';

export const login = (uid: string, displayName: string): LoginAction => ({
    type: ActionTypes.LOGIN,
    payload: {
        uid,
        displayName
    }
});
export const logout = (): LogoutAction => ({
    type: ActionTypes.LOGOUT
});

export interface LoginAction {
    type: ActionTypes.LOGIN,
    payload: {
        uid: string,
        displayName: string
    }
}
export interface LogoutAction {
    type: ActionTypes.LOGOUT,
};