import React, { useEffect } from "react";
import icons from "../assets/icons.svg";
import usePage from "../hooks/usePage";
import { API_BASE_URL, API_KEY } from "../config/API";
import useFetchMovies from "../hooks/useFetchMovies";
import { getCardsSkeleton } from "../components/utils/MovieCardSkeleton";
import MoviesList from "../components/utils/MoviesList";

const Upcoming = () => {
  const { page, getNextPage } = usePage();
  const { movies, isLoading, totalPages, error } = useFetchMovies(
    `${API_BASE_URL}movie/upcoming?api_key=${API_KEY}&page=${page}`
  );

  // scroll to the top of the page
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, []);

  return (
    <div className="w-full">
      <div className="px-4 py-2 mt-12 mb-4 md:px-8">
        <h3 className="mb-8 text-xl md:text-2xl dark:text-gray-light">
          Up Coming
        </h3>
        {isLoading && page === 1 && getCardsSkeleton(8)}
        {!isLoading | (page > 1) && <MoviesList movies={movies} />}
      </div>

      <div className="flex justify-center w-full py-8">
        <button
          className="flex justify-center py-2 text-sm uppercase rounded shadow-md w-44 bg-slate-100 text-dark"
          onClick={getNextPage}
        >
          {isLoading && page > 1 ? (
            <svg className="w-5 h-5 fill-dark animate-spin">
              <use href={`${icons}#icon-spinner`}></use>
            </svg>
          ) : (
            <>
              load more
              <span className="ml-2 font-semibold">&darr;</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
