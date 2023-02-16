import React from "react";

const Overview = ({ overview }) => {
  return (
    <div className="font-poppins mt-auto">
      <h6 className="font-medium text-primary-dark dark:text-gray-light sm:pl-4 mb-2 capitalize md:text-lg lg:text-xl">
        overview
      </h6>
      <p className="text-sm lg:text-lg text-[#444] dark:text-zinc-300 md:text-md tracking-normal lg:tracking-wide leading-[150%] font-thin text-justify bg-gray-light dark:bg-opacity-10 p-3 rounded-md">
        {overview}
      </p>
    </div>
  );
};

export default Overview;
