import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let name = <div>Zafer</div>;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {2 + 2} = {2 + 2}
          </p>
          <p>Benim Adım {name} </p>
        </header>
      </div>
    );
  }
}

export default App;
