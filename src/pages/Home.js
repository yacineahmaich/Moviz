import React from "react";
import icons from "../assets/icons.svg";
import MovieShowCase from "../components/Home/MovieShowCase";

import MoviesList from "../components/utils/MoviesList";

const Home = () => {
  return (
    <div className="w-full">
      <MovieShowCase />
      <div className="mt-12 mb-4 py-2 px-4 md:px-8">
        <h3 className="text-xl md:text-2xl mb-8">Exclusive & New</h3>
        <MoviesList />
      </div>
    </div>
  );
};

export default Home;
