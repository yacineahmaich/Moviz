import React from "react";
import MoviesList from "../utils/MoviesList";

const Recommandations = ({ movies }) => {
  if (movies.length === 0) return null;

  return (
    <section className="mt-8 md:mt-12">
      <h3 className="text-xl font-normal text-dark dark:text-gray-light mb-8">
        Recommanded
      </h3>
      <MoviesList movies={movies} />
    </section>
  );
};

export default Recommandations;
