import React from "react";
import icons from "../../assets/icons.svg";

const Footer = () => {
  return (
    <footer className="w-full flex  justify-between items-center  px-4 h-16 border-t  border-[#dcdcdc] dark:border-[#444] mt-auto bg-white dark:bg-gray">
      <p className="text-xs md:text-sm text-[#444] dark:text-gray-light">
        © Copyright by{" "}
        <a
          href="https://github.com/yacineahmaich"
          target="_blank"
          rel="noreferrer"
          className="font-semibold underline text-dark dark:text-white"
        >
          Yacine Ahmaich
        </a>{" "}
        all rights reserved
      </p>

      <ul className="flex gap-5 fill-gray dark:fill-gray-light">
        <li className="">
          <a
            href="https://twitter.com/yacine_a23"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 transition-all md:w-5 md:h-5 hover:fill-dark dark:hover:fill-inherit">
              <use href={`${icons}#icon-twitter`}></use>
            </svg>
          </a>
        </li>
        <li className="">
          <a
            href="https://github.com/yacineahmaich"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 transition-all md:w-5 md:h-5 hover:fill-dark dark:hover:fill-inherit">
              <use href={`${icons}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li className="">
          <a
            href="https://github.com/yacineahmaich"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 transition-all md:w-5 md:h-5 hover:fill-dark dark:hover:fill-inherit">
              <use href={`${icons}#icon-github`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
