import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    const title = "Main Title";
    const description = "Main description";
    return (
      <div>
        <NewsItem title={title} description={description} />
      </div>
    );
  }
}

export default News;
