import React, { Component } from "react";
import News from "./components/News";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const news = [
      {
        title: "title1",
        description: "description1",
      },
      {
        title: "title2",
        description: "description2",
      },
      {
        title: "title3",
        description: "description3",
      },
    ];
    let name = <div>Zafer</div>;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {name}
          <News news={news} />
        </header>
      </div>
    );
  }
}

export default App;
