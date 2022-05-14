import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startDeleting } from '../../action-creators/notes';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { RootState } from '../../interfaces/states'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen: React.FC = () => {


    const { active: note } = useSelector((state: RootState) => state.notes);
    const { id, body, title, url, handleInputChange, reset } = useForm(note);
    const activeId = useRef(note.id);
    const activeUrl = useRef(note.url);

    const dispatch = useDispatch();
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
        if (note.url !== activeUrl.current) {
            reset(note);
            activeUrl.current = note.url;
        }
    }, [note, reset]);


    useEffect(() => {
        id && dispatch(activeNote(id, { id, body, title, url }))
    }, [id, body, title, dispatch]);


    const handleDelete = () => {
        id && dispatch(startDeleting(id));
    }


    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    (note.url) &&
                    (<div className="notes__image">
                        <img
                            src={note.url}
                            alt="imagen"
                        />
                    </div>)
                }

            </div>
            <button
                className='btn btn-danger'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
