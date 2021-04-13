import React, { Component } from "react";

import "./App.css";
import Counter from "./Counter";
import { Footer } from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
