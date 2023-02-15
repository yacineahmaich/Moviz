import React from "react";

const Genres = ({ genres }) => {
  console.log(genres);
  return (
    <ul className="flex flex-wrap gap-3 lg:gap-4  font-poppins text-sm my-8">
      {genres.map((genre) => (
        <li
          key={genre.id}
          className="lg:py-[2px] px-3 lg:px-5 lg:rounded-full border rounded-xl"
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
