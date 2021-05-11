import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MoviesPage extends React.Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  };

  render() {
    return (
      <>
        <h3>Merhaba Movies Page'desin</h3>
      </>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return movies;
};

export default connect(mapStateToProps)(MoviesPage);
