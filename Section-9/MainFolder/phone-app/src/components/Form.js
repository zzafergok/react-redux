import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    name: "",
    phone: "",
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addContact({
      ...this.state,
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.onChange.bind(this)}
          />
          <input
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange.bind(this)}
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default Form;
