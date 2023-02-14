import React from "react";
import { MovieDetails, Cast, Recommandations } from "../components/Movie";

const Movie = () => {
  return (
    <div className="w-full p-4 min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-20px)] md:p-5 lg:p-7">
      <MovieDetails />
      <Cast />
      <Recommandations />
    </div>
  );
};

export default Movie;
