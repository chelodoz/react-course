import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';
import { RootState } from '../../interfaces/states';

export const JournalScreen = () => {

    const { active } = useSelector((state: RootState) => state?.notes);

    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            <Sidebar />
            <main>
                {
                    (active)
                        ? (<NoteScreen />)
                        : (<NothingSelected />)
                }
            </main>
        </div>
    )
}
