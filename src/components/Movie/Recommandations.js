import React from "react";
import MoviesList from "../utils/MoviesList";

const Recommandations = ({ movies }) => {
  return (
    <section className="mt-8 md:mt-12">
      <h3 className="text-xl font-normal text-dark mb-8">Recommanded</h3>
      <MoviesList movies={movies} />
    </section>
  );
};

export default Recommandations;
