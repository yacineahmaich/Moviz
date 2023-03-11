import React from "react";
import icons from "../../assets/icons.svg";
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
          className="object-cover w-full h-full bg-top"
        />
      </div>

      {/* info */}
      <div className="flex flex-col w-full h-full px-0 sm:px-6 font-bebas sm:pt-2 md:pt-4">
        <div>
          <div className="flex items-center w-full gap-3 mb-1 sm:justify-start md:mb-4">
            <h2 className="text-3xl font-semibold tracking-wide uppercase sm:text-2xl lg:text-5xl sm:text-left text-dark  dark:text-gray-light">
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
                className={`w-4 md:h-5 h-4 md:w-5 fill-${
                  isSaved ? "primary-dark" : "dark"
                } dark:fill-${isSaved ? "primary-dark" : "gray-light"}`}
              >
                <use
                  href={`${icons}#icon-heart${isSaved ? "-fill" : ""}`}
                ></use>
              </svg>
            </button>
          </div>
          {/* Date & Rate */}
          <div>
            <h5 className="text-xl text-dark dark:text-[#b1aeae] md:text-2xl">
              {releaseDate}
            </h5>
            <label className="flex items-center gap-2 text-xl dark:text-[#b1aeae]">
              <span>{rate}</span>
              <svg className="w-4 h-4 translate-y-[-2px] fill-primary-dark">
                <use href={`${icons}#icon-star`}></use>
              </svg>
            </label>
          </div>
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
