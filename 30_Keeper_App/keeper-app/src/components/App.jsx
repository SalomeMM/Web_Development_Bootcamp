//jshint esversion:6

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //3. Add notes to an array
  const [notes, setNotes] = useState([]); // starts with no notes and gets populated when the user adds them

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; // get hold of previous notes and add the new one at the end
    });
  }

  function deleteNote(id) { // this function is passed to all rendered notes as a property
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => { // loop through the previous notes
        return index !== id; // returns all notes where the index does not equal the id of the note that needs to be deleted
      }) 
    })

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index} // will pick this up in Note.jsx as props for onDelete()
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> //static-note */}
      <Footer />
    </div>
  );
}

export default App;
