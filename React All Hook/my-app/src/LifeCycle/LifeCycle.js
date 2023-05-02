import React, { Component } from "react";

export default class LifeCycle extends Component {
  state = {
    count: 0,
    date: new Date(),
  };

  addClick = () => {
    // preveas stat ke bebohar kurar junno setState e '({Count}) => ({})' callBack function dite hube
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  // jukon component relode nibe tukon kaz kurbe
  componentDidMount() {
    const { count } = this.state;
    document.title = `click ${count} times`;

    setInterval(this.tick, 1000);
  }

  // jukon component update nibe tukon kaz kurbe
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `click ${count} times`;
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date } = this.state;

    return (
      <div>
        <p> Timer:{date.toLocaleTimeString()} </p>
        <p>
          <button type="button" onClick={this.addClick}>
            Click
          </button>
        </p>
      </div>
    );
  }
}
