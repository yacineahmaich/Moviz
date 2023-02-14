import React from "react";
import icons from "../../assets/icons.svg";
import MoviesList from "../utils/MoviesList";

const Saved = () => {
  return (
    <div className="relative w-[90vw] md:w-[80vw] px-4 pt-4 pb-6 md:pb-8 bg-white">
      <h3 className="text-xl md:text-2xl font-semibold text-dark mb-8">
        Saved
      </h3>

      {/* <MoviesList /> */}
      <div className="text-center">
        <p className="capitalize text-xl md:text-2xl font-semibold text-dark mb-8">
          your saved is currently empty!
        </p>

        <button className="bg-primary-dark shadow-md rounded-full py-2 px-16 md:px-22 text-white">
          Okay
        </button>
      </div>

      <button className="absolute top-4 right-4 shadow-md p-2 rounded-full">
        <svg className="w-4 md:w-5 h-4 md:h-5 fill-dark">
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Saved;
