import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    // one object that stores both title and content
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; // destructured object that taps into the event.target.name and value

    setNote((prevNote) => {
      // setNote receives the previous note
      return {
        ...prevNote, // spread all the key value pairs in our note and adds to the final object
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note); // calls onAdd() from App.jsx and passes currently created note
    setNote({
      // we set the state of the note to empty to clear out the create area after submitting a note
      title: "",
      content: "",
    });
    event.preventDefault(); // prevents the page from reloading when clicking on the submit button
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input // if isExpanded is true, render input. If not, don't ( : null).
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}> 
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
