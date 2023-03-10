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
    <div className="relative w-[90vw] md:w-[80vw] px-4 pt-4 pb-6 md:pb-8 bg-white dark:bg-dark">
      <h3 className="mb-8 text-xl font-semibold md:text-2xl text-dark dark:text-gray-light">
        Saved
      </h3>
      <div onClick={closeHandler}>
        <MoviesList movies={savedMovies} />
        {savedMovies.length === 0 && (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <svg className="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 fill-gray">
              <use href={`${icons}#icon-empty`}></use>
            </svg>
            <p className="mb-8 text-sm md:text-lg text-dark dark:text-black">
              Your saved is currently empty!
            </p>
          </div>
        )}
      </div>

      <button
        className="absolute p-2 rounded-full shadow-md top-4 right-4 dark:shadow-gray"
        onClick={onClose}
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 fill-dark dark:fill-white">
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Saved;
