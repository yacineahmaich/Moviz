import React from "react";
import CastItem from "./CastItem";

const Cast = ({ cast }) => {
  if (cast.length === 0) return null;

  return (
    <section className="mt-12">
      <h3 className="text-xl font-normal text-dark dark:text-gray-light mb-8">
        Top Cast
      </h3>

      <div className="w-full grid  min-[500px]:grid-cols-2 lg:grid-cols-3  gap-5">
        {cast.map((cast) => (
          <CastItem
            key={cast.id}
            id={cast.id}
            character={cast.character}
            name={cast.name}
            image={cast.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Cast;
