import React, { Component } from "react";
import News from "./components/News";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let name = <div>Zafer</div>;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {name}
          <News />
        </header>
      </div>
    );
  }
}

export default App;
