import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

class News extends Component {
  static propTypes = {
    // news: PropTypes.oneOfTypes([
    //   PropTypes.number,
    //   PropTypes.array,
    //   PropTypes.string,
    // ]),
    news: PropTypes.array,
    name: PropTypes.string.isRequired,
  };
  render() {
    const news = this.props.news.map((news, index) => (
      <NewsItem key={index} newsData={news} />
    ));
    return (
      <div>
        {this.props.name}
        {news}
      </div>
    );
  }
}

export default News;
