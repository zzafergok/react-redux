import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchMovies, deleteMovie } from "../../actions/movies";

import MoviesList from "./MoviesList";

class MoviesPage extends React.Component {
  static propTypes = {
    movies: PropTypes.object.isRequired,
    deleteMovie: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <>
        <h3>Movies</h3>
        <MoviesList
          movies={this.props.movies}
          deleteMovie={this.props.deleteMovie}
        />
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
  deleteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
