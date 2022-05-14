import { ActionTypes, AuthActionType } from "../action-types/types";
import { AuthState } from "../interfaces/states";


const initialState: AuthState = {
    uid: '',
    name: ''
}
export const authReducer = (state = initialState, action: AuthActionType) => {

    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case ActionTypes.LOGOUT:
            return {}
        default:
            return state;
    }
}
