import React from "react";

function Component02({ stateUp }) {
  stateUp("I am from Child Component");

  return (
    <div>
      <h1> Hello </h1>
    </div>
  );
}

export default Component02;
