//jshint esversion:6

import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //3. Add notes to an array
  const [notes, setNotes] = useState([]); // starts with no notes and gets populated when the user adds them

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]; // get hold of previous notes and add the new one at the end
    })
}

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote} />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> //static-note */}
      <Footer />
    </div>
  );
}

export default App;