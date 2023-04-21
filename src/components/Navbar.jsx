import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      className="w-full h-16 flex flex-col mt-6 md:mt-0 fixed md:flex-row justify-between px-12 z-20 items-center "
      style={{
        transform: visible ? "translateY(0)" : "translateY(-115%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Link to="/">
        <img src="logo.webp" alt="" className="h-6"/>
      </Link>
      <div className="flex flex-row items-center justify-between w-64 h-10 text-2xl">
        <Link to="/about" className="text-[#351152] nav-link">
          Story
        </Link>
        <Link to="/team" className="text-[#351152] nav-link">
          Team
        </Link>
        <Link to="/shop" className="text-[#351152] nav-link">
          Shop
        </Link>
        <a
          href="mailto: sylvester@karlsberry.com"
          className="text-[#351152] nav-link"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
