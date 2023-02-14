import React from "react";
import logo from "../../assets/logo-icon-light.png";
import icons from "../../assets/icons.svg";
import Modal from "../UI/Modal";
import Saved from "../Saved";

const Header = () => {
  return (
    <header className="fixed h-16 md:h-20 top-0 left-0  w-full flex items-center justify-between px-4 md:px-8 md:pl-28 bg-white z-30 border-b border-gray-light">
      <div className="h-14 md:h-full">
        <img src={logo} alt="Logo" className="max-h-full" />
      </div>

      <div className="h-full flex items-center gap-6">
        <button className="p-2 border border-transparent hover:border-dark rounded-full">
          <svg className="w-6 h-6 fill-dark">
            <use href={`${icons}#icon-moon`}></use>
          </svg>
        </button>

        <button className="group flex items-center gap-6 bg-primary py-1 px-6 rounded-full hover:border-b-4 active:border-b-2  border-b-dark transition-all">
          <span className="text-white text-lg font-normal capitalize font-bebas">
            saved
          </span>
          <svg className="w-5 h-5 fill-primary-dark group-hover:fill-dark ">
            <use href={`${icons}#icon-heart-fill`}></use>
          </svg>
        </button>

        {/* Modak */}
        <Modal>
          <Saved />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
