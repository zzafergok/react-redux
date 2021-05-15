import React from "react";
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => {
  const emptyMessage = <p>gösterecek bir şey yok.</p>;
  const fullMoviesList = <p>şu an dolu burası</p>;

  return (
    <>
      <div>{movies.length === 0 ? emptyMessage : fullMoviesList}</div>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MoviesList;
