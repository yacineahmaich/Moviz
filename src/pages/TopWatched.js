import React, { useEffect } from "react";
import icons from "../assets/icons.svg";
import usePage from "../hooks/usePage";
import { API_BASE_URL, API_KEY } from "../config/API";
import useFetchMovies from "../hooks/useFetchMovies";
import { getCardsSkeleton } from "../components/utils/MovieCardSkeleton";
import MoviesList from "../components/utils/MoviesList";

const TopWatched = () => {
  const { page, getNextPage } = usePage();
  const { movies, isLoading, totalPages, error } = useFetchMovies(
    `${API_BASE_URL}movie/top_rated?api_key=${API_KEY}&page=${page}`
  );

  // scroll to the top of the page
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, []);

  return (
    <div className="w-full">
      <div className="mt-12 mb-4 py-2 px-4 md:px-8">
        <h3 className="text-xl md:text-2xl mb-8 dark:text-gray-light">
          Top Watched
        </h3>
        {isLoading && page === 1 && getCardsSkeleton(8)}
        {!isLoading | (page > 1) && <MoviesList movies={movies} />}
      </div>

      <div className="w-full flex justify-center py-4">
        {page < totalPages && !isLoading && (
          <button
            className="px-8 py-2 rounded bg-slate-100 uppercase text-dark text-sm shadow-md"
            onClick={getNextPage}
          >
            load more
            <span className="ml-2 font-semibold">&darr;</span>
          </button>
        )}
        {isLoading && page > 1 && (
          <svg className="w-6 h-6 fill-dark dark:fill-gray-light animate-spin">
            <use href={`${icons}#icon-loader`}></use>
          </svg>
        )}
      </div>
    </div>
  );
};

export default TopWatched;
