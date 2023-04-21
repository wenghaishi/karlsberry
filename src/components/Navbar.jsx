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
      className="w-full h-16 flex fixed flex-row justify-between px-12 z-20 items-center bg-inherit"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* <Link to='/'><img src="logo.png" alt="" className='h-10  ml-4' /></Link> */}
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
