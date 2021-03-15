import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// to get info from inside the objects, let's destructure them:
const [honda, tesla] = cars;

// we have destructured the 2 objects "tesla" and "honda", let's destructure the objects inside:

const { speedStats: { topSpeed: hondaTopSpeed } } = honda
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla

const { coloursByPopularity: [hondaTopColour] } = honda
const { coloursByPopularity: [teslaTopColour] } = tesla

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);