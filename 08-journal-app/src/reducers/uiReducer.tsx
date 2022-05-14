import { ActionTypes } from "../action-types/types";
import { UIActionType } from "../interfaces/interfaces";
import { UIState } from "../interfaces/states";

const initialState: UIState = {
    loading: false
}


export const uiReducer = (state = initialState, action: UIActionType) => {

    switch (action.type) {
        case ActionTypes.UI_SET_ERROR:
            return {
                ...state,
                msgError: action.payload
            }
        case ActionTypes.UI_REMOVE_ERROR:
            return {
                ...state,
                msgError: null
            }
        case ActionTypes.UI_START_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.UI_FINISH_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}