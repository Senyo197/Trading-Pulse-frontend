import React, { useState, useEffect, useRef } from "react";
import logo from "@Images/eagle-logo.png";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    if (isNavbarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarVisible]);

  return (
    <nav className="md:hidden h-20 bg-black sticky left-0 w-screen text-white flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="ml-4 my-2 h-12 w-12 filter brightness-0 invert"
        />
      </div>
      <button
        onClick={toggleNavbar}
        className="px-6 text-white"
        aria-label="Toggle Navbar"
      >
        {isNavbarVisible ? <CloseIcon className="text-2xl" /> : <MenuIcon className="text-xl" />}
      </button>

      {isNavbarVisible && (
        <div ref={navbarRef} className="fixed top-20 left-0 px-4 bg-black h-88 w-full flex flex-col text-white items-center rounded-b-3xl">
          <div>
            <Link to="/" className="mb-4 flex text-xl" onClick={closeNavbar}>
              USD Chart
            </Link>
            <Link to="/aud" className="mb-4 flex text-xl" onClick={closeNavbar}>
              AUD Chart
            </Link>
            <Link to="/cad" className="mb-4 flex text-xl" onClick={closeNavbar}>
              CAD Chart
            </Link>
            <Link to="/chf" className="mb-4 flex text-xl" onClick={closeNavbar}>
              CHF Chart
            </Link>
            <Link to="/cny" className="mb-4 flex text-xl" onClick={closeNavbar}>
              CNY Chart
            </Link>
            <Link to="/eur" className="mb-4 flex text-xl" onClick={closeNavbar}>
              EUR Chart
            </Link>
            <Link to="/gbp" className="mb-4 flex text-xl" onClick={closeNavbar}>
              GBP Chart
            </Link>
            <Link to="/jpy" className="mb-4 flex text-xl" onClick={closeNavbar}>
              JPY Chart
            </Link>
            <Link to="/nzd" className="mb-4 flex text-xl" onClick={closeNavbar}>
              NZD Chart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
