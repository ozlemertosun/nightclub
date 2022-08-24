import * as React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import navBottomline from "../img/bottom_line2.png";

import logoNav from "../img/logo/Logo.png";

const Navigation = () => {
  let activeStyle = {
    color: "#ff2a70",
  };

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <nav className="w-full border-y-[1px] border-partyPink overflow-hidden sticky top-0 bg-darkGray flex py-3">
        <div className="h-14 w-14 bg-partyPink rotate-45 relative z-10 -left-7 -top-10"></div>
        <div className="m-auto">
          <img src={logoNav} />
        </div>
        <ul className="flex justify-around items-center gap-x-6 max-w-[1425px] m-auto h-auto">
          <li className="relative">
            <NavLink
              className="navtype ml-auto"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              home
            </NavLink>

            {pathname === "/" && (
              <div className="h-1 mx-auto absolute bg-gradient-to-l from-transparent via-partyPink w-full -bottom-3 to-transparent"></div>
            )}
          </li>
          <li className="relative">
            {" "}
            <NavLink
              className="navtype"
              to="about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              about us
            </NavLink>
            {pathname === "/about" && (
              <div className="h-1 mx-auto absolute bg-gradient-to-l from-transparent via-partyPink w-full -bottom-3 to-transparent"></div>
            )}
          </li>
          <li className="relative">
            {" "}
            <NavLink
              className="navtype"
              to="blog"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              blog
            </NavLink>
            {pathname === "/blog" && (
              <div className="h-1 mx-auto absolute bg-gradient-to-l from-transparent via-partyPink w-full -bottom-3 to-transparent"></div>
            )}
          </li>
          <li className="relative">
            <NavLink
              className="navtype"
              to="events"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              events
            </NavLink>
            {pathname === "/events" && (
              <div className="h-1 mx-auto absolute bg-gradient-to-l from-transparent via-partyPink w-full -bottom-3 to-transparent"></div>
            )}
          </li>
          <li className="relative">
            {" "}
            <NavLink
              className="navtype"
              to="gallery"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              gallery
            </NavLink>
            {pathname === "/gallery" && (
              <div className="h-1 mx-auto absolute bg-gradient-to-l from-transparent via-partyPink w-full -bottom-3 to-transparent"></div>
            )}
          </li>
          <li className="relative">
            {" "}
            <NavLink
              className="navtype ml-auto"
              to="book"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              book table
            </NavLink>
            {pathname === "/book" && (
              <div className="h-1 mx-auto absolute bg-gradient-to-l from-transparent via-partyPink w-full -bottom-3 to-transparent"></div>
            )}
          </li>
          <li className="relative">
            {" "}
            <NavLink
              className="navtype"
              to="contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              contact us
            </NavLink>
            {pathname === "/contact" && (
              <div className="h-1 mx-auto absolute bg-gradient-to-l from-transparent via-partyPink w-full -bottom-3 to-transparent"></div>
            )}
          </li>
        </ul>
        <div className="h-14 w-14 bg-partyPink rotate-45 relative z-10 -bottom-10 -right-7"></div>
      </nav>
    </>
  );
};

export default Navigation;
