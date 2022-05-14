import { ActionTypes, NotesActionType } from "../action-types/types";

import { NotesState } from "../interfaces/states";

const initialState = {
    notes: [],
    active: {}
}


export const notesReducer = (state: NotesState = initialState, action: NotesActionType) => {

    switch (action.type) {
        case ActionTypes.NOTES_ACTIVE:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case ActionTypes.NOTES_ADD_NEW:
            return {
                ...state,
                notes: [action.payload, ...state.notes]

            }
        case ActionTypes.NOTES_LOAD:
            return {
                ...state,
                notes: [...action.payload]
            }
        case ActionTypes.NOTES_UPDATED:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload
                        : note
                )
            }
        case ActionTypes.NOTES_DELETE:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case ActionTypes.NOTES_LOGOUT_CLEANING:
            return {
                ...state,
                active: null,
                notes: []
            }
        default:
            return state;
    }
}