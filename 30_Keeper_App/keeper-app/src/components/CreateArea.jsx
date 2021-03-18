import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({ // one object that stores both title and content
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target; // destructured object that taps into the event.target.name and value
  

    setNote(prevNote => { // setNote receives the previous note
      return {
        ...prevNote, // spread all the key value pairs in our note and adds to the final object
        [name]: value
      };
    });
  };

  function submitNote(event) {
    props.onAdd(note); // calls onAdd() from App.jsx and passes currently created note
    setNote({ // we set the state of the note to empty to clear out the create area after submitting a note
      title: "",
      content: ""
    });
    event.preventDefault(); // prevents the page from reloading when clicking on the submit button
  };

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;