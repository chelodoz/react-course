import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startSaveNote, startUploading } from "../../action-creators/notes";
import { RootState } from "../../interfaces/states";

export const NotesAppBar: React.FC = () => {

    const dispatch = useDispatch();
    const { active } = useSelector((state: RootState) => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureClick = () => {
        const button = document.querySelector<HTMLButtonElement>('#fileSelector');
        button && button.click();
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (file) {
                dispatch(startUploading(file));
            }
        }


    }
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input
                id="fileSelector"
                name="file"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <button
                    className="btn"
                    onClick={handlePictureClick}>
                    Picture
                </button>

                <button
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
