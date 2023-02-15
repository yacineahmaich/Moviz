import React from "react";

const Overview = ({ overview }) => {
  return (
    <div className="font-poppins mt-auto max-w-2xl">
      <h6 className="font-medium text-primary-dark mb-2 capitalize md:text-lg lg:text-xl">
        overview
      </h6>
      <p className="text-sm lg:text-lg text-[#444] md:text-md tracking-wide leading-[150%] font-thin text-justify bg-gray-light p-3 rounded-md">
        {overview}
      </p>
    </div>
  );
};

export default Overview;
