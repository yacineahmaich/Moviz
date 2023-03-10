import React from "react";

const Container = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen pb-20 sm:pt-16 pt-28 md:pt-20 md:pl-24 font-poppins md:pb-0 dark:bg-dark ">
      {children}
    </div>
  );
};

export default Container;
