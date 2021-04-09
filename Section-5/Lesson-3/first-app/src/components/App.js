import React, { Component } from "react";
import News from "./News";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <News />
        </header>
      </div>
    );
  }
}

export default App;
