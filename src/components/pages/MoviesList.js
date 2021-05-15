import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import PacmanLoader from "react-spinners/PacmanLoader";

import MovieCard from "../MovieCard";

const MoviesList = ({ movies, deleteMovie }) => {
  const emptyMessage = <p>gösterecek bir şey yok.</p>;
  const fullMoviesList = (
    <div>
      <Grid stackable columns={3}>
        {movies.movieList.map((movie) => (
          <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
        ))}
      </Grid>
    </div>
  );

  return (
    <>
      <PacmanLoader color={"#14151d"} loading={movies.fetching} size={30} />

      <div>{movies.length === 0 ? emptyMessage : fullMoviesList}</div>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movieList: PropTypes.array.isRequired,
  }).isRequired,
};

export default MoviesList;
