import React from "react";

class Child extends React.Component {
  constructor() {
    super();
    console.log("constructor child");
    this.state = {
      name: "barış",
    };
  }
  componentWillMount() {
    console.log("componentWillMount child");
  }

  componentDidMount() {
    console.log("componentDidMount child");

    setTimeout(() => {
      this.setState({
        name: "kötü kenan",
      });
    }, 2000);
  }
  render() {
    console.log("render child");

    return <>benim adım name</>;
  }
}

export default Child;
