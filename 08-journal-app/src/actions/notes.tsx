import { Note } from "../interfaces/interfaces";
import { ActionTypes } from "../action-types/types";

export const activeNote = (id: string, note: Note): NotesActiveNote => ({
    type: ActionTypes.NOTES_ACTIVE,
    payload: { ...note, id }
});

export const setNotes = (notes: Note[]): NotesSetNotes => ({
    type: ActionTypes.NOTES_LOAD,
    payload: [...notes]
});


export const refreshNote = (id: string, note: Note): NotesRefreshNote => ({
    type: ActionTypes.NOTES_UPDATED,
    payload: { ...note, id }
});

export const deleteNote = (id: string): NotesDeleteNote => ({
    type: ActionTypes.NOTES_DELETE,
    payload: id
});
export const noteLogout = (): NotesLogout => ({
    type: ActionTypes.NOTES_LOGOUT_CLEANING
});

export const addNewNote = (id: string, note: Note): NotesAddNew => ({
    type: ActionTypes.NOTES_ADD_NEW,
    payload: { id, ...note }
});

export interface NotesActiveNote {
    type: ActionTypes.NOTES_ACTIVE,
    payload: Note
}

export interface NotesSetNotes {
    type: ActionTypes.NOTES_LOAD,
    payload: Note[]
}

export interface NotesRefreshNote {
    type: ActionTypes.NOTES_UPDATED,
    payload: Note
}
export interface NotesDeleteNote {
    type: ActionTypes.NOTES_DELETE,
    payload: string
}
export interface NotesLogout {
    type: ActionTypes.NOTES_LOGOUT_CLEANING
}
export interface NotesAddNew {
    type: ActionTypes.NOTES_ADD_NEW,
    payload: Note
}