import React from "react";

function Note(props) {
  function handleClick() {
    // gets passed over from the props and will delete this this note from the array
    props.onDelete(props.id); // trigger onDelete() to delete the note when clicking the delete button
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
