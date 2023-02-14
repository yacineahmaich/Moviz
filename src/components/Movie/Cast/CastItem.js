import React from "react";
import castImage from "../../../assets/cast-1.jpg";

const CastItem = () => {
  return (
    <figure className="flex bg-gray-light">
      <div className="h-20 w-24 sm:h-24 sm:w-32 cast-img">
        <img
          src={castImage}
          alt="cast"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col py-3 px-4 justify-between font-bebas">
        <h5 className="text-sm sm:text-lg text-dark">jolie manda</h5>
        <h3 className="text-md sm:text-xl text-primary-dark">madolva smaile</h3>
      </div>
    </figure>
  );
};

export default CastItem;
