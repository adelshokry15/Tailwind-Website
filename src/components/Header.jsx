import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 20) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.classList.replace("pt-16", "pt-6");
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.classList.replace("pt-6", "pt-16");
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className=" fixed top-0 w-full z-50 pt-16 pb-7 transition-all duration-300"
    >
      <div className="flex justify-between container mx-auto items-center flex-col sm:flex-row gap-5 sm:gap-0">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <ul className="flex gap-8">
          <li className="text-gray-200">
            <a
              href="#"
              className="hover:text-white hover:underline transition-colors duration-200"
            >
              Features
            </a>
          </li>
          <li className="text-gray-200">
            <a
              href="#"
              className="hover:text-white hover:underline transition-colors duration-200"
            >
              Team
            </a>
          </li>
          <li className="text-gray-200">
            <a
              href="#"
              className="hover:text-white hover:underline transition-colors duration-200"
            >
              Signin
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
