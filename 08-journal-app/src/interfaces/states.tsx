import { Note } from "./interfaces";

export interface RootState {
    ui: UIState;
    auth: AuthState;
    notes: NotesState;
}

export interface UIState {
    loading: boolean;
    msgError?: string;
}

export interface AuthState {
    uid: string;
    name: string;
}
export interface NotesState {
    notes: Note[];
    active: Note
}