import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/states';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const { notes } = useSelector((state: RootState) => state.notes)


    return (
        <div className="journal__entries">

            {
                notes.map(note => (
                    <JournalEntry
                        key={note.id}
                        {...note}
                    />
                ))
            }

        </div>
    )
}
