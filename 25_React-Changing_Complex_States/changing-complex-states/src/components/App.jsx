import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({ // our fullName is storing an object
    fName: "",
    lName: ""
  });
  
  // when any of the inputs is changed, they call one single function, passing over the event that causes it
  // inside the function we get a new value (change), but want to keep the old values of the object, to change only 1

  function handleChange(event) {

    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
      console.log(prevValue);
    });
  }

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   const inputName = event.target.name;

  //   setFullName((prevValue) => {
  //     if (inputName === "fName") {
  //       return {
  //         fName: newValue,
  //         lName: prevValue.lName
  //       };
  //     } else if (inputName === "lName") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: newValue
  //       }
  //     }
  //     console.log(prevValue);
  //   });
  // }

  return (
    <div className="container">
          <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
          />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
          />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;