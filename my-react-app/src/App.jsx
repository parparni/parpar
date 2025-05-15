import React, { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import NotesDesc from "./components/Notes";
function App() {
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes((prevNotes) => {
            return [...prevNotes, note]
        })
    };

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((item, index) => {
               return index !== id
                })
        })
    }

    return <div>
        <Header />
        <Create onAdd={addNote} />
        <NotesDesc notes={notes} onDelete={deleteNote} />
    </div>
};
export default App;