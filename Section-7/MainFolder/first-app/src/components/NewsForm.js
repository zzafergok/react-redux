import React, { Component } from "react";

class NewsForm extends Component {
  //   constructor() {
  //     super();
  //     this.addButton = this.addButton.bind(this);
  //   }

  // 1 way
  addButton() {
    console.log("AddButton worked");
    this.props.addNews();
  }

  // 2 way
  //   addButton = () => {
  //     console.log("AddButton worked");
  //     this.props.addNews();
  //   };

  render() {
    return (
      <div>
        {/* <p>Bind etmenin 1. yolu</p> */}
        {/* <button onClick={this.addButton.bind(this)}>Click Me!</button> */}

        {/* <p>Bind etmenin 2. yolu</p> */}
        {/* <button onClick={this.addButton}>Click Me!</button> */}

        {/* <p>Bind etmenin 3. yolu</p> */}
        <button onClick={() => this.addButton()}>Click Me!</button>
      </div>
    );
  }
}

export default NewsForm;
