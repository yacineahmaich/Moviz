import React from "react";
import CastItem from "./CastItem";

const Cast = () => {
  return (
    <section className="mt-12">
      <h3 className="text-xl font-normal text-dark mb-8">Top Cast</h3>

      <div className="w-full grid  min-[500px]:grid-cols-2 lg:grid-cols-3  gap-5">
        <CastItem />
        <CastItem />
        <CastItem />
        <CastItem />
        <CastItem />
        <CastItem />
      </div>
    </section>
  );
};

export default Cast;
