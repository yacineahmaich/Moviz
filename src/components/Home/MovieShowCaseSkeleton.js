import React from "react";

const MovieShowCaseSkeleton = () => {
  return (
    <div className="relative w-full h-[300px] lg:h-[360px] bg-slate-200 animate-pulse">
      <div className="absolute  w-32 md:w-36 lg:w-44 h-36 md:h-44 lg:h-48 bottom-0 right-8 md:right-14  border-8 border-white translate-y-1/4 bg-slate-200"></div>
    </div>
  );
};

export default MovieShowCaseSkeleton;
