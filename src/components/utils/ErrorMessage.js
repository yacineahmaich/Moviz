import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorMessage = ({ error }) => {
  const navigate = useNavigate();

  const headBack = () => navigate("..");

  const reload = () => navigate(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-20 space-y-3">
      {/* <svg className="w-50 md:w-80 h-50 md:h-80 fill-gray">
            <use href={`${icons}#icon-error`}></use>
          </svg> */}
      <p className="font-medium dark:text-white text-dark">
        Somthing went wrong 🤕
      </p>
      <span className="text-center text-zinc-400">
        Sorry about that, please try again or check <br /> your connection
      </span>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 text-sm text-white transition-colors bg-green-900 border rounded-md dark:border-white border-gray hover:bg-green-800"
          onClick={headBack}
        >
          Head Back
        </button>
        <button
          className="px-4 py-2 text-sm border rounded-md dark:text-white text-dark dark:border-white border-dark"
          onClick={reload}
        >
          Reload
        </button>
      </div>
      <p className="text-xs text-zinc-600">Error: {error?.message}</p>
    </div>
  );
};

export default ErrorMessage;
