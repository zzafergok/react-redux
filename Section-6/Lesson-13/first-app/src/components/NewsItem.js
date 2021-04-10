import React, { Component } from "react";
import PropTypes from "prop-types";

class NewsItem extends Component {
  constructor(props) {
    super();
    console.log(props);
  }
  static propTypes = {
    newsData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };
  render() {
    const { title, description } = this.props.newsData;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    );
  }
}

export default NewsItem;
