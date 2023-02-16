import React from "react";

const MovieDetailsSkeleton = () => {
  return (
    <section className="relative w-full sm:h-[50vw] sm:max-h-[75vh] flex flex-col sm:flex-row animate-pulse">
      <div className="w-full h-60  sm:w-[66%] lg:w-[50%]  sm:h-full bg-slate-200 dark:bg-opacity-25 mb-4 sm:mb-0 shadow-lg"></div>

      {/* info */}
      <div className="w-full h-full flex flex-col px-0 sm:px-6 font-bebas sm:pt-2 md:pt-4">
        <div className="w-full flex items-baseline sm:justify-start gap-3 mb-3 sm:mb-4">
          <h2 className="w-60 h-5 bg-slate-200 dark:bg-opacity-25 rounded">
            {" "}
          </h2>
        </div>
        {/* Date & Rate */}
        <div className="w-12 h-4 bg-slate-200 dark:bg-opacity-25 rounded"></div>

        {/* categories */}
        <ul className="flex flex-wrap gap-3 lg:gap-4  font-poppins text-sm my-8">
          <li className="bg-slate-200 dark:bg-opacity-25 w-24 h-5 rounded"></li>
          <li className="bg-slate-200 dark:bg-opacity-25 w-24 h-5 rounded"></li>
          <li className="bg-slate-200 dark:bg-opacity-25 w-24 h-5 rounded"></li>
          <li className="bg-slate-200 dark:bg-opacity-25 w-24 h-5 rounded"></li>
        </ul>

        {/* overview */}
        <div className="font-poppins mt-auto max-w-2xl">
          <h6 className="w-24 h-6 mb-3 bg-slate-200 dark:bg-opacity-25 rounded">
            {" "}
          </h6>
          <div className="w-full h-4 mb-3 bg-slate-200 dark:bg-opacity-25 rounded"></div>
          <div className="w-full h-4 mb-3 bg-slate-200 dark:bg-opacity-25 rounded"></div>
          <div className="w-full h-4 mb-3 bg-slate-200 dark:bg-opacity-25 rounded"></div>
          <div className="w-1/2 h-4 mb-3 bg-slate-200 dark:bg-opacity-25 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsSkeleton;
