import React from "react";

const Genres = ({ genres }) => {
  return (
    <ul className="flex flex-wrap gap-3 lg:gap-4  font-poppins text-sm my-8">
      {genres.map((genre) => (
        <li
          key={genre.id}
          className="lg:py-[2px] px-3 lg:px-5 lg:rounded-full border rounded-xl dark:border-gray-light dark:text-gray-light"
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
