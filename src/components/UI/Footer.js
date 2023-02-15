import React from "react";
import icons from "../../assets/icons.svg";

const Footer = () => {
  return (
    <footer className="w-full flex  justify-between items-center  px-4 h-16 border-t  border-[#dcdcdc] mt-auto">
      <p className="text-xs md:text-sm text-[#444]">
        © Copyright by{" "}
        <a
          href="https://github.com/yacineahmaich"
          target="_blank"
          rel="noreferrer"
          className="underline font-semibold text-dark"
        >
          Yacine Ahmaich
        </a>{" "}
        all rights reserved
      </p>

      <ul className="flex gap-5 fill-gray">
        <li className="">
          <a href="#zd">
            <svg className="w-4 h-4 md:w-5 md:h-5  hover:fill-dark transition-all">
              <use href={`${icons}#icon-twitter`}></use>
            </svg>
          </a>
        </li>
        <li className="">
          <a href="#zd">
            <svg className="w-4 h-4 md:w-5 md:h-5 hover:fill-dark transition-all">
              <use href={`${icons}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li className="">
          <a href="#zd">
            <svg className="w-4 h-4 md:w-5 md:h-5 hover:fill-dark transition-all">
              <use href={`${icons}#icon-github`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
