import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons.svg";

const MovieShowCase = ({ movies }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((cur) => {
        if (cur > 0 && cur === movies.length - 1) return 0;
        return cur + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [movies.length]);

  const movie = movies[current];
  if (!movie) return;

  return (
    <div className="relative w-full before:absolute before:inset-0 before:bg-gray font-bebas">
      <img
        src={movie.backdrop}
        alt={movie.title}
        className="w-full h-[300px] lg:h-[360px] object-cover"
      />
      <div className="absolute min-w-[180px] max-w-[180px] sm:max-w-[350px] md:max-w-[430px] lg:max-w-[620px] xl:max-w-max sm:min-w-[250px] md:min-w-[300px] bottom-2 left-2 md:bottom-6 md:left-6 bg-[#fff4]  p-3 rounded-sm">
        <Link to={`/movies/${movie.id}`}>
          <h2 className="text-2xl md:text-4xl tracking-wider uppercase text-white hover:text-primary-dark w-max max-w-full  truncate">
            {movie.title}
          </h2>
        </Link>
        <h5 className="text-black text-md md:text-lg">{movie.releaseDate}</h5>
        <label className="text-black flex items-center gap-2 text-sm md:text-lg">
          {movie.rate}
          <svg className="w-3 h-3 md:w-4 md:h-4 fill-black translate-y-[-2px]">
            <use href={`${icons}#icon-star`}></use>
          </svg>
        </label>
      </div>
      <div className="absolute  w-32 md:w-36 lg:w-44 bottom-0 right-8 md:right-14  border-8 border-white bg-gray-light translate-y-1/4">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-36 md:h-44 lg:h-48 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default MovieShowCase;
