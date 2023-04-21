import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="flex h-14 flex-row justify-evenly items-center footer">
      <Logo />
      <div className="footer-text"> Brewing soon in Singapore. 2023.</div>
      <div className="w-28"></div>
    </div>
  );
};

export default Footer;
