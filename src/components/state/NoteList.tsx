import { useEffect, useRef, useState } from "react";

const NoteList: React.FC = () => {
    const [note, setNote] = useState<string>("");
    const [noteList, setNoteList] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleAddNote = () => {
        setNote("");
        setNoteList((prevNoteList) => [...prevNoteList, note]);
    };
    const handleChangeNote = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    };

    useEffect(() => {
        // inputRef.current?.focus();

        if (!inputRef.current) {
            return;
        } else {
            inputRef.current.focus();
        }
    }, []);
    return (
        <div>
            <h1>Node List</h1>
            <ul>
                {noteList.map((note) => (
                    <li key={note}>{note}</li>
                ))}
            </ul>
            <input ref={inputRef} type="text" value={note} onChange={handleChangeNote} />
            <button onClick={handleAddNote}> Add</button>
        </div>
    );
};

export default NoteList;
