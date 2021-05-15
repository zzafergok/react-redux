import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchMovies } from "../../actions/movies";

import MoviesList from "./MoviesList";

class MoviesPage extends React.Component {
  static propTypes = {
    movies: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <h3>Movies Page</h3>
          <MoviesList movies={this.props.movies} />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies,
  };
};

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
