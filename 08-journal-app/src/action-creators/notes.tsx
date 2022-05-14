import { Dispatch } from "react";
import Swal from "sweetalert2";
import { NotesActionType } from "../action-types/types";
import { activeNote, addNewNote, deleteNote, refreshNote, setNotes } from "../actions/notes";
import { db } from "../firebase/firabaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { Note } from "../interfaces/interfaces";
import { RootState } from "../interfaces/states";

export const startNewNote = () => {
    return async (dispatch: Dispatch<NotesActionType>, getState: () => RootState) => {
        const { uid } = getState().auth;

        const newNote: Note = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));
    }
}

export const startLoadingNotes = (uid: string) => {
    return async (dispatch: Dispatch<NotesActionType>) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
};
export const startSaveNote = (note: Note) => {
    return async (dispatch: Dispatch<NotesActionType>, getState: () => RootState) => {

        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url;
        }
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        note.id && dispatch(refreshNote(note.id, note));

        Swal.fire('Saved', note.title, 'success');
    }
};

export const startUploading = (file: File) => {
    return async (dispatch: Dispatch<any>, getState: () => RootState) => {

        const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Saved',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);

        dispatch(startSaveNote({ ...activeNote, url: fileUrl }));
        Swal.close();
    }
};

export const startDeleting = (id: string) => {
    return async (dispatch: Dispatch<any>, getState: () => RootState) => {

        const { uid } = getState().auth;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
        Swal.close();
    }
};