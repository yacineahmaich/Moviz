import React from "react";
import icons from "../../assets/icons.svg";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="fixed bottom-0 left-0 z-40 flex items-center justify-center w-full h-20 border-t md:border-r md:w-24 md:h-full border-gray bg-dark font-poppins">
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
    <li className="relative cursor-pointer group">
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
