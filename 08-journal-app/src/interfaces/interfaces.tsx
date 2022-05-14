import { ActionTypes } from "../action-types/types";
import { NotesState, UIState } from "./states";


export interface UIActionType {
    type: string;
    payload: UIState
}


export interface Note {
    id?: string;
    title?: string;
    body?: string;
    date?: number;
    url?: string;
}

//Auth 
