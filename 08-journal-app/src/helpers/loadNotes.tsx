import { db } from "../firebase/firabaseConfig"
import { Note } from "../interfaces/interfaces";


export const loadNotes = async (uid: string) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();

    const notes: Note[] = [];

    notesSnap.forEach(childSnap => {
        notes.push({
            id: childSnap.id,
            ...childSnap.data()
        })
    });

    return notes;
}