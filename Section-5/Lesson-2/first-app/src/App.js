import React, { Component } from "react";
import NewsItem from "./NewsItem";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NewsItem />
        </header>
      </div>
    );
  }
}

export default App;
