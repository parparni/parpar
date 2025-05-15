import React, {useState} from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Margin } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { colors } from "@mui/material";
function Create(props) {
 const [note, setNote]  = useState({
    title: "",
    content: ""
 });

 function handleChange(event) {
    const {name, value} = event.target;
    setNote((prevNote)=> {
        return {
            ...prevNote,
            [name]: value
        }
    })
 }

 function submitNote(event) {
    props.onAdd(note);
    event.preventDefault()
 }

 const [isExpanded, setExpanded] = useState(false);

 function handleExpand() {
  setExpanded(true)
 }

    return (<>
    <form action="" method="post" id="container">
       {isExpanded &&  <input type="text" name="title" id="title" placeholder="Title*" maxLength={100} autoFocus autoComplete="off" onChange={handleChange} spellCheck={false}  value={note.title}/>}
       {isExpanded && <small className="length">{note.title.length}/100</small>}
        <textarea name="content" id="content" cols="300" rows={isExpanded ? 10 : 1} placeholder="Content*" autoFocus maxLength={2500} onChange={handleChange} autoComplete="off" spellCheck={false} value={note.content} onClick={handleExpand} ></textarea>
        <small className="length">{note.content.length}/2500</small>
        <Zoom
          in={isExpanded}>
         <Fab className="add-note" onClick={submitNote}> <AddIcon /> </Fab>
        </Zoom>
   
    </form></>)
};
export default Create;