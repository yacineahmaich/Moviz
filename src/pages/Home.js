import React from "react";
import icons from "../assets/icons.svg";
import usePage from "../hooks/usePage";
import useScrollup from "../hooks/useScrollup";
import { API_BASE_URL, API_KEY } from "../config/API";
import useFetchMovies from "../hooks/useFetchMovies";
import { getCardsSkeleton } from "../components/utils/MovieCardSkeleton";

import MovieShowCase from "../components/Home/MovieShowCase";
import MovieShowCaseSkeleton from "../components/Home/MovieShowCaseSkeleton";
import MoviesList from "../components/utils/MoviesList";
import ErrorMessage from "../components/utils/ErrorMessage";

const Home = () => {
  const { page, getNextPage } = usePage();
  const { movies, isLoading, totalPages, error } = useFetchMovies(
    `${API_BASE_URL}discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc&page=${page}`
  );

  useScrollup();

  return (
    <div className="w-full mt-2 md:mt-0">
      {isLoading && page === 1 && <MovieShowCaseSkeleton />}
      {!isLoading | (page > 1) ? <MovieShowCase movies={movies} /> : null}
      <div className="px-4 py-2 mt-12 mb-4 md:px-8">
        <h3 className="mb-8 text-xl md:text-2xl dark:text-gray-light">
          Exclusive & New
        </h3>
        {isLoading && page === 1 && getCardsSkeleton(8)}
        {!isLoading | (page > 1) && <MoviesList movies={movies} />}
      </div>

      {!error && page < totalPages && (
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
      )}

      {/* err message */}
      {error && page === 1 && <ErrorMessage error={error} />}
    </div>
  );
};

export default Home;
