import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    return (
      <div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}

export default News;
