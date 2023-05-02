import React, { Component } from "react";
import WithArm from "./Hoc/WithArm.js";

class Rahul extends Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.hochandelGanshots}>
          Rahul {this.props.hocgunName} Gan{this.props.power} Ganshot:
          {this.props.hocGanshots}
        </h3>
      </div>
    );
  }
}
export default WithArm(Rahul, 10);
