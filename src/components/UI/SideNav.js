import React from "react";
import icons from "../../assets/icons.svg";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="fixed left-0 bottom-0 w-full md:w-24 h-20 md:h-full flex items-center justify-center border-r border-transparent dark:border-gray bg-dark font-poppins z-40">
      <ul className="flex gap-8 md:flex-col">
        <SideBarIcon icon={`${icons}#icon-home`} text="home" />
        <SideBarIcon
          icon={`${icons}#icon-popular`}
          text="popular"
          page="/popular"
        />
        <SideBarIcon
          icon={`${icons}#icon-now-playing`}
          text="top&nbsp;watched"
          page="/topwatched"
        />
        <SideBarIcon
          icon={`${icons}#icon-upcoming`}
          text="upcoming"
          page="/upcoming"
        />
      </ul>
    </aside>
  );
};

const SideBarIcon = ({ icon, text, page = "/" }) => {
  return (
    <li className="group relative cursor-pointer">
      <NavLink
        to={page}
        className={({ isActive }) => (isActive ? "fill-primary" : "fill-white")}
      >
        <svg className="side-bar-icon">
          <use href={icon}></use>
        </svg>
        <span className="side-bar-tooltip">{text}</span>
      </NavLink>
    </li>
  );
};

export default SideNav;
