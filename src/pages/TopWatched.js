import React from "react";
import MoviesList from "../components/utils/MoviesList";

const TopWatched = () => {
  return (
    <div className="w-full">
      <div className="mt-4 mb-4 py-2 px-4 md:px-8">
        <h3 className="text-xl md:text-2xl mb-8">Top Watched</h3>
        <MoviesList />
      </div>
    </div>
  );
};

export default TopWatched;
