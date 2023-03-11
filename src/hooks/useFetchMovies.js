import { useState, useEffect } from "react";
import { TIMEOUT_SEC } from "../config/APP";
import { timeout } from "../utils";
import { toast } from "react-toastify";

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

        if (!res.ok)
          throw new Error("Something went wrong! Please try again 🚨");

        const data = await res.json();

        const newPageMovies = data?.results?.map((movie) => {
          return {
            id: movie.id,
            backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
            overview: movie.overview,
            rate: movie.vote_average.toFixed(1),
            releaseDate: movie.release_date,
            views: movie.vote_count,
          };
        });

        setMovies((movies) => [...movies, ...newPageMovies]);
        setTotalPages(data.total_pages);
      } catch (err) {
        toast.error("Something went Wrong! Please check your connection 💥", {
          className: "toast",
        });
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return {
    movies,
    isLoading,
    totalPages,
    error,
  };
};

export default useFetchMovies;
