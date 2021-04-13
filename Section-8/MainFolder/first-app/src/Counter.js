import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };
  decrement() {
    this.setState({
      number: --this.state.number,
    });
  }

  increment() {
    this.setState({
      number: ++this.state.number,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.decrement.bind(this)}>-</button>
        <button onClick={this.increment.bind(this)}>+</button>
      </div>
    );
  }
}

export default Counter;
