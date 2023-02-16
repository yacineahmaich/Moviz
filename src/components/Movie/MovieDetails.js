import React from "react";
import icons from "../../assets/icons.svg";
import poster from "../../assets/demo-movie-poster.jpg";
import Genres from "./Genres";
import Overview from "./Overview";

const MovieDetails = ({
  poster,
  title,
  rate,
  releaseDate,
  overview,
  genres,
  onSave,
  isSaved,
}) => {
  return (
    <section className="relative w-full sm:h-[50vw] sm:max-h-[75vh] flex flex-col sm:flex-row">
      {/* poster */}
      <div className="w-full h-60  sm:w-[66%] lg:w-[50%]  sm:h-full bg-slate-200 mb-4 sm:mb-0 border-x-8 border-primary-dark sm:border-none shadow-lg">
        <img
          src={poster}
          alt="poster"
          className="w-full h-full object-cover bg-top"
        />
      </div>

      {/* info */}
      <div className="w-full h-full flex flex-col px-0 sm:px-6 font-bebas sm:pt-2 md:pt-4">
        <div className="w-full flex items-baseline sm:justify-start gap-3 mb-3 sm:mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xluppercase font-semibold tracking-wide sm:text-left text-dark dark:text-gray-light">
            {title}
          </h2>
          {/* save button */}
          <button
            className={`border border-${
              isSaved ? "primary-dark" : "dark"
            } dark:border-${
              isSaved ? "primary-dark" : "gray-light"
            }  rounded-full p-2 sm:p-3 transition-transform active:scale-90`}
            onClick={onSave}
          >
            <svg
              className={`w-5 h-5 fill-${
                isSaved ? "primary-dark" : "dark"
              } dark:fill-${isSaved ? "primary-dark" : "gray-light"}`}
            >
              <use href={`${icons}#icon-heart${isSaved ? "-fill" : ""}`}></use>
            </svg>
          </button>
        </div>
        {/* Date & Rate */}
        <div>
          <h5 className="text-dark dark:text-black text-xl md:text-2xl">
            {releaseDate}
          </h5>
          <label className="text-xl flex items-center gap-1">
            <span>{rate}</span>
            <svg className="w-4 h-4 translate-y-[-2px]">
              <use href={`${icons}#icon-star`}></use>
            </svg>
          </label>
        </div>

        {/* Genres */}
        <Genres genres={genres} />

        {/* overview */}
        <Overview overview={overview} />
      </div>
    </section>
  );
};

export default MovieDetails;
