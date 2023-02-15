import React from "react";

const MovieCardSkeleton = () => {
  return (
    <div className="relative w-full font-bebas bg-white shadow-xl">
      <div className="rate-tag bg-slate-300">
        <span className=" text-md w-4 h-6"> </span>
        <svg className="w-3 h-3 translate-y-[-2px]">
          <use href={`#icon-star`}></use>
        </svg>
      </div>
      <div className="w-full h-40 md:h-48 xl:h-60 bg-slate-200"></div>

      <div className="px-2 py-2 lg:px-3 animate-pulse">
        <h3 className="mb-1 lg:mb-2 h-6 w-32 bg-slate-200"> </h3>
        <h5 className="h-5 w-16 bg-slate-200"> </h5>

        <div className="w-full flex justify-between items-center">
          <label className="flex items-center justify-between gap-2  h-5 w-20 bg-slate-200 mt-2">
            {" "}
          </label>
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-8 md:w-14 md:h-10 bg-slate-200 movie-card-triangle"></div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;

export const getCardsSkeleton = (nbr) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
      {Array.from({ length: nbr }, (_, index) => {
        return <MovieCardSkeleton key={index} />;
      })}
    </div>
  );
  // return new Array(nbr).fill(<MovieCardSkeleton />);
};
