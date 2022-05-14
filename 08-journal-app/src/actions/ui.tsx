import { ActionTypes } from "../action-types/types";

export const uiStartLoading = (): UIStartLoadingAction => ({
    type: ActionTypes.UI_START_LOADING
})

export const uiFinishLoading = (): UIFinishLoadingAction => ({
    type: ActionTypes.UI_FINISH_LOADING
})

export const setError = (err: string): UISetErrorAction => ({
    type: ActionTypes.UI_SET_ERROR,
    payload: err
});

export const removeError = (): UIRemoveErrorAction => ({
    type: ActionTypes.UI_REMOVE_ERROR
});


export interface UISetErrorAction {
    type: ActionTypes.UI_SET_ERROR,
    payload: string
}

export interface UIRemoveErrorAction {
    type: ActionTypes.UI_REMOVE_ERROR
}

export interface UIStartLoadingAction {
    type: ActionTypes.UI_START_LOADING
}

export interface UIFinishLoadingAction {
    type: ActionTypes.UI_FINISH_LOADING
}