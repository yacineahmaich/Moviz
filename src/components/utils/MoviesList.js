import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
      {movies.map((movie, idx) => (
        <MovieCard
          key={movie.id}
          idx={idx}
          id={movie.id}
          poster={movie.poster}
          title={movie.title}
          rate={movie.rate}
          releaseDate={movie.releaseDate}
          views={movie.views}
        />
      ))}
    </div>
  );
};

export default MoviesList;
