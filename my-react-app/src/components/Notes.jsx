import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';


function NotesDesc(props) {
    return <div className="all-notes"><div className="note-description"><h2>Notes</h2><small>All notes created appears here.</small></div> <div className="notes-container">
         {props.notes.map((note, index)=> {return <div key={index}  className="notes">
            <h3 className="title"> {note.title} </h3><p className="noteContent"> {note.content} </p>
            <button className="delete" onClick={()=> {
                props.onDelete(index)
            }}><DeleteIcon /> </button>
            </div> })}
          </div> </div>
};


export default NotesDesc;                                       