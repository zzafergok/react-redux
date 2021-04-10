import React, { Component } from "react";
import News from "./components/News";

import "./App.css";

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
class App extends Component {
  addNews() {
    console.log("addNews worked");
    news.push({
      title: "title4",
      description: "description4",
    });
    console.log(news);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <News news={news} name="zafer" addNews={this.addNews} />
        </header>
      </div>
    );
  }
}

export default App;
