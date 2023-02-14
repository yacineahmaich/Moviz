import React from "react";

const Container = ({ children }) => {
  return (
    <div className="relative pt-16 md:pt-20 md:pl-24 w-full min-h-screen font-poppins pb-20 md:pb-0">
      {children}
    </div>
  );
};

export default Container;
