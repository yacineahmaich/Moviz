import React from "react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons.svg";
import backdrop from "../../assets/demo-movie-backdrop.jpg";
import poster from "../../assets/demo-movie-poster.jpg";

const MovieShowCase = () => {
  return (
    <div className="relative w-full before:absolute before:inset-0 before:bg-gray font-bebas">
      <img
        src={backdrop}
        alt="backdrop"
        className="w-full h-[300px] lg:h-[360px] object-cover"
      />
      <div className="absolute min-w-[180px] max-w-[180px] sm:max-w-[350px] md:max-w-[430px] lg:max-w-[620px] xl:max-w-max sm:min-w-[250px] md:min-w-[300px] bottom-2 left-2 md:bottom-6 md:left-6 bg-[#fff4]  p-3 rounded-sm">
        <Link to={`/movies/12`}>
          <h2 className="text-2xl md:text-4xl tracking-wider uppercase text-white hover:text-primary-dark w-max max-w-full  truncate">
            spider-man
          </h2>
        </Link>
        <h5 className="text-black text-md md:text-lg">09-12-2003</h5>
        <label className="text-black flex items-center gap-2 text-sm md:text-lg">
          7.3
          <svg className="w-3 h-3 md:w-4 md:h-4 fill-black translate-y-[-2px]">
            <use href={`${icons}#icon-star`}></use>
          </svg>
        </label>
      </div>
      <div className="absolute  w-32 md:w-36 lg:w-44 bottom-0 right-8 md:right-14  border-8 border-white translate-y-1/4">
        <img
          src={poster}
          alt="poster"
          className="h-36 md:h-44 lg:h-48 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default MovieShowCase;
