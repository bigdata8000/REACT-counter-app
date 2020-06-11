import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button>Increment</button>

        <br />
        <br />
        <span>1 + 2 = {1 + 2}</span>
      </div>
    );
  }
}

export default Counter;
