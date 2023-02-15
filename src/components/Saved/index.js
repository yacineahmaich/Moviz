import React from "react";
import icons from "../../assets/icons.svg";
import { useSavedContext } from "../../context/saved";
import MoviesList from "../utils/MoviesList";

const Saved = ({ onClose }) => {
  const { savedMovies } = useSavedContext();

  const closeHandler = (e) => {
    const movieCardtitle = e.target.closest("#movie-card-title");
    if (!movieCardtitle) return;
    onClose();
  };

  return (
    <div className="relative w-[90vw] md:w-[80vw] px-4 pt-4 pb-6 md:pb-8 bg-white">
      <h3 className="text-xl md:text-2xl font-semibold text-dark mb-8">
        Saved
      </h3>
      <div onClick={closeHandler}>
        <MoviesList movies={savedMovies} />
        {savedMovies.length === 0 && (
          <div className="w-full flex flex-col items-center gap-6 justify-center">
            <svg className="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44">
              <use href={`${icons}#icon-empty`}></use>
            </svg>
            <p className="capitalize text-sm md:text-lg  text-dark mb-8">
              your saved is currently empty!
            </p>
          </div>
        )}
      </div>

      <button
        className="absolute top-4 right-4 shadow-md p-2 rounded-full"
        onClick={onClose}
      >
        <svg className="w-4 md:w-5 h-4 md:h-5 fill-dark">
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Saved;
