import React from "react";

const CastItem = ({ id, character, name, image }) => {
  return (
    <figure className="flex bg-gray-light dark:bg-opacity-5">
      <div className="w-24 h-20 sm:h-24 sm:w-32 cast-img bg-slate-200">
        <img src={image} alt="cast" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-between px-4 py-3 font-bebas">
        <h5 className="text-sm sm:text-lg text-dark dark:text-gray-light">
          {character}
        </h5>
        <h3 className="text-md sm:text-xl text-primary-dark">{name}</h3>
      </div>
    </figure>
  );
};

export default CastItem;
