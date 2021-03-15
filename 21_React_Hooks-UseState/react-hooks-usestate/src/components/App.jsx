import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <p>
        The time will update every second and you can click the button to
        update it immediately.
      </p>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
