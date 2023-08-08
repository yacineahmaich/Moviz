import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-light.png";
import icons from "../../assets/icons.svg";
import Modal from "../UI/Modal";
import Saved from "../Saved";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSaved, setShowSaved] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem("theme");

    if (!storage) {
      // Check if the dark-mode Media-Query matches
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
      return;
    }
    // if media queries not supported set theme to light
    if (!window.matchMedia) return setTheme("light");

    setTheme(storage);
  }, []);

  const openSavedHandler = () => {
    setShowSaved(true);
  };
  const closeSavedHandler = () => {
    setShowSaved(false);
  };

  const toggleThemeHandler = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    document.body.className = theme;
    // update theme in localStorage
    theme && localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 z-30 flex items-center justify-between w-full h-16 px-4 bg-white border-b md:h-20 md:px-8 md:pl-28 dark:bg-dark border-gray-light dark:border-zinc-700">
      <div className="h-10 overflow-hidden md:h-14 dark:rounded-lg">
        <Link to="/">
          <img src={logo} alt="Logo" className="max-h-full" />
        </Link>
      </div>

      <div className="flex items-center h-full gap-2 md:gap-6">
        <Search />
        <button
          className="relative w-10 h-10 overflow-hidden border border-transparent rounded-full hover:border-dark dark:hover:border-yellow-400"
          onClick={toggleThemeHandler}
        >
          <div className="absolute w-full right-0 bottom-0 dark:-bottom-10 transition-all -translate-x-[1px]">
            <span className="flex items-center justify-center w-10 h-10">
              <svg className="w-6 h-6 fill-yellow-400 ">
                <use href={`${icons}#icon-sun`}></use>
              </svg>
            </span>
            <span className="flex items-center justify-center w-10 h-10">
              <svg className="w-6 h-6 fill-dark dark:fill-white ">
                <use href={`${icons}#icon-moon`}></use>
              </svg>
            </span>
          </div>
        </button>

        <button
          className="flex items-center gap-2 px-6 py-1 transition-all rounded-full md:gap-6 group bg-primary hover:border-b-4 active:border-b-2 border-b-dark dark:border-b-white"
          onClick={openSavedHandler}
        >
          <span className="text-lg font-normal text-white capitalize font-bebas">
            saved
          </span>
          <svg className="w-5 h-5 fill-primary-dark group-hover:fill-dark dark:group-hover:fill-white">
            <use href={`${icons}#icon-heart-fill`}></use>
          </svg>
        </button>

        {/* Modak */}
        {showSaved && (
          <Modal onClose={closeSavedHandler}>
            <Saved onClose={closeSavedHandler} />
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
