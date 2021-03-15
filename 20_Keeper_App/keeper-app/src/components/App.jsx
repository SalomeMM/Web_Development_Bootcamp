//jshint esversion:6

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// takes a single note item and renders a custom Note component

function App() {
  return (
    <div>
      <Header />{" "}
      {notes.map((noteItem) => 
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
