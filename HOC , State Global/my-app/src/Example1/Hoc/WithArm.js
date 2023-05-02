import React, { Component } from "react";

const Army = (Man, Param) => {
  class newArmy extends Component {
    state = {
      gunshots: 0,
    };

    handelGanshots(Spram) {
      this.setState({
        gunshots: Spram + Param,
      });
    }

    render() {
      return (
        <Man
          hochandelGanshots={() => this.handelGanshots(this.state.gunshots)}
          hocgunName="AK47"
          hocGanshots={this.state.gunshots}
          {...this.props}
        />
      );
    }
  }
  return newArmy;
};
export default Army;
