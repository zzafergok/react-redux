import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div>
        {/* <p>1 way</p> */}
        {/* <h3>Title Props : {this.props.title}</h3>
        <h4>Description Props : {this.props.description}</h4> */}

        {/* <p>2 way</p>
        <h3>Title Props : {title}</h3>
        <h4>Description Props : {description}</h4> */}

        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    );
  }
}

export default NewsItem;
