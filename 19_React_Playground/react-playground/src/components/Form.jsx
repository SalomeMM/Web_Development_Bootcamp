import React from "react";

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
          {/* {props.isRegistered === false && <input type="password" placeholder="Confirm Password" />} */}
          {/* {props.isRegistered === false ? <input type="password" placeholder="Confirm Password" /> : null } */}
          <button type="submit">
              {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
