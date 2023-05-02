import React from "react";
import { Component } from "react";
import Rahul from "./Rahul.js";
import Rejaul from "./Rejaul.js";
class App extends Component {
  render() {
    return (
      <div>
        <Rejaul power="Power:140" />
        <Rahul power="Power:120" />
      </div>
    );
  }
}
export default App;
