import React from "react";


const currentTime = new Date(2019, 11, 1, 9).getHours();

function App() {
  return <div className="container">{
    currentTime > 12 && <h1>Why are you still working?</h1>
    /* currentTime > 12 ? <h1>Why are you still working?</h1> : null */
    // render is condition is met, don`t (null) if it's not
    
    }</div>;
}

export default App;