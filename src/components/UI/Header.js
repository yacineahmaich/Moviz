import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-light.png";
import icons from "../../assets/icons.svg";
import Modal from "../UI/Modal";
import Saved from "../Saved";

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
    <header className="fixed h-16 md:h-20 top-0 left-0  w-full flex items-center justify-between px-4 md:px-8 md:pl-28 bg-white dark:bg-dark  z-30 border-b border-gray-light dark:border-zinc-700">
      <div className="h-14 dark:rounded-lg overflow-hidden">
        <img src={logo} alt="Logo" className="max-h-full" />
      </div>

      <div className="h-full flex items-center gap-6">
        <button
          className="relative border border-transparent hover:border-dark dark:hover:border-yellow-400 rounded-full w-10 h-10 overflow-hidden"
          onClick={toggleThemeHandler}
        >
          <div className="absolute w-full right-0 bottom-0 dark:-bottom-10 transition-all -translate-x-[1px]">
            <span className="w-10 h-10 flex justify-center items-center">
              <svg className="w-6 h-6 fill-yellow-400  ">
                <use href={`${icons}#icon-sun`}></use>
              </svg>
            </span>
            <span className="w-10 h-10 flex justify-center items-center">
              <svg className="w-6 h-6 fill-dark dark:fill-white ">
                <use href={`${icons}#icon-moon`}></use>
              </svg>
            </span>
          </div>
        </button>

        <button
          className="group flex items-center gap-6 bg-primary py-1 px-6 rounded-full hover:border-b-4 active:border-b-2  border-b-dark dark:border-b-white transition-all"
          onClick={openSavedHandler}
        >
          <span className="text-white text-lg font-normal capitalize font-bebas">
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
