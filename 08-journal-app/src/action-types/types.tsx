import { LoginAction, LogoutAction } from "../actions/auth";
import { NotesActiveNote, NotesSetNotes, NotesRefreshNote, NotesDeleteNote, NotesLogout, NotesAddNew } from "../actions/notes";
import { UIFinishLoadingAction, UIRemoveErrorAction, UISetErrorAction, UIStartLoadingAction } from "../actions/ui";

export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGOUT = '[Auth] Logout',

    UI_SET_ERROR = '[UI] Set Error',
    UI_REMOVE_ERROR = '[UI] Remove Error',

    UI_START_LOADING = '[UI] Start loading',
    UI_FINISH_LOADING = '[UI] Finish loading',

    NOTES_ADD_NEW = '[Notes] New Note',
    NOTES_ACTIVE = '[Notes] Set active note',
    NOTES_LOAD = '[Notes] Load notes',
    NOTES_UPDATED = '[Notes] Update note',
    NOTES_FILE_URL = '[Notes] Update image url',
    NOTES_DELETE = '[Notes] Delete note',
    NOTES_LOGOUT_CLEANING = '[Notes] Logout Cleaning'
}

export type AuthActionType = LoginAction | LogoutAction

export type UIActionType = UISetErrorAction | UIRemoveErrorAction | UIStartLoadingAction | UIFinishLoadingAction

export type NotesActionType = NotesActiveNote | NotesSetNotes | NotesRefreshNote | NotesDeleteNote | NotesLogout | NotesAddNew
