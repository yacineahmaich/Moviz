import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(
        <div className="fixed inset-0 z-40 bg-gray backdrop-blur-sm"></div>,
        document.getElementById("modal")
      )}
      {createPortal(
        <div className="fixed top-[calc(50%-2.5rem)] md:top-1/2 left-1/2 md:left-[calc(50%+3rem)] -translate-x-1/2 -translate-y-1/2 z-50 min-h-[40vh] max-h-[70vh] overflow-auto">
          {children}
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
