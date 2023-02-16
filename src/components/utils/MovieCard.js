import React from "react";
import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";

const MovieCard = ({ id, idx, poster, title, rate, releaseDate, views }) => {
  return (
    <div
      className="relative w-full font-bebas bg-gray-light dark:bg-opacity-5 shadow-2xl animate-[pulse_.2s_linear]"
      style={{ animationDelay: `${idx * 50}ms` }}
    >
      <div className="rate-tag">
        <span className="text-white text-md">{rate}</span>
        <svg className="w-3 h-3 translate-y-[-2px]  fill-white">
          <use href={`${icons}#icon-star`}></use>
        </svg>
      </div>
      <div className="w-full bg-slate-200 dark:bg-opacity-5">
        <img
          src={poster}
          alt="poster"
          className="w-full h-40 md:h-48 lg:h-56 object-cover"
        />
      </div>

      <div className="px-2 py-2 lg:px-3">
        <Link to={`/movies/${id}`}>
          <h3
            className="tracking-wide text-lg text-dark md:text-xl xl:text-2xl lg:mb-2 truncate cursor-pointer hover:text-primary-dark w-max max-w-full dark:text-white dark:hover:text-primary-dark"
            id="movie-card-title"
          >
            {title}
          </h3>
        </Link>
        <h5 className="text-dark lg:text-lg dark:text-gray">{releaseDate}</h5>
        <div className="w-full flex justify-between items-center">
          <label className="flex items-center justify-between gap-2 text-gray lg:text-lg dark:text-gray">
            <svg className="w-4 h-4 fill-primary-dark">
              <use href={`${icons}#icon-eye`}></use>
            </svg>
            {views}
          </label>
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-8 md:w-14 md:h-10 bg-primary-dark movie-card-triangle"></div>
      </div>
    </div>
  );
};
export default MovieCard;
