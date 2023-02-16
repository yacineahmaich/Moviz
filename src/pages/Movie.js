import React, { useEffect, useState } from "react";
import { useSavedContext } from "../context/saved";
import { useParams } from "react-router-dom";
import {
  MovieDetails,
  Cast,
  Recommandations,
  MovieDetailsSkeleton,
} from "../components/Movie";

import { API_BASE_URL, API_KEY } from "../config/API";

const Movie = () => {
  // get MovieId from url
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
    (async function () {
      try {
        setIsLoading(true);
        const [
          movieDetailsResponse,
          movieCreditsResponse,
          movieRecommandationsResponse,
        ] = await Promise.all([
          fetch(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}`),
          fetch(`${API_BASE_URL}movie/${id}/credits?api_key=${API_KEY}`),
          fetch(
            `${API_BASE_URL}movie/${id}/recommendations?api_key=${API_KEY}`
          ),
        ]);

        const [movieData, creditsData, recommandationsData] = await Promise.all(
          [
            movieDetailsResponse.json(),
            movieCreditsResponse.json(),
            movieRecommandationsResponse.json(),
          ]
        );

        // const res = await fetch(
        //   `${API_BASE_URL}movie/${id}?api_key=${API_KEY}`
        // );

        // if (!res.ok) throw new Error("Something went wrong !");

        // const data = await res.json();

        const cast = creditsData.cast
          .filter((cast) => cast.profile_path)
          .map((cast) => {
            return {
              id: cast.id,
              character: cast.character,
              name: cast.name,
              image: `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
            };
          })
          .slice(0, 8);

        const recommandations = recommandationsData.results.map((movie) => {
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

        setMovie({
          id: movieData.id,
          backdrop: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
          poster: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
          title: movieData.title,
          rate: movieData.vote_average.toFixed(1),
          genres: movieData.genres,
          overview: movieData.overview,
          releaseDate: movieData.release_date,
          views: movieData.vote_count,
          cast,
          recommandations,
        });
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  const { savedMovies, saveMovie } = useSavedContext();

  const saveMovieHandler = () => {
    saveMovie(movie);
  };

  const isSaved = savedMovies?.map((item) => item.id).includes(movie.id);

  return (
    <div className="w-full p-4 min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-20px)] md:p-5 lg:p-7">
      {isLoading ? (
        <MovieDetailsSkeleton />
      ) : (
        <>
          <MovieDetails
            poster={movie.poster}
            title={movie.title}
            rate={movie.rate}
            overview={movie.overview}
            releaseDate={movie.releaseDate}
            views={movie.views}
            genres={movie.genres}
            onSave={saveMovieHandler}
            isSaved={isSaved}
          />
          <Cast cast={movie.cast ?? []} />
          <Recommandations movies={movie.recommandations ?? []} />
        </>
      )}
    </div>
  );
};

export default Movie;
