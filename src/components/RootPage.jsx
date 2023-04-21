import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Product from "./Product";
import Footer from "./Footer";

const RootPage = () => {
  return (
    <div className="flex flex-col">
        <Banner />
        <div className="relative inline z-50">
          <img
            src="bg.jpg"
            alt=""
            className="absolute object-cover mt-0 h-screen"
          />
          <Navbar />
        </div>
        <HeroSection />
        <Product />
        <Product />
        <Footer />
    </div>
  );
};

export default RootPage;
